import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createChatwootAccount, suspendChatwootAccount } from "@/lib/services/chatwoot";
import { deployLinkiInstance, stopLinkiInstance } from "@/lib/services/coolify";

const PADDLE_WEBHOOK_SECRET = process.env.PADDLE_WEBHOOK_SECRET_KEY || "";

/**
 * Validates Paddle Webhook Signature (HMAC-SHA256)
 */
function verifyPaddleSignature(rawBody: string, signatureHeader: string | null): boolean {
  if (!PADDLE_WEBHOOK_SECRET || !signatureHeader) {
    // If secret is not yet set in dev/local, log warning but allow graceful handling
    if (process.env.NODE_ENV === "development") {
      console.warn("[Paddle Webhook] ⚠️ Skipping signature check (dev mode or no secret set).");
      return true;
    }
    return false;
  }

  try {
    const parts = signatureHeader.split(";").reduce((acc, part) => {
      const [k, v] = part.split("=");
      if (k && v) acc[k.trim()] = v.trim();
      return acc;
    }, {} as Record<string, string>);

    const ts = parts.ts;
    const h1 = parts.h1;

    if (!ts || !h1) return false;

    const payload = `${ts}:${rawBody}`;
    const expectedHash = crypto
      .createHmac("sha256", PADDLE_WEBHOOK_SECRET)
      .update(payload)
      .digest("hex");

    return crypto.timingSafeEqual(Buffer.from(h1, "hex"), Buffer.from(expectedHash, "hex"));
  } catch (err) {
    console.error("[Paddle Webhook] Signature verification failed:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("Paddle-Signature") || req.headers.get("paddle-signature");

    if (!verifyPaddleSignature(rawBody, signature)) {
      console.error("[Paddle Webhook] ❌ Invalid Paddle Signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const eventType = event.event_type || event.type || "";
    const eventData = event.data || {};

    console.log(`[Paddle Webhook] 📩 Received event: '${eventType}'`);

    switch (eventType) {
      case "subscription.activated":
      case "subscription.created":
      case "transaction.completed": {
        // Extract customer & company details from Paddle custom_data
        const customData = eventData.custom_data || {};
        const customer = eventData.customer || {};

        const companyName = customData.company_name || customData.companyName || "Mi Empresa";
        const adminEmail = (customData.admin_email || customer.email || "").trim().toLowerCase();
        const adminPassword = customData.admin_password || "InHubFlow2026!";
        const rawSlug = customData.company_slug || companyName.toLowerCase().replace(/[^a-z0-9]/g, "");
        const companySlug = rawSlug.substring(0, 24) || `empresa-${Date.now().toString().slice(-4)}`;

        console.log(`[Paddle Webhook] 🚀 Provisioning suite for: ${companyName} (${adminEmail})`);

        // 1. Provision B2C Chatwoot Account (Max 4 Agents)
        const chatwootResult = await createChatwootAccount({
          companyName,
          adminEmail,
          adminPassword,
          maxAgents: 4,
        });

        // 2. Provision B2B Linki Dedicated Instance (4 Slots)
        const coolifyResult = await deployLinkiInstance({
          companySlug,
          companyName,
          adminEmail,
          adminPassword,
          slotsLimit: 4,
        });

        return NextResponse.json({
          received: true,
          provisioned: {
            b2c_chatwoot: chatwootResult,
            b2b_linki: coolifyResult,
          },
        });
      }

      case "subscription.canceled": {
        const customData = eventData.custom_data || {};
        const chatwootAccountId = customData.chatwoot_account_id;
        const coolifyAppUuid = customData.coolify_app_uuid;

        if (chatwootAccountId) {
          await suspendChatwootAccount(Number(chatwootAccountId));
        }

        if (coolifyAppUuid) {
          await stopLinkiInstance(coolifyAppUuid);
        }

        console.log(`[Paddle Webhook] ⏸️ Suspended services for canceled subscription: ${eventData.id}`);
        return NextResponse.json({ received: true, status: "suspended" });
      }

      case "subscription.past_due": {
        console.warn(`[Paddle Webhook] ⚠️ Subscription past due: ${eventData.id}`);
        return NextResponse.json({ received: true, status: "past_due_logged" });
      }

      default:
        console.log(`[Paddle Webhook] ℹ️ Unhandled event type: ${eventType}`);
        return NextResponse.json({ received: true });
    }
  } catch (error: any) {
    console.error("[Paddle Webhook] ❌ Error processing webhook:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

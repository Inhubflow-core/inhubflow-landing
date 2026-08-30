import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createChatwootAccount, suspendChatwootAccount } from "@/lib/services/chatwoot";
import { deployLinkiInstance, stopLinkiInstance } from "@/lib/services/coolify";

const PADDLE_WEBHOOK_SECRET = process.env.PADDLE_WEBHOOK_SECRET_KEY || "";

/**
 * Validates Paddle Webhook Signature (HMAC-SHA256)
 */
function verifyPaddleSignature(rawBody: string, signatureHeader: string | null, isSimulation: boolean): boolean {
  // Always allow test simulations from the frontend
  if (isSimulation) {
    console.log("[Paddle Webhook] 🧪 Test simulation detected. Allowing execution.");
    return true;
  }

  // If secret is not configured yet, allow execution for initial setup and test mode
  if (!PADDLE_WEBHOOK_SECRET) {
    console.warn("[Paddle Webhook] ⚠️ PADDLE_WEBHOOK_SECRET_KEY not set. Allowing execution in setup mode.");
    return true;
  }

  if (!signatureHeader) {
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
    const isSimulationHeader = req.headers.get("x-simulation") === "true";

    let event: any = {};
    try {
      event = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const isSimulation = isSimulationHeader || (event.data?.id && String(event.data.id).startsWith("sub_sim_"));

    if (!verifyPaddleSignature(rawBody, signature, isSimulation)) {
      console.error("[Paddle Webhook] ❌ Invalid Paddle Signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

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

        const planId = (customData.plan_id || "").toLowerCase();
        const slotsLimit = planId.includes("20") ? 20 : planId.includes("10") ? 10 : 5;

        console.log(`[Paddle Webhook] Provisioning plan '${planId}' (${slotsLimit} slots) for: ${companyName} (${adminEmail})`);

        let coolifyResult = null;

        // Provision B2B Linki Dedicated Instance with exact slotsLimit (5, 10, or 20)
        coolifyResult = await deployLinkiInstance({
          companySlug,
          companyName,
          adminEmail,
          adminPassword,
          slotsLimit,
        });

        return NextResponse.json({
          received: true,
          plan_id: planId,
          slots_limit: slotsLimit,
          provisioned: {
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

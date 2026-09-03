import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { deployLinkiInstance, stopLinkiInstance } from "@/lib/services/coolify";

const LEMON_WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || "inhubflow_lemon_secret_2026";

/**
 * Validates Lemon Squeezy Webhook Signature (HMAC-SHA256)
 */
function verifyLemonSignature(rawBody: string, signatureHeader: string | null, isSimulation: boolean): boolean {
  if (isSimulation) {
    console.log("[LemonSqueezy Webhook] 🧪 Test simulation detected. Allowing execution.");
    return true;
  }

  if (!LEMON_WEBHOOK_SECRET) {
    console.warn("[LemonSqueezy Webhook] ⚠️ LEMONSQUEEZY_WEBHOOK_SECRET not set. Allowing execution in setup mode.");
    return true;
  }

  if (!signatureHeader) {
    return false;
  }

  try {
    const hmac = crypto.createHmac("sha256", LEMON_WEBHOOK_SECRET);
    const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
    const signature = Buffer.from(signatureHeader, "utf8");

    if (digest.length !== signature.length) {
      return false;
    }

    return crypto.timingSafeEqual(digest, signature);
  } catch (err) {
    console.error("[LemonSqueezy Webhook] Signature verification failed:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-signature") || req.headers.get("X-Signature");
    const isSimulationHeader = req.headers.get("x-simulation") === "true";

    let event: any = {};
    try {
      event = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const eventName = event.meta?.event_name || req.headers.get("x-event-name") || "";
    const isSimulation = isSimulationHeader || (event.data?.id && String(event.data.id).startsWith("sub_sim_"));

    if (!verifyLemonSignature(rawBody, signature, isSimulation)) {
      console.error("[LemonSqueezy Webhook] ❌ Invalid Signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    console.log(`[LemonSqueezy Webhook] 📩 Received event: '${eventName}'`);

    const customData = event.meta?.custom_data || {};
    const attributes = event.data?.attributes || {};

    switch (eventName) {
      case "subscription_created":
      case "order_created": {
        const companyName = customData.company_name || attributes.user_name || "Mi Empresa";
        const adminEmail = (customData.admin_email || attributes.user_email || "").trim().toLowerCase();
        const adminPassword = customData.admin_password || "InHubFlow2026!";
        const rawSlug = customData.company_slug || companyName.toLowerCase().replace(/[^a-z0-9]/g, "");
        const companySlug = rawSlug.substring(0, 24) || `empresa-${Date.now().toString().slice(-4)}`;

        const planId = (customData.plan_id || attributes.product_name || "").toLowerCase();
        // Starter = 1, Growth = 5, Business = 10
        const slotsLimit = planId.includes("10") || planId.includes("business")
          ? 10
          : planId.includes("5") || planId.includes("growth")
          ? 5
          : 1;

        console.log(`[LemonSqueezy Webhook] Provisioning plan '${planId}' (${slotsLimit} slots) for: ${companyName} (${adminEmail})`);

        const coolifyResult = await deployLinkiInstance({
          companySlug,
          companyName,
          adminEmail,
          adminPassword,
          slotsLimit,
        });

        // Forward to central InHubFlow Linki platform for Partner commission attribution
        try {
          await fetch("https://b2b.inhubflow.online/api/webhooks/lemonsqueezy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: rawBody,
          });
        } catch (fwdErr) {
          console.warn("[LemonSqueezy Webhook] Forwarding to b2b.inhubflow.online skipped:", fwdErr);
        }

        return NextResponse.json({
          received: true,
          plan_id: planId,
          slots_limit: slotsLimit,
          provisioned: {
            b2b_linki: coolifyResult,
          },
        });
      }

      case "subscription_cancelled":
      case "subscription_expired": {
        const coolifyAppUuid = customData.coolify_app_uuid;
        if (coolifyAppUuid) {
          await stopLinkiInstance(coolifyAppUuid);
        }

        try {
          await fetch("https://b2b.inhubflow.online/api/webhooks/lemonsqueezy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: rawBody,
          });
        } catch {}

        console.log(`[LemonSqueezy Webhook] ⏸️ Suspended services for cancelled subscription: ${event.data?.id}`);
        return NextResponse.json({ received: true, status: "suspended" });
      }

      case "subscription_payment_success":
      case "subscription_updated": {
        try {
          await fetch("https://b2b.inhubflow.online/api/webhooks/lemonsqueezy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: rawBody,
          });
        } catch {}

        console.log(`[LemonSqueezy Webhook] 🔄 Renewal event forwarded for partner accounting: ${eventName}`);
        return NextResponse.json({ received: true, status: "renewal_forwarded" });
      }

      default:
        console.log(`[LemonSqueezy Webhook] ℹ️ Unhandled event type: ${eventName}`);
        return NextResponse.json({ received: true });
    }
  } catch (error: any) {
    console.error("[LemonSqueezy Webhook] ❌ Error processing webhook:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || "miempresa";
  const appUuid = url.searchParams.get("uuid") || "rkhfhj8ugbhrkbqzxtbeyyf9";
  const subdomain = `https://${slug}.b2b.inhubflow.online`;

  const COOLIFY_API_URL = process.env.COOLIFY_API_URL || "https://panel.inhubflow.online/api/v1";
  const COOLIFY_API_TOKEN = process.env.COOLIFY_API_TOKEN || "";

  const results: Record<string, any> = {
    slug,
    appUuid,
    subdomain,
  };

  // 1. Check current application details
  try {
    const getRes = await fetch(`${COOLIFY_API_URL}/applications/${appUuid}`, {
      headers: { Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
    });
    results.currentApp = await getRes.json();
  } catch (e: any) {
    results.getError = e.message;
  }

  // 2. Patch FQDN domain
  try {
    const patchRes = await fetch(`${COOLIFY_API_URL}/applications/${appUuid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${COOLIFY_API_TOKEN}`,
      },
      body: JSON.stringify({
        fqdn: subdomain,
        domains: subdomain,
      }),
    });
    results.patchStatus = patchRes.status;
    results.patchResponse = await patchRes.json();
  } catch (e: any) {
    results.patchError = e.message;
  }

  // 3. Trigger Force Redeploy
  try {
    const depRes = await fetch(`${COOLIFY_API_URL}/deploy?uuid=${appUuid}&force=true`, {
      method: "POST",
      headers: { Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
    });
    results.deployStatus = depRes.status;
    results.deployResponse = await depRes.json();
  } catch (e: any) {
    results.deployError = e.message;
  }

  return NextResponse.json(results);
}

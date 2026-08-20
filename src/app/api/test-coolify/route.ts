import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const COOLIFY_API_URL = process.env.COOLIFY_API_URL || "https://panel.inhubflow.online/api/v1";
  const COOLIFY_API_TOKEN = process.env.COOLIFY_API_TOKEN || "";

  if (!COOLIFY_API_TOKEN) {
    return NextResponse.json({
      status: "error",
      message: "COOLIFY_API_TOKEN is missing from process.env",
      env: {
        COOLIFY_API_URL,
        hasToken: false,
      },
    }, { status: 500 });
  }

  const results: Record<string, any> = {
    COOLIFY_API_URL,
    tokenPrefix: COOLIFY_API_TOKEN.substring(0, 8) + "...",
  };

  // 1. Test /servers endpoint
  try {
    const sRes = await fetch(`${COOLIFY_API_URL}/servers`, {
      headers: { Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
    });
    results.serversStatus = sRes.status;
    results.servers = await sRes.json();
  } catch (err: any) {
    results.serversError = err.message || String(err);
  }

  // 2. Test /projects endpoint
  try {
    const pRes = await fetch(`${COOLIFY_API_URL}/projects`, {
      headers: { Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
    });
    results.projectsStatus = pRes.status;
    results.projects = await pRes.json();
  } catch (err: any) {
    results.projectsError = err.message || String(err);
  }

  return NextResponse.json(results);
}

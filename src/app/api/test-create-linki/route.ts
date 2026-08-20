import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || "miempresa";
  const appUuid = url.searchParams.get("uuid") || "rkhfhj8ugbhrkbqzxtbeyyf9";
  const subdomain = `https://${slug}.b2b.inhubflow.online`;

  const COOLIFY_API_URL = process.env.COOLIFY_API_URL || "https://panel.inhubflow.online/api/v1";
  const COOLIFY_API_TOKEN = process.env.COOLIFY_API_TOKEN || "";

  const results: Record<string, any> = {};

  // Try Test 1: PATCH with { domains: subdomain }
  try {
    const res1 = await fetch(`${COOLIFY_API_URL}/applications/${appUuid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
      body: JSON.stringify({ domains: subdomain }),
    });
    results.test1_domains = { status: res1.status, body: await res1.json() };
  } catch (e: any) {
    results.test1_domains_error = e.message;
  }

  // Try Test 2: PATCH with { custom_domain: subdomain }
  try {
    const res2 = await fetch(`${COOLIFY_API_URL}/applications/${appUuid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
      body: JSON.stringify({ custom_domain: subdomain }),
    });
    results.test2_custom_domain = { status: res2.status, body: await res2.json() };
  } catch (e: any) {
    results.test2_custom_domain_error = e.message;
  }

  // Try Test 3: POST /applications/{uuid} with { fqdn: subdomain }
  try {
    const res3 = await fetch(`${COOLIFY_API_URL}/applications/${appUuid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
      body: JSON.stringify({ fqdn: subdomain }),
    });
    results.test3_post_fqdn = { status: res3.status, body: await res3.json() };
  } catch (e: any) {
    results.test3_post_fqdn_error = e.message;
  }

  // Try Test 4: POST /applications/{uuid} with { domains: subdomain }
  try {
    const res4 = await fetch(`${COOLIFY_API_URL}/applications/${appUuid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
      body: JSON.stringify({ domains: subdomain }),
    });
    results.test4_post_domains = { status: res4.status, body: await res4.json() };
  } catch (e: any) {
    results.test4_post_domains_error = e.message;
  }

  return NextResponse.json(results);
}

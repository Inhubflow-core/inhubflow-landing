import { NextRequest, NextResponse } from "next/server";
import { deployLinkiInstance } from "@/lib/services/coolify";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || `test${Date.now().toString().slice(-4)}`;
  const company = url.searchParams.get("company") || `Empresa ${slug}`;

  console.log(`[Test Create Linki] Triggering manual test creation for: ${slug}`);

  const result = await deployLinkiInstance({
    companySlug: slug,
    companyName: company,
    adminEmail: `admin@${slug}.com`,
    adminPassword: "Password123!",
    slotsLimit: 4,
  });

  return NextResponse.json({
    test_slug: slug,
    result,
  });
}

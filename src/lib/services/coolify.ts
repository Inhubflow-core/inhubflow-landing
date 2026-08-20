/**
 * Coolify REST API Client for Automated B2B Linki Instance Provisioning
 */

const COOLIFY_API_URL = process.env.COOLIFY_API_URL || "https://panel.inhubflow.online/api/v1";
const COOLIFY_API_TOKEN = process.env.COOLIFY_API_TOKEN || "";
const COOLIFY_SERVER_UUID = process.env.COOLIFY_SERVER_UUID || "default";
const COOLIFY_PROJECT_UUID = process.env.COOLIFY_PROJECT_UUID || "default";
const COOLIFY_ENVIRONMENT_NAME = process.env.COOLIFY_ENVIRONMENT_NAME || "production";

interface DeployLinkiInstanceParams {
  companySlug: string;
  companyName: string;
  adminEmail: string;
  adminPassword?: string;
  slotsLimit?: number;
}

export interface CoolifyProvisionResult {
  success: boolean;
  applicationUuid?: string;
  subdomainUrl?: string;
  error?: string;
}

/**
 * Creates and deploys a dedicated Linki instance for a customer with 4 slots and custom subdomain.
 */
export async function deployLinkiInstance(params: DeployLinkiInstanceParams): Promise<CoolifyProvisionResult> {
  const { companySlug, companyName, adminEmail, adminPassword = "", slotsLimit = 4 } = params;
  const cleanSlug = companySlug.toLowerCase().replace(/[^a-z0-9-]/g, "");
  const subdomainUrl = `https://${cleanSlug}.b2b.inhubflow.online`;

  if (!COOLIFY_API_TOKEN) {
    console.warn("[Coolify Service] ⚠️ COOLIFY_API_TOKEN is not configured in environment.");
  }

  try {
    // 1. Create Application from Linki Git repository
    const response = await fetch(`${COOLIFY_API_URL}/applications/public`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${COOLIFY_API_TOKEN}`,
      },
      body: JSON.stringify({
        project_uuid: COOLIFY_PROJECT_UUID,
        server_uuid: COOLIFY_SERVER_UUID,
        environment_name: COOLIFY_ENVIRONMENT_NAME,
        git_repository: "https://github.com/Inhubflow-core/inhubflow-linki",
        git_branch: "main",
        build_pack: "nixpacks",
        ports_exposes: "3000",
        fqdn: subdomainUrl,
        name: `Linki B2B - ${companyName} (${cleanSlug})`,
        description: `Dedicated InHubFlow B2B instance for ${companyName} with ${slotsLimit} slots`,
        environment_variables: [
          { key: "INITIAL_ADMIN_EMAIL", value: adminEmail, is_build_time: false },
          { key: "INITIAL_ADMIN_PASSWORD", value: adminPassword, is_build_time: false },
          { key: "SLOTS_LIMIT", value: String(slotsLimit), is_build_time: false },
          { key: "COMPANY_NAME", value: companyName, is_build_time: false },
          { key: "NEXTAUTH_URL", value: subdomainUrl, is_build_time: false },
          { key: "NEXTAUTH_SECRET", value: "inhubflow_secret_salt_2026", is_build_time: false },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to create Coolify application: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    const applicationUuid = data.uuid || data.id;

    // 2. Trigger deployment
    if (applicationUuid) {
      await fetch(`${COOLIFY_API_URL}/deploy?uuid=${applicationUuid}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${COOLIFY_API_TOKEN}`,
        },
      });
    }

    console.log(`[Coolify Service] ✅ Linki instance '${cleanSlug}' deployed at ${subdomainUrl} with ${slotsLimit} slots.`);

    return {
      success: true,
      applicationUuid,
      subdomainUrl,
    };
  } catch (error: any) {
    console.error("[Coolify Service] ❌ Error provisioning Linki instance:", error.message || error);
    return {
      success: false,
      error: error.message || "Unknown error",
      subdomainUrl,
    };
  }
}

/**
 * Stops or pauses an instance when subscription is canceled.
 */
export async function stopLinkiInstance(applicationUuid: string): Promise<boolean> {
  try {
    const res = await fetch(`${COOLIFY_API_URL}/applications/${applicationUuid}/stop`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${COOLIFY_API_TOKEN}`,
      },
    });
    return res.ok;
  } catch (err) {
    console.error(`[Coolify Service] ❌ Failed to stop instance ${applicationUuid}:`, err);
    return false;
  }
}

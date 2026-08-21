/**
 * Coolify REST API Client for Automated B2B Linki Instance Provisioning
 */

const COOLIFY_API_URL = process.env.COOLIFY_API_URL || "https://panel.inhubflow.online/api/v1";
const COOLIFY_API_TOKEN = process.env.COOLIFY_API_TOKEN || "";
const COOLIFY_SERVER_UUID = process.env.COOLIFY_SERVER_UUID || "kkiircnr8oycyecz4jopnmeu";
const COOLIFY_PROJECT_UUID = process.env.COOLIFY_PROJECT_UUID || "obaptxnn3pias032gd7zuqjm";
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
  details?: unknown;
}

/**
 * Dynamically queries Coolify API to get the active server UUID.
 */
async function resolveServerUuid(): Promise<string> {
  try {
    const res = await fetch(`${COOLIFY_API_URL}/servers`, {
      headers: { Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
    });
    if (res.ok) {
      const servers = await res.json();
      if (Array.isArray(servers) && servers.length > 0) {
        const foundUuid = servers[0].uuid || servers[0].id;
        if (foundUuid) return foundUuid;
      }
    }
  } catch (e) {
    console.error("[Coolify Service] Could not fetch servers:", e);
  }
  return "kkiircnr8oycyecz4jopnmeu";
}

/**
 * Dynamically queries Coolify API to get the active project UUID and environment name.
 */
async function resolveProjectAndEnv(): Promise<{ projectUuid: string; environmentName: string }> {
  try {
    const res = await fetch(`${COOLIFY_API_URL}/projects`, {
      headers: { Authorization: `Bearer ${COOLIFY_API_TOKEN}` },
    });
    if (res.ok) {
      const projects = await res.json();
      if (Array.isArray(projects) && projects.length > 0) {
        const pUuid = projects[0].uuid || projects[0].id;
        const envName = projects[0].environments?.[0]?.name || "production";
        if (pUuid) {
          return { projectUuid: pUuid, environmentName: envName };
        }
      }
    }
  } catch (e) {
    console.error("[Coolify Service] Could not fetch projects:", e);
  }

  return { 
    projectUuid: "obaptxnn3pias032gd7zuqjm", 
    environmentName: "production" 
  };
}

/**
 * Creates and deploys a dedicated Linki instance for a customer with 4 slots and custom subdomain.
 */
export async function deployLinkiInstance(params: DeployLinkiInstanceParams): Promise<CoolifyProvisionResult> {
  const { companySlug, companyName, adminEmail, adminPassword = "", slotsLimit = 4 } = params;
  const cleanSlug = companySlug.toLowerCase().replace(/[^a-z0-9-]/g, "");
  const subdomainUrl = `https://${cleanSlug}-b2b.inhubflow.online`;

  if (!COOLIFY_API_TOKEN) {
    const msg = "COOLIFY_API_TOKEN no está configurado en las variables de entorno de la Landing.";
    console.error(`[Coolify Service] ❌ ${msg}`);
    return { success: false, error: msg, subdomainUrl };
  }

  try {
    const serverUuid = await resolveServerUuid();
    const { projectUuid, environmentName } = await resolveProjectAndEnv();

    console.log(`[Coolify Service] 📡 Creating app on server: '${serverUuid}', project: '${projectUuid}', env: '${environmentName}'`);

    // 1. Create Public Application (Coolify v4 rejects fqdn in POST /applications/public)
    const createPayload = {
      project_uuid: projectUuid,
      server_uuid: serverUuid,
      environment_name: environmentName,
      git_repository: "https://github.com/Inhubflow-core/inhubflow-linki",
      git_branch: "main",
      build_pack: "nixpacks",
      ports_exposes: "3000",
      name: `Linki B2B - ${companyName} (${cleanSlug})`,
      description: `Dedicated InHubFlow B2B instance for ${companyName} with ${slotsLimit} slots`,
    };

    const response = await fetch(`${COOLIFY_API_URL}/applications/public`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${COOLIFY_API_TOKEN}`,
      },
      body: JSON.stringify(createPayload),
    });

    const respText = await response.text();
    let data: any = {};
    try {
      data = JSON.parse(respText);
    } catch {
      data = { raw: respText };
    }

    if (!response.ok) {
      const errorMsg = data.message || data.error || `HTTP ${response.status}: ${respText}`;
      console.error(`[Coolify Service] ❌ Coolify API rejected application creation:`, errorMsg);
      return {
        success: false,
        error: errorMsg,
        details: data,
        subdomainUrl,
      };
    }

    const applicationUuid = data.uuid || data.id;

    // 2. Set Domain (Subdomain with SSL) on the newly created application
    if (applicationUuid) {
      console.log(`[Coolify Service] 🌐 Setting domain '${subdomainUrl}' for application: ${applicationUuid}`);
      try {
        await fetch(`${COOLIFY_API_URL}/applications/${applicationUuid}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${COOLIFY_API_TOKEN}`,
          },
          body: JSON.stringify({
            domains: subdomainUrl,
          }),
        });
      } catch (patchErr) {
        console.warn(`[Coolify Service] ⚠️ Could not patch domain:`, patchErr);
      }

      // 3. Inject Environment Variables into the application
      const envVars = [
        { key: "INITIAL_ADMIN_EMAIL", value: adminEmail, is_build_time: false },
        { key: "INITIAL_ADMIN_PASSWORD", value: adminPassword, is_build_time: false },
        { key: "SLOTS_LIMIT", value: String(slotsLimit), is_build_time: false },
        { key: "COMPANY_NAME", value: companyName, is_build_time: false },
        { key: "NEXTAUTH_URL", value: subdomainUrl, is_build_time: false },
        { key: "NEXTAUTH_SECRET", value: "inhubflow_secret_salt_2026", is_build_time: false },
      ];

      for (const envItem of envVars) {
        try {
          await fetch(`${COOLIFY_API_URL}/applications/${applicationUuid}/envs`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${COOLIFY_API_TOKEN}`,
            },
            body: JSON.stringify(envItem),
          });
        } catch {}
      }

      // 4. Trigger Build & Deployment
      console.log(`[Coolify Service] 🚀 Triggering deployment for application: ${applicationUuid}`);
      await fetch(`${COOLIFY_API_URL}/deploy?uuid=${applicationUuid}&force=true`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${COOLIFY_API_TOKEN}`,
        },
      });
    }

    console.log(`[Coolify Service] ✅ Linki instance '${cleanSlug}' created at ${subdomainUrl} (UUID: ${applicationUuid}).`);

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

/**
 * Chatwoot B2C API Client for Automated Account Provisioning
 */

const CHATWOOT_API_URL = process.env.CHATWOOT_API_URL || "https://b2c.inhubflow.online";
const CHATWOOT_ACCESS_TOKEN = process.env.CHATWOOT_ACCESS_TOKEN || "";

interface CreateChatwootAccountParams {
  companyName: string;
  adminEmail: string;
  adminName?: string;
  adminPassword?: string;
  maxAgents?: number;
}

export interface ChatwootProvisionResult {
  success: boolean;
  accountId?: number;
  adminUserId?: number;
  error?: string;
}

/**
 * Creates a new B2C Customer Account in Chatwoot with a limit of 4 agents.
 */
export async function createChatwootAccount(params: CreateChatwootAccountParams): Promise<ChatwootProvisionResult> {
  const { companyName, adminEmail, adminName = "Administrador", adminPassword, maxAgents = 4 } = params;

  if (!CHATWOOT_ACCESS_TOKEN) {
    console.warn("[Chatwoot Service] ⚠️ CHATWOOT_ACCESS_TOKEN is not configured in environment.");
  }

  try {
    // 1. Create the Account in Chatwoot via Platform API / Super Admin API
    const response = await fetch(`${CHATWOOT_API_URL}/platform/api/v1/accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_access_token: CHATWOOT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        name: companyName,
        limits: {
          max_agents: maxAgents,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to create Chatwoot account: ${response.status} - ${errText}`);
    }

    const accountData = await response.json();
    const accountId = accountData.id || accountData.data?.id;

    // 2. Create the Admin User and link to Account if password is provided
    let adminUserId: number | undefined;
    if (adminPassword) {
      const userRes = await fetch(`${CHATWOOT_API_URL}/platform/api/v1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_access_token: CHATWOOT_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          name: adminName,
          email: adminEmail,
          password: adminPassword,
          role: "administrator",
        }),
      });

      if (userRes.ok) {
        const userData = await userRes.json();
        adminUserId = userData.id || userData.data?.id;

        // Add user to account
        if (accountId && adminUserId) {
          await fetch(`${CHATWOOT_API_URL}/platform/api/v1/accounts/${accountId}/account_users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              api_access_token: CHATWOOT_ACCESS_TOKEN,
            },
            body: JSON.stringify({
              user_id: adminUserId,
              role: "administrator",
            }),
          });
        }
      }
    }

    console.log(`[Chatwoot Service] ✅ Account '${companyName}' (ID: ${accountId}) created with max ${maxAgents} agents.`);

    return {
      success: true,
      accountId,
      adminUserId,
    };
  } catch (error: any) {
    console.error("[Chatwoot Service] ❌ Error creating account:", error.message || error);
    return {
      success: false,
      error: error.message || "Unknown error",
    };
  }
}

/**
 * Suspends an account upon subscription cancellation or non-payment.
 */
export async function suspendChatwootAccount(accountId: number): Promise<boolean> {
  try {
    const res = await fetch(`${CHATWOOT_API_URL}/platform/api/v1/accounts/${accountId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        api_access_token: CHATWOOT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        status: "suspended",
      }),
    });
    return res.ok;
  } catch (err) {
    console.error(`[Chatwoot Service] ❌ Failed to suspend account ${accountId}:`, err);
    return false;
  }
}

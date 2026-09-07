import { NextRequest, NextResponse } from 'next/server';
import { BLOG_POSTS } from '@/data/blog/posts';

// Helper to create JWT for Google Service Account without external dependencies
function base64UrlEncode(str: string): string {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

export async function GET() {
  const baseUrl = 'https://inhubflow.online';
  const urls = [
    `${baseUrl}/blog/es`,
    `${baseUrl}/blog/en`,
    `${baseUrl}/blog/pt`,
    ...BLOG_POSTS.map((post) => `${baseUrl}/blog/${post.lang}/${post.slug}`),
  ];

  const hasCredentials = Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY
  );

  return NextResponse.json({
    status: 'ok',
    totalUrls: urls.length,
    googleIndexingApiConfigured: hasCredentials,
    instructions: hasCredentials
      ? 'Credentials configured. You can POST to this endpoint to ping Google.'
      : 'To automate Google Indexing API, add GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY to your environment variables and grant ownership to the service account in Google Search Console.',
    urls,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const targetUrl = body.url;
    const notificationType = body.type || 'URL_UPDATED';

    if (!targetUrl || typeof targetUrl !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid "url" in request body' },
        { status: 400 }
      );
    }

    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!clientEmail || !rawPrivateKey) {
      return NextResponse.json(
        {
          success: false,
          configured: false,
          message:
            'Google Indexing API credentials not found in environment variables. You can manually inspect and submit this URL in Google Search Console.',
          url: targetUrl,
          gscInspectionUrl: `https://search.google.com/search-console/inspect?resource_id=https%3A%2F%2Finhubflow.online%2F&id=${encodeURIComponent(
            targetUrl
          )}`,
        },
        { status: 200 }
      );
    }

    // Prepare Google Indexing API Request using crypto
    const crypto = await import('crypto');
    const privateKey = rawPrivateKey.replace(/\\n/g, '\n');

    const now = Math.floor(Date.now() / 1000);
    const jwtHeader = { alg: 'RS256', typ: 'JWT' };
    const jwtClaimSet = {
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    };

    const encodedHeader = base64UrlEncode(JSON.stringify(jwtHeader));
    const encodedClaimSet = base64UrlEncode(JSON.stringify(jwtClaimSet));
    const signatureInput = `${encodedHeader}.${encodedClaimSet}`;

    const signer = crypto.createSign('RSA-SHA256');
    signer.update(signatureInput);
    const signature = signer.sign(privateKey, 'base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    const assertion = `${signatureInput}.${signature}`;

    // Request OAuth Access Token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      return NextResponse.json(
        {
          error: 'Failed to obtain Google OAuth access token',
          details: tokenData,
        },
        { status: 500 }
      );
    }

    // Ping Google Indexing API
    const indexingResponse = await fetch(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenData.access_token}`,
        },
        body: JSON.stringify({
          url: targetUrl,
          type: notificationType,
        }),
      }
    );

    const indexingData = await indexingResponse.json();

    return NextResponse.json({
      success: indexingResponse.ok,
      status: indexingResponse.status,
      result: indexingData,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: 'Internal server error processing indexing request', details: errMessage },
      { status: 500 }
    );
  }
}

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.join(__dirname, '../service-account.json');
if (!fs.existsSync(keyPath)) {
  console.error('❌ No se encontró service-account.json');
  process.exit(1);
}

const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
const baseUrl = 'https://inhubflow.online';

function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const jwtHeader = { alg: 'RS256', typ: 'JWT' };
  const jwtClaimSet = {
    iss: key.client_email,
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
  const signature = signer.sign(key.private_key, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const assertion = `${signatureInput}.${signature}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

// Extract URLs from posts-es.ts, posts-en.ts, and posts-pt.ts
const esContent = fs.readFileSync(path.join(__dirname, '../src/data/blog/posts-es.ts'), 'utf8');
const enContent = fs.readFileSync(path.join(__dirname, '../src/data/blog/posts-en.ts'), 'utf8');
const ptContent = fs.readFileSync(path.join(__dirname, '../src/data/blog/posts-pt.ts'), 'utf8');

const esSlugs = [...esContent.matchAll(/slug"?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
const enSlugs = [...enContent.matchAll(/slug"?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
const ptSlugs = [...ptContent.matchAll(/slug"?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);

const allUrls = [
  `${baseUrl}`,
  `${baseUrl}/pricing`,
  `${baseUrl}/partners`,
  `${baseUrl}/blog/es`,
  ...esSlugs.map((s) => `${baseUrl}/blog/es/${s}`),
  `${baseUrl}/blog/en`,
  ...enSlugs.map((s) => `${baseUrl}/blog/en/${s}`),
  `${baseUrl}/blog/pt`,
  ...ptSlugs.map((s) => `${baseUrl}/blog/pt/${s}`),
];

async function indexAll() {
  console.log('\n======================================================');
  console.log(`🚀 INHUBFLOW - Enviando ${allUrls.length} URLs a Google Indexing API`);
  console.log(`👤 Service Account: ${key.client_email}`);
  console.log('======================================================\n');

  const token = await getAccessToken();
  if (!token) {
    console.error('❌ No se pudo obtener el token de acceso.');
    return;
  }

  let successCount = 0;

  for (let i = 0; i < allUrls.length; i++) {
    const url = allUrls[i];
    process.stdout.write(`[${i + 1}/${allUrls.length}] Enviando: ${url} ... `);

    try {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          url,
          type: 'URL_UPDATED',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log('✅ INDEXADA');
        successCount++;
      } else {
        console.log(`❌ ERROR ${res.status}: ${data?.error?.message || 'Error'}`);
      }
    } catch (err) {
      console.log(`❌ ERROR: ${err.message}`);
    }

    // Esperar 500ms entre llamadas
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log('\n======================================================');
  console.log(`🎯 Resumen: ${successCount} de ${allUrls.length} URLs enviadas con éxito.`);
  console.log('======================================================\n');
}

indexAll();

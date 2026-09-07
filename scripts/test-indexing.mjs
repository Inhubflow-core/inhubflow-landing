import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.join(__dirname, '../service-account.json');
const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function testIndexUrl(targetUrl) {
  console.log(`\n📡 Probando Google Indexing API para: ${targetUrl}`);
  console.log(`👤 Usando Service Account: ${key.client_email}`);

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

  // 1. Obtener Access Token
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok || !tokenData.access_token) {
    console.error('❌ Error obteniendo token de Google:', tokenData);
    return;
  }

  console.log('🔑 Token de acceso obtenido con éxito de Google Cloud!');

  // 2. Notificar a Google Indexing API
  const indexRes = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenData.access_token}`,
    },
    body: JSON.stringify({
      url: targetUrl,
      type: 'URL_UPDATED',
    }),
  });

  const indexData = await indexRes.json();

  if (indexRes.ok) {
    console.log('🎉 ¡ÉXITO TOTAL! Google ha recibido y aceptado la URL para indexación:');
    console.log(JSON.stringify(indexData, null, 2));
  } else {
    console.log(`⚠️ Respuesta de Google (Status ${indexRes.status}):`);
    console.log(JSON.stringify(indexData, null, 2));
    if (indexRes.status === 403) {
      console.log('\n💡 NOTA: Falta agregar el correo como "Proprietário" en Google Search Console para esta propiedad.');
    }
  }
}

// Probar con la primera URL del blog en español
testIndexUrl('https://inhubflow.online/blog/es/como-prospectar-en-linkedin-sin-que-te-bloqueen-la-cuenta');

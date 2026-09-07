/**
 * Script utilitario para gestionar e indexar URLs de InHubFlow en Google Search Console y Google Indexing API
 * Uso: node scripts/index-urls.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://inhubflow.online';

// Read blog slugs directly from posts.ts
const postsFilePath = path.join(__dirname, '../src/data/blog/posts.ts');
let esSlugs = [];
let enSlugs = [];
let ptSlugs = [];

try {
  const content = fs.readFileSync(postsFilePath, 'utf8');
  
  // Extract posts blocks
  const esMatch = content.match(/ESPAÑOL[\s\S]*?(?=INGLÉS|$)/);
  const enMatch = content.match(/INGLÉS[\s\S]*?(?=PORTUGUÊS|$)/);
  const ptMatch = content.match(/PORTUGUÊS[\s\S]*?$/);

  if (esMatch) {
    esSlugs = [...esMatch[0].matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  }
  if (enMatch) {
    enSlugs = [...enMatch[0].matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  }
  if (ptMatch) {
    ptSlugs = [...ptMatch[0].matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  }
} catch (err) {
  console.error('Error leyendo src/data/blog/posts.ts:', err.message);
}

console.log('\n======================================================');
console.log('🚀 INHUBFLOW - URLs Multi-idioma Listas para Indexación');
console.log('======================================================\n');

console.log('🇪🇸 [ESPAÑOL]:');
console.log(`- ${baseUrl}/blog/es`);
esSlugs.forEach((slug) => console.log(`- ${baseUrl}/blog/es/${slug}`));

console.log('\n🇺🇸 [ENGLISH]:');
console.log(`- ${baseUrl}/blog/en`);
enSlugs.forEach((slug) => console.log(`- ${baseUrl}/blog/en/${slug}`));

console.log('\n🇧🇷 [PORTUGUÊS]:');
console.log(`- ${baseUrl}/blog/pt`);
ptSlugs.forEach((slug) => console.log(`- ${baseUrl}/blog/pt/${slug}`));

const total = 3 + esSlugs.length + enSlugs.length + ptSlugs.length;
console.log(`\n📌 Total URLs listas: ${total} URLs.`);

console.log('\n------------------------------------------------------');
console.log('📋 OPCIÓN 1: INDEXACIÓN MANUAL EN GOOGLE SEARCH CONSOLE');
console.log('------------------------------------------------------');
console.log('1. Abre Google Search Console: https://search.google.com/search-console');
console.log('2. Pega la URL en el buscador superior ("Inspeccionar cualquier URL en inhubflow.online")');
console.log('3. Haz clic en el botón "Solicitar indexación".');
console.log('4. Tu sitemap oficial automático: https://inhubflow.online/sitemap.xml');
console.log('------------------------------------------------------');
console.log('🤖 OPCIÓN 2: AUTOMATIZACIÓN VÍA GOOGLE INDEXING API');
console.log('------------------------------------------------------');
console.log('• Endpoint habilitado en tu landing: POST /api/indexing');
console.log('• Envía un JSON: { "url": "https://inhubflow.online/blog/es/tu-articulo" }');
console.log('• Requiere variables: GOOGLE_SERVICE_ACCOUNT_EMAIL y GOOGLE_PRIVATE_KEY');
console.log('======================================================\n');

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
let slugs = [];

try {
  const content = fs.readFileSync(postsFilePath, 'utf8');
  slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
} catch (err) {
  console.error('Error leyendo src/data/blog/posts.ts:', err.message);
}

console.log('\n======================================================');
console.log('🚀 INHUBFLOW - URLs del Blog Listas para Indexación en Google');
console.log('======================================================\n');

const urls = [
  `${baseUrl}/blog`,
  ...slugs.map((slug) => `${baseUrl}/blog/${slug}`),
];

console.log(`📌 Se encontraron ${urls.length} URLs clave:\n`);
urls.forEach((url, i) => {
  console.log(`[${i + 1}] ${url}`);
});

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
console.log('• Envía un JSON: { "url": "https://inhubflow.online/blog/tu-articulo" }');
console.log('• Requiere variables: GOOGLE_SERVICE_ACCOUNT_EMAIL y GOOGLE_PRIVATE_KEY');
console.log('======================================================\n');

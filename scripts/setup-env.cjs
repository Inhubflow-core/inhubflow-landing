const fs = require('fs');
const path = require('path');

const keyPath = path.join(__dirname, '../service-account.json');
if (!fs.existsSync(keyPath)) {
  console.error('service-account.json not found');
  process.exit(1);
}

const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
const envPath = path.join(__dirname, '../.env.local');

let existing = '';
if (fs.existsSync(envPath)) {
  existing = fs.readFileSync(envPath, 'utf8');
}

const lines = [
  `GOOGLE_SERVICE_ACCOUNT_EMAIL="${key.client_email}"`,
  `GOOGLE_PRIVATE_KEY="${key.private_key.replace(/\r/g, '').replace(/\n/g, '\\n')}"`,
];

fs.writeFileSync(envPath, lines.join('\n') + '\n');
console.log('✅ .env.local configurado correctamente para:', key.client_email);

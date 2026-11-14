// Every file the service worker caches on install (SHELL in sw.js) must
// exist: one missing file makes the install fail, and the app then never
// updates or works offline.
import fs from 'node:fs';

const sw = fs.readFileSync('sw.js', 'utf8');
const list = /const SHELL = \[([\s\S]*?)\];/.exec(sw)?.[1];
if (!list) { console.error('SHELL not found in sw.js'); process.exit(1); }
const files = [...list.matchAll(/'([^']+)'/g)].map(m => m[1]).filter(f => f !== './');
const missing = files.filter(f => !fs.existsSync(f));
if (missing.length) { console.error(`Listed in sw.js but missing: ${missing.join(', ')}`); process.exit(1); }
console.log(`${files.length} shell files, all present.`);

// Génère fiches.json (liste des fiches du dossier vault/), à relancer après chaque modification des fiches : node make-index.js
const fs = require('fs'), path = require('path');
const VAULT = path.join(__dirname, 'vault');
function listMd(dir, rel = '') {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || (!rel && e.name.startsWith('_'))) continue;
    const r = rel ? rel + '/' + e.name : e.name, full = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(listMd(full, r));
    else if (e.name.endsWith('.md')) out.push({ path: r, mtime: Math.round(fs.statSync(full).mtimeMs) });
  }
  return out;
}
fs.writeFileSync(path.join(__dirname, 'fiches.json'), JSON.stringify(listMd(VAULT)));
console.log('fiches.json :', listMd(VAULT).length, 'fiches');

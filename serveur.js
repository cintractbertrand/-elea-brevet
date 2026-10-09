// Alternative au serveur PowerShell (Mac/Linux ou si Node.js est installe) : node site/serveur.js
const http = require('http'), fs = require('fs'), path = require('path');
const SITE = __dirname, VAULT = path.join(SITE, '..', 'elea');
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.pdf': 'application/pdf' };

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

function inside(root, rel) {
  const full = path.resolve(root, '.' + path.sep + rel);
  return full.startsWith(path.resolve(root) + path.sep) ? full : null;
}

const port = Number(process.env.PORT) || 8765;
http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const send = (code, type, body) => { res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store' }); res.end(body); };
  if (p === '/api/fiches') return send(200, TYPES['.json'], JSON.stringify(listMd(VAULT)));
  const file = p.startsWith('/vault/') ? inside(VAULT, p.slice(7)) : inside(SITE, p === '/' ? 'index.html' : p.slice(1));
  if (!file || !fs.existsSync(file) || !fs.statSync(file).isFile()) return send(404, 'text/plain; charset=utf-8', 'Introuvable');
  send(200, TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', fs.readFileSync(file));
}).listen(port, '127.0.0.1', () => console.log(`Fiches de revision : http://localhost:${port}/`));

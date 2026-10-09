/* Découverte du monde : carte cliquable, pays du jour, passeport et petits jeux.
   Données : monde/carte.json (formes des pays) et monde/pays.json (fiches).
   Photos et drapeaux chargés depuis Internet (Wikipédia, flagcdn) quand l'ordinateur est connecté. */
'use strict';

const MONDE = { carte: null, pays: null, byIso: new Map(), loading: null, view: null, sel: null, game: null };
const MAP_W = 1000, MAP_H = 445;
const DEPART = new Date(2026, 9, 8); // premier « pays du jour »

/* ---------- Données ---------- */
function mondeLoad() {
  if (!MONDE.loading) {
    MONDE.loading = Promise.all([
      fetch('monde/carte.json').then((r) => r.json()),
      fetch('monde/pays.json').then((r) => r.json()),
    ]).then(([carte, pays]) => {
      MONDE.carte = carte;
      MONDE.pays = pays.sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
      for (const p of pays) MONDE.byIso.set(p.iso, p);
      for (const c of carte) if (MONDE.byIso.has(c.iso)) MONDE.byIso.get(c.iso).geo = c;
    });
  }
  return MONDE.loading;
}

const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const vus = () => store.get('monde:vus', {});

function rng(seed) { // petit générateur pseudo-aléatoire reproductible
  return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

function paysDuJour(date = new Date()) {
  const liste = MONDE.pays.filter((p) => p.statut !== 'territoire').map((p) => p.iso).sort();
  const r = rng(2026);
  for (let i = liste.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [liste[i], liste[j]] = [liste[j], liste[i]]; }
  const k = liste.indexOf('jp'); if (k > 0) [liste[0], liste[k]] = [liste[k], liste[0]]; // on commence par le Japon
  const jour = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const n = Math.round((jour - DEPART) / 864e5);
  return MONDE.byIso.get(liste[((n % liste.length) + liste.length) % liste.length]);
}

function serie() {
  const jours = new Set(store.get('monde:jours', []));
  let n = 0; const d = new Date();
  if (!jours.has(ymd(d))) d.setDate(d.getDate() - 1); // la série tient encore si on n'a pas joué aujourd'hui
  while (jours.has(ymd(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

function marquerVu(iso) {
  const v = vus();
  if (v[iso]) return false;
  v[iso] = ymd(new Date()); store.set('monde:vus', v);
  return true;
}

/* ---------- Mise en forme ---------- */
function habitants(n) {
  const f = (x, d) => x.toLocaleString('fr-FR', { maximumFractionDigits: d });
  if (n >= 1e9) return `${f(n / 1e9, 2)} milliard${n >= 2e9 ? 's' : ''}`;
  if (n >= 1e6) return `${f(n / 1e6, n < 1e7 ? 1 : 0)} millions`;
  return f(Math.round(n / 1000) * 1000, 0);
}
function compareFrance(n) {
  const fr = 68e6, r = n / fr;
  if (r >= 1.5) return `≈ ${r.toLocaleString('fr-FR', { maximumFractionDigits: r < 10 ? 1 : 0 })} fois la France 🇫🇷`;
  if (r > 0.75) return 'à peu près comme la France';
  if (n >= 1e6) return `≈ ${Math.round(1 / r)} fois moins que la France`;
  return n > 100000 ? 'moins que la ville de Lyon !' : 'moins qu\'une petite ville française !';
}
const flagUrl = (iso, w = 160) => `https://flagcdn.com/w${w}/${iso}.png`;
const flagImg = (iso, cls = 'flag', w = 160) => `<img class="${cls}" src="${flagUrl(iso, w)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`;

/* ---------- Menu de l'espace découverte ---------- */
const MENU_MONDE = [
  ['', '🌍', 'Accueil découverte'], ['jour', '🎁', 'Pays du jour'], ['defi', '🧠', 'Défi mémoire : 10 pays'],
  ['jeu/carte', '🎯', 'Où est-ce ?'], ['jeu/capitales', '🏛️', 'Quiz des capitales'], ['jeu/drapeaux', '🚩', 'Quel est ce drapeau ?'],
  ['passeport', '🛂', 'Mon passeport'],
];
function sidebarMonde() {
  return '<div class="side-theme">🌍 Espace découverte</div>'
    + MENU_MONDE.map(([k, e, t]) => `<a class="side-link side-m" data-k="${k}" href="#/monde${k ? '/' + k : ''}"><span class="num">${e}</span><span>${t}</span></a>`).join('')
    + '<a class="side-link side-m side-minijeux" data-k="minijeux" href="#/minijeux"><span class="num">🐱</span><span>Mini-jeux du chat</span></a>'
    + '<div class="side-sep"></div><a class="side-home side-retour" href="#/">📚 Retour aux révisions</a>'
    + '<p class="side-note">Clique sur le chat en bas de l\'écran 🐾</p>';
}
function markSideMonde(k) { document.querySelectorAll('.side-m').forEach((a) => a.classList.toggle('active', a.dataset.k === k)); }

// On quitte l'espace découverte : on arrête le jeu en cours
window.addEventListener('hashchange', () => { if (!location.hash.startsWith('#/monde')) MONDE.game = null; });

/* ---------- Page ---------- */
async function pageMonde(a, b) {
  _current = '';
  app.className = 'content wide';
  document.title = 'Espace découverte';
  highlightSidebar();
  if (!MONDE.pays) {
    app.innerHTML = '<p class="muted">Chargement de la carte…</p>';
    try { await mondeLoad(); } catch { app.innerHTML = '<div class="notice"><h2>Carte introuvable</h2><p>Le dossier <em>site/monde</em> est manquant.</p></div>'; return; }
  }
  const action = ['jour', 'defi', 'jeu', 'passeport'].includes(a) ? a : null;
  const iso = action ? null : a;
  if (!document.getElementById('monde') || !a) construireMonde();
  markSideMonde(action === 'jeu' ? 'jeu/' + b : action || (iso ? null : ''));
  if (iso) return mondeSelect(iso, true);
  if (!action) return window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#/monde'); // pour pouvoir recliquer le même lien du menu
  if (action === 'jour') $('#m-jour').scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (action === 'passeport') $('#m-pass-titre').scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (action === 'jeu' && ['carte', 'capitales', 'drapeaux'].includes(b)) startGame(b);
  if (action === 'defi') startDefi();
}

function construireMonde() {
  MONDE.game = null; MONDE.sel = null;
  const jour = paysDuJour(), ouvert = store.get('monde:jours', []).includes(ymd(new Date()));
  const total = MONDE.pays.length, nb = Object.keys(vus()).length;
  app.innerHTML = `<div id="monde">
    <div class="m-hero">
      <div><h1>🌍 Découverte du monde</h1><p class="muted">Un nouveau pays chaque jour, et toute la planète à explorer en cliquant sur la carte.</p></div>
      <div class="m-stats">
        <div class="m-stat"><span class="big" id="m-nb">${nb}</span><span>/ ${total} pays<br>dans ton passeport</span></div>
        <div class="m-stat"><span class="big" id="m-serie">${serie()}</span><span>jour${serie() > 1 ? 's' : ''} de suite<br>🔥 série</span></div>
      </div>
    </div>
    <div class="m-progress"><span style="width:${(100 * nb) / total}%"></span></div>
    <div id="m-jour"></div>
    <div id="m-defi"></div>
    <div class="m-mapbar">
      <input id="m-search" type="search" placeholder="🔎 Chercher un pays ou une capitale…" list="m-list" autocomplete="off">
      <datalist id="m-list">${MONDE.pays.map((p) => `<option value="${esc(p.nom)}">${esc(p.capitale)}</option>`).join('')}</datalist>
      <span class="m-legend"><i class="lg-a"></i>à découvrir <i class="lg-v"></i>déjà visité <i class="lg-j"></i>pays du jour</span>
    </div>
    <div class="m-map" id="m-map">
      <div id="m-game-banner" hidden></div>
      <svg id="m-svg" viewBox="0 0 ${MAP_W} ${MAP_H}" role="img" aria-label="Carte du monde">
        <rect class="sea" x="-3000" y="-3000" width="7000" height="7000"/>
        <g id="m-countries"></g><g id="m-dots"></g>
      </svg>
      <div class="m-zoom"><button data-z="1.6" title="Zoomer">＋</button><button data-z="0.625" title="Dézoomer">－</button><button data-z="0" title="Toute la carte">🌍</button></div>
      <div class="m-tip" id="m-tip" hidden></div>
    </div>
    <div id="m-fiche"></div>
    <h2 class="section-title">🎮 Jeux</h2>
    <div class="grid m-games">
      <button class="card m-game m-game-defi" data-g="defi"><div class="emoji">🧠</div><h3>Défi mémoire : 10 pays</h3><p>Mémorise 10 pays, puis retrouve leur place sur la carte, leur drapeau et leur capitale.</p><p class="m-best" data-b="defi"></p></button>
      <button class="card m-game" data-g="carte"><div class="emoji">🎯</div><h3>Où est-ce ?</h3><p>Trouve 10 pays sur la carte.</p><p class="m-best" data-b="carte"></p></button>
      <button class="card m-game" data-g="capitales"><div class="emoji">🏛️</div><h3>Quiz des capitales</h3><p>10 questions, 4 réponses possibles.</p><p class="m-best" data-b="capitales"></p></button>
      <button class="card m-game" data-g="drapeaux"><div class="emoji">🚩</div><h3>Quel est ce drapeau ?</h3><p>Reconnais 10 drapeaux du monde.</p><p class="m-best" data-b="drapeaux"></p></button>
    </div>
    <div id="m-quiz"></div>
    <h2 class="section-title" id="m-pass-titre">🛂 Mon passeport</h2>
    <div id="m-passeport"></div>
  </div>`;
  drawMap();
  renderJour(jour, ouvert);
  renderPasseport();
  renderBest();
  bindMonde();
}

/* ---------- Pays du jour ---------- */
function renderJour(p, ouvert) {
  const box = $('#m-jour');
  const date = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  if (!ouvert) {
    box.innerHTML = `<div class="m-daily closed"><div class="gift">🎁</div><div><div class="kicker">Pays du jour · ${esc(date)}</div>
      <h2>Un nouveau pays t'attend !</h2><p class="muted">Indice : il se trouve en <strong>${esc(p.continent)}</strong> ${p.emoji}</p></div>
      <button class="btn" id="m-open">✨ Découvrir</button></div>`;
    $('#m-open').addEventListener('click', () => {
      const j = store.get('monde:jours', []); j.push(ymd(new Date())); store.set('monde:jours', j);
      $('.m-daily').classList.add('opening');
      setTimeout(() => { renderJour(p, true); confetti(); mondeSelect(p.iso, true, true); }, 450);
    });
  } else {
    box.innerHTML = `<div class="m-daily"><div class="m-daily-flag">${flagImg(p.iso)}</div><div><div class="kicker">Pays du jour · ${esc(date)}</div>
      <h2>${p.emoji} ${esc(p.nom)}</h2><p class="muted">Capitale : ${esc(p.capitale)} · ${habitants(p.population)} d'habitants</p></div>
      <button class="btn ghost" id="m-voir">Voir la fiche</button></div>`;
    $('#m-voir').addEventListener('click', () => mondeSelect(p.iso, true));
  }
}

/* ---------- Carte ---------- */
function drawMap() {
  const jour = paysDuJour().iso, v = vus();
  let g = '', dots = '';
  for (const c of MONDE.carte) {
    const cls = `c${v[c.iso] ? ' vu' : ''}${c.iso === jour ? ' jour' : ''}`;
    if (c.d) g += `<path class="${cls}" data-iso="${c.iso}" d="${c.d}"/>`;
    if (c.c) dots += `<circle class="${cls} dot" data-iso="${c.iso}" cx="${c.c[0]}" cy="${c.c[1]}" r="2.6"/>`;
  }
  $('#m-countries').innerHTML = g;
  $('#m-dots').innerHTML = dots;
  MONDE.view = { x: 0, y: 0, w: MAP_W, h: MAP_H };
  setView(MONDE.view);
}

function refreshMapClasses() {
  const jour = paysDuJour().iso, v = vus();
  document.querySelectorAll('#m-svg [data-iso]').forEach((el) => {
    el.classList.toggle('vu', !!v[el.dataset.iso]);
    el.classList.toggle('jour', el.dataset.iso === jour);
    el.classList.toggle('sel', el.dataset.iso === MONDE.sel);
  });
}

function setView(v) {
  MONDE.view = v;
  const svg = $('#m-svg'); if (!svg) return;
  svg.setAttribute('viewBox', `${v.x} ${v.y} ${v.w} ${v.h}`);
  const k = MAP_W / v.w;
  svg.style.setProperty('--k', k);
  document.querySelectorAll('#m-dots circle').forEach((c) => c.setAttribute('r', (2.6 / Math.sqrt(k)).toFixed(2)));
}

function clampView(v) {
  const w = Math.min(MAP_W, Math.max(40, v.w)), h = (w * MAP_H) / MAP_W;
  return { w, h, x: Math.min(MAP_W - w, Math.max(0, v.x)), y: Math.min(MAP_H - h, Math.max(0, v.y)) };
}

function animateView(to, ms = 650) {
  const from = { ...MONDE.view }, t0 = performance.now();
  to = clampView(to);
  const step = (t) => {
    const a = Math.min(1, (t - t0) / ms), e = a < 0.5 ? 2 * a * a : 1 - (-2 * a + 2) ** 2 / 2;
    setView({ x: from.x + (to.x - from.x) * e, y: from.y + (to.y - from.y) * e, w: from.w + (to.w - from.w) * e, h: from.h + (to.h - from.h) * e });
    if (a < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function zoomTo(iso) {
  const c = MONDE.byIso.get(iso)?.geo; if (!c) return;
  const [x, y, w, h] = c.b;
  let vw = Math.max(w * 2.6, ((h * 2.6) * MAP_W) / MAP_H, 90);
  vw = Math.min(vw, MAP_W);
  const vh = (vw * MAP_H) / MAP_W;
  animateView({ x: x + w / 2 - vw / 2, y: y + h / 2 - vh / 2, w: vw, h: vh });
}

function bindMonde() {
  const svg = $('#m-svg'), tip = $('#m-tip'), map = $('#m-map');
  let drag = null;
  const toMap = (e) => { const r = svg.getBoundingClientRect(), v = MONDE.view; return { x: v.x + ((e.clientX - r.left) / r.width) * v.w, y: v.y + ((e.clientY - r.top) / r.height) * v.h }; };
  // Survol : nom du pays
  svg.addEventListener('pointermove', (e) => {
    const el = e.target.closest('[data-iso]');
    if (!el || drag?.moved || MONDE.game) { tip.hidden = true; return; }
    const p = MONDE.byIso.get(el.dataset.iso); if (!p) { tip.hidden = true; return; }
    const r = map.getBoundingClientRect();
    tip.hidden = false; tip.textContent = `${p.emoji} ${p.nom}`;
    tip.style.left = e.clientX - r.left + 12 + 'px'; tip.style.top = e.clientY - r.top + 12 + 'px';
  });
  svg.addEventListener('pointerleave', () => (tip.hidden = true));
  // Glisser pour se déplacer, clic pour ouvrir un pays
  svg.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    drag = { sx: e.clientX, sy: e.clientY, v: { ...MONDE.view }, moved: false, el: e.target.closest('[data-iso]') };
    svg.setPointerCapture(e.pointerId);
  });
  svg.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (!drag.moved && Math.hypot(dx, dy) < 5) return;
    drag.moved = true; svg.classList.add('dragging');
    const r = svg.getBoundingClientRect();
    setView(clampView({ ...drag.v, x: drag.v.x - (dx / r.width) * drag.v.w, y: drag.v.y - (dy / r.height) * drag.v.h }));
  });
  const fin = () => {
    if (!drag) return;
    const { moved, el } = drag; drag = null; svg.classList.remove('dragging');
    if (moved || !el) return;
    if (MONDE.game && MONDE.game.type === 'carte') return gameClick(el.dataset.iso, el);
    if (MONDE.game && MONDE.game.type === 'defi') return defiClick(el.dataset.iso, el);
    mondeSelect(el.dataset.iso, true);
  };
  svg.addEventListener('pointerup', fin);
  svg.addEventListener('pointercancel', () => { drag = null; svg.classList.remove('dragging'); });
  svg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const p = toMap(e), v = MONDE.view, f = e.deltaY < 0 ? 0.8 : 1.25;
    setView(clampView({ w: v.w * f, h: v.h * f, x: p.x - (p.x - v.x) * f, y: p.y - (p.y - v.y) * f }));
  }, { passive: false });
  document.querySelectorAll('.m-zoom button').forEach((b) => b.addEventListener('click', () => {
    const z = +b.dataset.z, v = MONDE.view;
    if (!z) return animateView({ x: 0, y: 0, w: MAP_W, h: MAP_H });
    const cx = v.x + v.w / 2, cy = v.y + v.h / 2, w = v.w / z, h = v.h / z;
    animateView({ x: cx - w / 2, y: cy - h / 2, w, h }, 300);
  }));
  // Recherche
  const s = $('#m-search');
  s.addEventListener('change', () => {
    const q = norm(s.value.trim()); if (!q) return;
    const p = MONDE.pays.find((x) => norm(x.nom) === q) || MONDE.pays.find((x) => norm(x.capitale) === q)
      || MONDE.pays.find((x) => norm(x.nom).startsWith(q)) || MONDE.pays.find((x) => norm(x.nom).includes(q) || norm(x.capitale).includes(q));
    if (p) { s.value = ''; s.blur(); mondeSelect(p.iso, true); }
  });
  document.querySelectorAll('.m-game').forEach((b) => b.addEventListener('click', () => (b.dataset.g === 'defi' ? startDefi() : startGame(b.dataset.g))));
}

/* ---------- Fiche pays ---------- */
function mondeSelect(iso, zoom, duJour = false) {
  const p = MONDE.byIso.get(iso); if (!p) return;
  stopGame();
  MONDE.sel = iso;
  const nouveau = marquerVu(iso);
  history.replaceState(null, '', '#/monde/' + iso);
  refreshMapClasses();
  if (zoom) zoomTo(iso);
  updateStats();
  const box = $('#m-fiche');
  box.innerHTML = `<article class="m-card${duJour ? ' du-jour' : ''}">
    ${nouveau ? '<div class="m-stamp">Nouveau tampon !</div>' : ''}
    <header class="m-card-head">
      ${flagImg(p.iso, 'flag big', 320)}
      <div><div class="kicker">${esc(p.continent)}${p.statut === 'territoire' ? ' · territoire' : ''}</div>
      <h2>${p.emoji} ${esc(p.nom)}</h2></div>
      <button class="icon-btn m-close" title="Fermer">✕</button>
    </header>
    <div class="m-tiles">
      <div class="m-tile t-pink"><span class="ic">🏛️</span><span class="lb">Capitale</span><strong>${esc(p.capitale)}</strong></div>
      <div class="m-tile t-blue"><span class="ic">🗣️</span><span class="lb">Langue</span><strong>${esc(p.langue)}</strong></div>
      <div class="m-tile t-yellow"><span class="ic">👥</span><span class="lb">Habitants</span><strong>${habitants(p.population)}</strong><small>${compareFrance(p.population)}</small></div>
    </div>
    <div class="m-block t-blue"><h3>🌦️ Climat</h3><p>${esc(p.climat)}</p></div>
    <div class="m-block t-yellow"><h3>🍽️ Spécialités à goûter</h3><div class="chips">${p.specialites.map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div></div>
    <div class="m-block t-pink"><h3>🎭 Culture</h3><ul>${p.culture.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>
    <div class="m-fact"><strong>💡 Le savais-tu ?</strong><ul class="m-facts">${[p.anecdote, ...(p.anecdotes_plus || [])].map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>
    <h3 class="m-ph-title">📸 En images</h3>
    <div class="m-photos" id="m-photos">${'<div class="m-ph loading"></div>'.repeat(3)}</div>
  </article>`;
  $('.m-close', box).addEventListener('click', () => { box.innerHTML = ''; MONDE.sel = null; refreshMapClasses(); animateView({ x: 0, y: 0, w: MAP_W, h: MAP_H }); history.replaceState(null, '', '#/monde'); });
  loadPhotos(p);
  if (nouveau) renderPasseport();
  setTimeout(() => box.scrollIntoView({ behavior: 'smooth', block: 'start' }), zoom ? 350 : 0);
}

function updateStats() {
  const nb = Object.keys(vus()).length;
  const e = $('#m-nb'); if (e) e.textContent = nb;
  const s = $('#m-serie'); if (s) s.textContent = serie();
  const b = $('.m-progress span'); if (b) b.style.width = (100 * nb) / MONDE.pays.length + '%';
}

/* ---------- Photos (Wikipédia) ---------- */
const photoCache = new Map();
async function wikiImage(title) {
  if (photoCache.has(title)) return photoCache.get(title);
  const pr = fetch('https://fr.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title.replace(/ /g, '_')))
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => {
      if (j && j.type === 'disambiguation') return null;
      const t = j && j.thumbnail && j.thumbnail.source;
      if (!t || /\.svg/i.test(t) || /(flag|drapeau|blason|coat_of_arms|map|carte|locator|location)/i.test(t)) return null;
      return { src: t.replace(/\/\d+px-/, '/640px-'), small: t, big: t.replace(/\/\d+px-/, '/1280px-'), titre: j.title, texte: j.extract };
    })
    .catch(() => null);
  photoCache.set(title, pr);
  return pr;
}

async function loadPhotos(p) {
  const titres = [...(p.lieux || []), p.wiki || p.nom];
  const res = (await Promise.all(titres.map(wikiImage))).filter(Boolean);
  const vus = new Set(); const imgs = res.filter((r) => !vus.has(r.small) && vus.add(r.small)).slice(0, 4);
  const box = document.getElementById('m-photos');
  if (!box || MONDE.sel !== p.iso) return;
  if (!imgs.length) { box.innerHTML = '<p class="muted">📶 Les photos s\'affichent quand l\'ordinateur est connecté à Internet.</p>'; return; }
  box.innerHTML = imgs.map((r, i) => `<figure class="m-ph" data-i="${i}"><img src="${esc(r.src)}" alt="${esc(r.titre)}" loading="lazy" onerror="if(this.src!=='${esc(r.small)}')this.src='${esc(r.small)}'"><figcaption>${esc(r.titre)}</figcaption></figure>`).join('');
  box.querySelectorAll('.m-ph').forEach((f) => f.addEventListener('click', () => lightbox(imgs[+f.dataset.i])));
}

function lightbox(r) {
  const d = document.createElement('div');
  d.className = 'm-lightbox';
  d.innerHTML = `<figure><img src="${esc(r.big)}" alt="" onerror="this.src='${esc(r.src)}'"><figcaption><strong>${esc(r.titre)}</strong>${r.texte ? '<br>' + esc(r.texte.slice(0, 260)) + (r.texte.length > 260 ? '…' : '') : ''}</figcaption></figure>`;
  d.addEventListener('click', () => d.remove());
  document.addEventListener('keydown', function k(e) { if (e.key === 'Escape') { d.remove(); document.removeEventListener('keydown', k); } });
  document.body.appendChild(d);
}

/* ---------- Passeport ---------- */
function renderPasseport() {
  const box = $('#m-passeport'); if (!box) return;
  const v = vus();
  const liste = Object.keys(v).map((i) => MONDE.byIso.get(i)).filter(Boolean).sort((a, b) => (v[b.iso] + b.nom).localeCompare(v[a.iso] + a.nom));
  const resetBtn = '<div class="m-pass-actions"><button type="button" class="btn ghost small" id="m-pass-reset">🗑️ Remettre le passeport à zéro</button></div>';
  if (!liste.length) {
    box.innerHTML = '<p class="muted">Ton passeport est encore vide : ouvre le pays du jour ou clique sur un pays pour gagner ton premier tampon ✈️</p>' + (store.get('monde:jours', []).length ? resetBtn : '');
    wirePassReset(box); return;
  }
  const conts = ['Afrique', 'Amérique du Nord', 'Amérique du Sud', 'Asie', 'Europe', 'Océanie'];
  let html = '<div class="m-conts">' + conts.map((c) => {
    const t = MONDE.pays.filter((p) => p.continent === c).length, n = liste.filter((p) => p.continent === c).length;
    return `<span class="m-cont${n === t ? ' full' : ''}">${c} <b>${n}/${t}</b></span>`;
  }).join('') + '</div><div class="m-stamps">';
  liste.forEach((p, i) => { html += `<button class="m-stampcard" data-iso="${p.iso}" style="--r:${((i * 37) % 9) - 4}deg">${flagImg(p.iso, 'flag', 80)}<span>${esc(p.nom)}</span></button>`; });
  box.innerHTML = html + '</div>' + resetBtn;
  wirePassReset(box);
  box.querySelectorAll('.m-stampcard').forEach((b) => b.addEventListener('click', () => mondeSelect(b.dataset.iso, true)));
}

/* Remise à zéro du passeport : tampons et série de jours (les records des jeux restent), avec confirmation */
function wirePassReset(box) {
  const btn = $('#m-pass-reset', box); if (!btn) return;
  btn.addEventListener('click', () => {
    const zone = btn.parentElement;
    zone.innerHTML = '<span class="m-pass-confirm">Effacer tous tes tampons et ta série de jours ? Cette action est définitive.</span> <button type="button" class="btn small" id="m-pass-oui">Oui, tout effacer</button> <button type="button" class="btn ghost small" id="m-pass-non">Annuler</button>';
    $('#m-pass-non', zone).addEventListener('click', () => renderPasseport());
    $('#m-pass-oui', zone).addEventListener('click', () => {
      store.set('monde:vus', {}); store.set('monde:jours', []);
      updateStats(); refreshMapClasses(); renderPasseport();
      if (typeof renderJour === 'function' && $('#m-jour')) renderJour(paysDuJour(), false);
    });
  });
}

/* ---------- Jeux ---------- */
function renderBest() {
  document.querySelectorAll('.m-best').forEach((e) => { const b = store.get('monde:best:' + e.dataset.b, null); e.textContent = b != null ? `🏆 Record : ${b}/${e.dataset.b === 'defi' ? 30 : 10}` : ''; });
}
function saveBest(g, score) { const b = store.get('monde:best:' + g, -1); if (score > b) store.set('monde:best:' + g, score); renderBest(); return score > b; }
const pick = (arr, n) => shuffle([...arr]).slice(0, n);

function startGame(g) {
  stopGame();
  $('#m-fiche').innerHTML = '';
  MONDE.sel = null; refreshMapClasses();
  const souverains = MONDE.pays.filter((p) => p.statut !== 'territoire');
  if (g === 'carte') {
    $('#m-svg').classList.add('neutre');
    const assez = souverains.filter((p) => p.geo && p.geo.d && p.geo.b[2] * p.geo.b[3] > 30 && (vus()[p.iso] || p.population >= 8e6));
    MONDE.game = { type: 'carte', liste: pick(assez, 10), i: 0, score: 0, essais: 0 };
    animateView({ x: 0, y: 0, w: MAP_W, h: MAP_H });
    $('#m-map').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return gameAsk();
  }
  // On interroge surtout sur les pays déjà visités et les grands pays, pour que ce soit faisable
  const v = vus(), pool = souverains.filter((p) => v[p.iso] || p.population >= 15e6);
  const liste = pick(pool, 10).map((p) => {
    const autres = pick(souverains.filter((x) => x.iso !== p.iso && (g === 'drapeaux' || x.capitale !== p.capitale)), 3);
    return { p, choix: shuffle([p, ...autres]) };
  });
  MONDE.game = { type: g, liste, i: 0, score: 0 };
  quizAsk();
}

function stopGame() {
  MONDE.game = null;
  const svg = $('#m-svg'); if (svg) svg.classList.remove('neutre');
  const d = $('#m-defi'); if (d) d.innerHTML = '';
  const b = $('#m-game-banner'); if (b) b.hidden = true;
  const q = $('#m-quiz'); if (q) q.innerHTML = '';
  document.querySelectorAll('#m-svg .good, #m-svg .bad, #m-svg .hint, #m-svg .learn').forEach((e) => e.classList.remove('good', 'bad', 'hint', 'learn'));
}

function gameAsk() {
  const G = MONDE.game, b = $('#m-game-banner');
  b.hidden = false;
  if (G.i >= G.liste.length) {
    const rec = saveBest('carte', G.score);
    b.innerHTML = `<strong>🎉 Terminé : ${G.score}/10 !</strong> ${rec ? 'Nouveau record 🏆' : ''} <button class="btn small" id="m-rejouer">Rejouer</button> <button class="btn ghost small" id="m-stop">Fermer</button>`;
    if (G.score >= 7) confetti();
    $('#m-rejouer').onclick = () => startGame('carte');
    $('#m-stop').onclick = () => stopGame();
    MONDE.game = { type: 'fini' };
    $('#m-svg').classList.remove('neutre');
    return;
  }
  const p = G.liste[G.i];
  b.innerHTML = `<span class="m-g-count">${G.i + 1}/10</span> Clique sur : <strong>${p.emoji} ${esc(p.nom)}</strong> <span class="m-g-score">⭐ ${G.score}</span> <button class="btn ghost small" id="m-stop">Arrêter</button>`;
  $('#m-stop').onclick = () => stopGame();
}

const reagir = (t) => { if (window.chatReagit && (t !== 'bravo' || Math.random() < 0.6)) window.chatReagit(t); };
function gameClick(iso, el) {
  const G = MONDE.game; if (!G || G.type !== 'carte' || G.wait) return;
  const p = G.liste[G.i];
  const flash = (e, c) => { e.classList.add(c); setTimeout(() => e.classList.remove(c), 900); };
  const suivant = () => { G.wait = true; setTimeout(() => { G.wait = false; }, 1100); G.i++; G.essais = 0; setTimeout(() => { if (MONDE.game !== G) return; animateView({ x: 0, y: 0, w: MAP_W, h: MAP_H }, 400); gameAsk(); }, 1100); };
  if (iso === p.iso) {
    G.score += G.essais === 0 ? 1 : 0.5;
    reagir('bravo'); flash(el, 'good'); marquerVu(iso); refreshMapClasses(); updateStats(); renderPasseport();
    $('#m-game-banner').innerHTML = `✅ Bravo, c'est bien ${p.emoji} <strong>${esc(p.nom)}</strong> ! (capitale : ${esc(p.capitale)})`;
    suivant();
  } else {
    G.essais++;
    reagir('oups'); flash(el, 'bad');
    const q = MONDE.byIso.get(iso);
    if (G.essais >= 2) {
      document.querySelectorAll(`#m-svg [data-iso="${p.iso}"]`).forEach((e) => flash(e, 'hint'));
      zoomTo(p.iso);
      $('#m-game-banner').innerHTML = `😅 Raté, c'était ici : <strong>${esc(p.nom)}</strong>.`;
      suivant();
    } else {
      $('#m-game-banner').innerHTML = `❌ Ça, c'est ${q ? `<strong>${esc(q.nom)}</strong>` : 'un autre pays'}. Encore un essai pour trouver <strong>${esc(p.nom)}</strong> !`;
    }
  }
}

function quizAsk() {
  const G = MONDE.game, box = $('#m-quiz');
  if (G.i >= G.liste.length) {
    const rec = saveBest(G.type, G.score);
    const msg = G.score >= 9 ? 'Exploratrice de légende ! 🌟' : G.score >= 7 ? 'Super voyageuse ! ✈️' : G.score >= 5 ? 'Pas mal, continue à explorer 🧭' : 'Le monde est grand, rejoue pour progresser 🌱';
    box.innerHTML = `<div class="m-quizbox"><h3>${G.score}/10</h3><p>${msg} ${rec ? '<br>Nouveau record 🏆' : ''}</p><button class="btn" id="m-rejouer">Rejouer</button> <button class="btn ghost" id="m-stop">Fermer</button></div>`;
    if (G.score >= 7) confetti();
    $('#m-rejouer').onclick = () => startGame(G.type);
    $('#m-stop').onclick = () => stopGame();
    return;
  }
  const { p, choix } = G.liste[G.i];
  const q = G.type === 'capitales' ? `Quelle est la capitale de <strong>${p.emoji} ${esc(p.nom)}</strong> ?` : `${flagImg(p.iso, 'flag quizflag', 320)}<br>À quel pays appartient ce drapeau ?`;
  box.innerHTML = `<div class="m-quizbox"><div class="m-q-top"><span>${G.type === 'capitales' ? '🏛️ Capitales' : '🚩 Drapeaux'} · ${G.i + 1}/10</span><span>⭐ ${G.score}</span></div>
    <div class="m-q">${q}</div><div class="m-choices">${choix.map((c, i) => `<button class="m-choice" data-i="${i}">${esc(G.type === 'capitales' ? c.capitale : c.nom)}</button>`).join('')}</div><div class="m-q-msg"></div></div>`;
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  box.querySelectorAll('.m-choice').forEach((b) => b.addEventListener('click', () => {
    const c = choix[+b.dataset.i], ok = c.iso === p.iso;
    box.querySelectorAll('.m-choice').forEach((x) => { x.disabled = true; if (choix[+x.dataset.i].iso === p.iso) x.classList.add('right'); });
    reagir(ok ? 'bravo' : 'oups');
    if (!ok) b.classList.add('wrong'); else G.score++;
    $('.m-q-msg', box).innerHTML = (ok ? '✅ Bravo ! ' : '❌ Presque ! ') + `${p.emoji} ${esc(p.nom)} : capitale <strong>${esc(p.capitale)}</strong>, on y parle ${esc(p.langue)}.`;
    setTimeout(() => { if (MONDE.game !== G) return; G.i++; quizAsk(); }, ok ? 1300 : 2300);
  }));
}

/* ---------- Défi mémoire : 10 pays à retenir puis à retrouver ---------- */
const DEFI_ETAPES = [['lieu', '📍', 'Où est-il ?'], ['drapeau', '🚩', 'Son drapeau'], ['capitale', '🏛️', 'Sa capitale']];

function startDefi(liste) {
  stopGame();
  $('#m-fiche').innerHTML = '';
  MONDE.sel = null; refreshMapClasses();
  if (!liste) {
    const v = vus();
    const pool = MONDE.pays.filter((p) => p.statut !== 'territoire' && p.geo && p.geo.d && p.geo.b[2] * p.geo.b[3] > 30 && (v[p.iso] || p.population >= 8e6));
    liste = pick(pool, 10);
  }
  MONDE.game = { type: 'defi', phase: 'learn', liste, i: 0, vu: 0 };
  $('#m-svg').classList.add('neutre');
  defiLearn();
  setTimeout(() => $('#m-defi').scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

function zoomRegion(iso) { // vue large autour du pays, pour voir ses voisins
  const c = MONDE.byIso.get(iso)?.geo; if (!c) return;
  const [x, y, w, h] = c.b;
  const vw = Math.min(MAP_W, Math.max(w * 5, ((h * 5) * MAP_W) / MAP_H, 280)), vh = (vw * MAP_H) / MAP_W;
  animateView({ x: x + w / 2 - vw / 2, y: y + h / 2 - vh / 2, w: vw, h: vh });
}

function defiLearn() {
  const G = MONDE.game, p = G.liste[G.i], box = $('#m-defi');
  G.vu = Math.max(G.vu, G.i);
  if (marquerVu(p.iso)) { updateStats(); renderPasseport(); }
  document.querySelectorAll('#m-svg .learn').forEach((e) => e.classList.remove('learn'));
  document.querySelectorAll(`#m-svg [data-iso="${p.iso}"]`).forEach((e) => e.classList.add('learn'));
  zoomRegion(p.iso);
  const der = G.i === G.liste.length - 1;
  box.innerHTML = `<div class="m-defi">
    <div class="m-d-top"><span class="kicker">🧠 Défi mémoire · Étape 1 : mémorise ces 10 pays</span><button class="btn ghost small" data-act="stop">Arrêter</button></div>
    <div class="m-d-learn">
      <div class="m-d-flag">${flagImg(p.iso, 'flag', 320)}</div>
      <div><div class="kicker">${esc(p.continent)}</div><h3>${p.emoji} ${esc(p.nom)}</h3>
      <p>🏛️ Capitale : <strong>${esc(p.capitale)}</strong></p>
      <p class="muted">📍 Regarde bien où il se trouve sur la carte, il clignote !</p></div>
    </div>
    <div class="m-d-foot">
      <div class="m-d-dots">${G.liste.map((x, k) => `<button class="m-d-dot${k === G.i ? ' on' : ''}${k <= G.vu ? ' seen' : ''}" data-k="${k}" title="${esc(x.nom)}" ${k > G.vu ? 'disabled' : ''}>${k + 1}</button>`).join('')}</div>
      <div class="m-d-nav"><button class="btn ghost small" data-act="prev" ${G.i === 0 ? 'disabled' : ''}>◀ Précédent</button>
      <button class="btn small" data-act="next">${der ? '🚀 Je suis prête, on teste !' : 'Suivant ▶'}</button></div>
    </div></div>`;
  box.querySelector('[data-act="stop"]').onclick = () => { stopGame(); animateView({ x: 0, y: 0, w: MAP_W, h: MAP_H }); };
  box.querySelector('[data-act="prev"]').onclick = () => { G.i--; defiLearn(); };
  box.querySelector('[data-act="next"]').onclick = () => { if (der) defiTest(); else { G.i++; defiLearn(); } };
  box.querySelectorAll('.m-d-dot').forEach((d) => (d.onclick = () => { G.i = +d.dataset.k; defiLearn(); }));
}

function defiTest() {
  const G = MONDE.game;
  document.querySelectorAll('#m-svg .learn').forEach((e) => e.classList.remove('learn'));
  Object.assign(G, { phase: 'test', ordre: shuffle([...G.liste]), j: 0, step: 'lieu', score: 0, res: {}, essais: 0, wait: false });
  animateView({ x: 0, y: 0, w: MAP_W, h: MAP_H });
  defiStep();
  $('#m-defi').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function defiStep() {
  const G = MONDE.game, box = $('#m-defi');
  if (G.j >= G.ordre.length) return defiFin();
  const p = G.ordre[G.j], r = G.res[p.iso] || (G.res[p.iso] = {});
  const etapes = DEFI_ETAPES.map(([k, ic, lb]) => `<span class="m-d-step${k === G.step ? ' on' : ''}${r[k] === 1 ? ' ok' : r[k] === 0.5 ? ' mid' : r[k] === 0 ? ' ko' : ''}">${ic} ${lb}</span>`).join('');
  let q = '', choix = '';
  if (G.step === 'lieu') q = `📍 Clique sur la carte : où se trouve <strong>${p.emoji} ${esc(p.nom)}</strong> ?`;
  if (G.step === 'drapeau') {
    G.choix = shuffle([p, ...pick(G.liste.filter((x) => x.iso !== p.iso), 3)]);
    q = `🚩 Quel est le drapeau de <strong>${p.emoji} ${esc(p.nom)}</strong> ?`;
    choix = `<div class="m-d-flags">${G.choix.map((c, i) => `<button class="m-choice m-flagchoice" data-i="${i}" aria-label="Drapeau ${i + 1}">${flagImg(c.iso, 'flag', 160)}</button>`).join('')}</div>`;
  }
  if (G.step === 'capitale') {
    G.choix = shuffle([p, ...pick(G.liste.filter((x) => x.iso !== p.iso && x.capitale !== p.capitale), 3)]);
    q = `🏛️ Quelle est la capitale de <strong>${p.emoji} ${esc(p.nom)}</strong> ?`;
    choix = `<div class="m-choices">${G.choix.map((c, i) => `<button class="m-choice" data-i="${i}">${esc(c.capitale)}</button>`).join('')}</div>`;
  }
  box.innerHTML = `<div class="m-defi test">
    <div class="m-d-top"><span class="kicker">🧠 Étape 2 : retrouve · pays ${G.j + 1}/10</span><span class="m-g-score">⭐ ${G.score}/30</span><button class="btn ghost small" data-act="stop">Arrêter</button></div>
    <div class="m-d-steps">${etapes}</div>
    <div class="m-d-q">${q}</div>${choix}<div class="m-d-msg"></div></div>`;
  box.querySelector('[data-act="stop"]').onclick = () => stopGame();
  box.querySelectorAll('.m-choice').forEach((b) => (b.onclick = () => defiRepond(+b.dataset.i, b)));
  if (G.step === 'lieu') { // la carte doit être visible pour cliquer
    const m = $('#m-map').getBoundingClientRect();
    if (m.bottom > innerHeight + 40 || m.top < 0) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function defiSuivant(ms) {
  const G = MONDE.game; G.wait = true;
  setTimeout(() => {
    if (MONDE.game !== G) return;
    G.wait = false; G.essais = 0;
    if (G.step === 'lieu') G.step = 'drapeau';
    else if (G.step === 'drapeau') G.step = 'capitale';
    else { G.step = 'lieu'; G.j++; animateView({ x: 0, y: 0, w: MAP_W, h: MAP_H }, 400); }
    defiStep();
  }, ms);
}

function defiClick(iso, el) {
  const G = MONDE.game;
  if (!G || G.phase !== 'test' || G.step !== 'lieu' || G.wait) return;
  const p = G.ordre[G.j], msg = $('#m-defi .m-d-msg');
  const flash = (e, c) => { e.classList.add(c); setTimeout(() => e.classList.remove(c), 1000); };
  if (iso === p.iso) {
    const pts = G.essais === 0 ? 1 : 0.5;
    G.score += pts; G.res[p.iso].lieu = pts;
    reagir('bravo'); flash(el, 'good');
    msg.innerHTML = `✅ Bravo, ${esc(p.nom)} est bien là !`;
    defiSuivant(1100);
  } else {
    G.essais++;
    reagir('oups'); flash(el, 'bad');
    const q = MONDE.byIso.get(iso);
    if (G.essais >= 2) {
      G.res[p.iso].lieu = 0;
      document.querySelectorAll(`#m-svg [data-iso="${p.iso}"]`).forEach((e) => flash(e, 'hint'));
      zoomRegion(p.iso);
      msg.innerHTML = `😅 Raté, ${esc(p.nom)} était ici (il clignote en jaune).`;
      defiSuivant(2000);
    } else {
      msg.innerHTML = `❌ Ça, c'est ${q ? `<strong>${esc(q.nom)}</strong>` : 'un autre pays'}. Encore un essai !`;
    }
  }
}

function defiRepond(i, b) {
  const G = MONDE.game; if (!G || G.wait) return;
  const p = G.ordre[G.j], c = G.choix[i], ok = c.iso === p.iso, box = $('#m-defi');
  box.querySelectorAll('.m-choice').forEach((x) => { x.disabled = true; if (G.choix[+x.dataset.i].iso === p.iso) x.classList.add('right'); });
  if (!ok) b.classList.add('wrong');
  G.res[p.iso][G.step] = ok ? 1 : 0;
  if (ok) G.score++;
  reagir(ok ? 'bravo' : 'oups');
  const info = G.step === 'drapeau' ? 'son drapeau' : `sa capitale, ${esc(p.capitale)}`;
  $('.m-d-msg', box).innerHTML = ok ? `✅ Oui, c'est bien ${info} !` : `❌ Presque ! La bonne réponse est entourée : ${info}.`;
  $('.m-g-score', box).textContent = `⭐ ${G.score}/30`;
  defiSuivant(ok ? 1100 : 2200);
}

function defiFin() {
  const G = MONDE.game, box = $('#m-defi');
  const rec = saveBest('defi', G.score), s = G.score;
  const msg = s >= 27 ? 'Mémoire d\'éléphant ! 🐘🌟' : s >= 21 ? 'Super voyageuse ! ✈️' : s >= 15 ? 'Pas mal du tout, réessaie pour faire mieux 🧭' : 'Le monde est grand : relis les fiches et réessaie 🌱';
  const marque = (v) => (v === 1 ? '✅' : v === 0.5 ? '🟡' : '❌');
  box.innerHTML = `<div class="m-defi fin">
    <div class="m-d-top"><span class="kicker">🧠 Défi mémoire terminé</span></div>
    <h3>${s}/30</h3><p>${msg}${rec ? '<br>Nouveau record 🏆' : ''}</p>
    <table class="m-d-recap"><thead><tr><th>Pays</th><th title="Emplacement">📍</th><th title="Drapeau">🚩</th><th title="Capitale">🏛️</th></tr></thead><tbody>
    ${G.liste.map((p) => { const r = G.res[p.iso] || {}; return `<tr><td><button class="m-d-voir" data-iso="${p.iso}">${flagImg(p.iso, 'flag mini', 80)} ${esc(p.nom)}</button><small>${esc(p.capitale)}</small></td><td>${marque(r.lieu)}</td><td>${marque(r.drapeau)}</td><td>${marque(r.capitale)}</td></tr>`; }).join('')}
    </tbody></table>
    <div class="m-d-nav"><button class="btn" data-act="memes">🔁 Réessayer avec ces pays</button><button class="btn" data-act="nouveaux">🎲 10 nouveaux pays</button><button class="btn ghost" data-act="stop">Fermer</button></div>
  </div>`;
  if (s >= 21) confetti();
  const liste = G.liste;
  MONDE.game = null;
  $('#m-svg').classList.remove('neutre');
  box.querySelector('[data-act="memes"]').onclick = () => startDefi(liste);
  box.querySelector('[data-act="nouveaux"]').onclick = () => startDefi();
  box.querySelector('[data-act="stop"]').onclick = () => stopGame();
  box.querySelectorAll('.m-d-voir').forEach((b) => (b.onclick = () => mondeSelect(b.dataset.iso, true)));
  box.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- Confettis ---------- */
function confetti() {
  if (window.chatReagit) window.chatReagit('fete');
  const colors = ['#f4b6cf', '#a9d2f3', '#f3dc86', '#fde4ee', '#e3f1fc'];
  const box = document.createElement('div'); box.className = 'm-confetti';
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('i');
    s.style.left = Math.random() * 100 + 'vw';
    s.style.background = colors[i % colors.length];
    s.style.animationDelay = Math.random() * 0.5 + 's';
    s.style.animationDuration = 1.8 + Math.random() * 1.4 + 's';
    s.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
    box.appendChild(s);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 4000);
}

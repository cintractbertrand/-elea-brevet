/* Jeux d'arcade de l'espace découverte : Snake, 2048, Démineur, Casse-briques (routes #/minijeux/snake, /2048, /demineur, /briques).
   Fichier autonome, chargé après minijeux.js : il ajoute ses cartes sur l'accueil des mini-jeux et affiche ses propres jeux.
   Chaque jeu se joue au clavier, à la souris et au doigt. Records gardés dans le navigateur (localStorage). */
(function () {
'use strict';

/* ======================= Outils ======================= */
const K = 'arcade:';
const mem = {
  get(k, d) { try { const v = localStorage.getItem(K + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(K + k, JSON.stringify(v)); } catch { /* stockage indisponible */ } },
};
const rnd = (n) => Math.floor(Math.random() * n);
const pick = (t) => t[rnd(t.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ecrit = (el) => el && /INPUT|TEXTAREA|SELECT/.test(el.tagName);

// Tout ce qu'il faut arrêter quand on quitte un jeu (minuteries, boucles, écouteurs)
function groupe() {
  const fs = [];
  const g = {
    add(f) { fs.push(f); return f; },
    stop() { while (fs.length) { try { fs.pop()(); } catch { /* rien */ } } },
    tard(f, ms) { const t = setTimeout(f, ms); g.add(() => clearTimeout(t)); return t; },
    tous(f, ms) { const t = setInterval(f, ms); g.add(() => clearInterval(t)); return t; },
    ecoute(el, type, f, opt) { el.addEventListener(type, f, opt); g.add(() => el.removeEventListener(type, f, opt)); },
    boucle(f) {
      let id, last = performance.now(), on = true;
      const tick = (t) => { if (!on) return; const dt = Math.min(0.033, (t - last) / 1000); last = t; f(dt); if (on) id = requestAnimationFrame(tick); };
      id = requestAnimationFrame(tick);
      g.add(() => { on = false; cancelAnimationFrame(id); });
    },
  };
  return g;
}
let page = groupe();

// Records : plus grand = mieux, sauf le démineur (temps : plus petit = mieux)
function record(id, score, petit = false) {
  if (!(score > 0)) return false;
  const b = mem.get('best:' + id, 0);
  if (!b || (petit ? score < b : score > b)) { mem.set('best:' + id, score); return true; }
  return false;
}

const JEUX = [
  { id: 'snake', nom: 'Snake', emoji: '🐍', unite: 'fruits', desc: 'Le serpent gourmand mange des fruits et grandit… sans se mordre la queue !',
    regle: 'Flèches ou Z Q S D (W A S D) pour tourner, glisse le doigt sur le jeu, ou utilise les boutons. Espace = pause. Ne touche ni les murs ni ta queue. Les ⭐ valent 3 points mais disparaissent vite.' },
  { id: '2048', nom: '2048', emoji: '🔢', unite: 'points', desc: 'Fais glisser les tuiles, assemble les nombres pareils… jusqu\'à 2048 !',
    regle: 'Flèches ou Z Q S D pour faire glisser toutes les tuiles. À la souris ou au doigt : glisse sur la grille. Deux tuiles identiques qui se touchent fusionnent. La partie s\'arrête quand plus rien ne bouge.' },
  { id: 'demineur', nom: 'Démineur', emoji: '💣', unite: 's', petit: true, desc: 'Trouve toutes les cases sans bombe. Les chiffres t\'aident !',
    regle: 'Clic = creuser, clic droit = drapeau. Au doigt : appui long pour un drapeau, ou bouton 🚩. Clavier : flèches pour bouger, Entrée ou Espace pour creuser, F pour un drapeau. Un chiffre = le nombre de bombes autour.' },
  { id: 'briques', nom: 'Casse-briques', emoji: '🧱', unite: 'points', desc: 'Renvoie la balle avec ta raquette et casse toutes les briques.',
    regle: 'Bouge la raquette avec la souris, le doigt ou les flèches (Q / D). Clic, toucher ou Espace pour lancer la balle. 3 vies. Les 🍬 qui tombent agrandissent la raquette.' },
];
const PAR_ID = Object.fromEntries(JEUX.map((j) => [j.id, j]));

function cadre(app, jeu, hud) {
  const best = mem.get('best:' + jeu.id + (jeu.id === 'demineur' ? ':facile' : ''), 0);
  app.innerHTML = `<div class="mj-root ar-root" data-id="" data-ar="${jeu.id}">
    <div class="breadcrumb"><a href="#/monde">Découverte</a> › <a href="#/minijeux">Mini-jeux</a> › ${jeu.nom}</div>
    <h1>${jeu.emoji} ${jeu.nom}</h1>
    <details class="ar-regle"><summary>Comment jouer ?</summary><p class="muted">${jeu.regle}</p></details>
    <div class="mj-hud ar-hud">${hud}<span class="mj-best">🏆 Record : <b>${best || '—'}</b> ${jeu.unite}</span></div>
    <div class="ar-zone ar-zone-${jeu.id}"></div>
  </div>`;
  return app.querySelector('.ar-zone');
}
const majRecord = (app, v) => { const b = app.querySelector('.mj-best b'); if (b) b.textContent = v || '—'; };

// Panneau par-dessus le plateau (début, pause, fin de partie)
function panneau(scene, { titre, texte = '', bouton = 'Jouer', emoji = '🎮', action }) {
  scene.querySelector('.mj-panneau')?.remove();
  const d = document.createElement('div');
  d.className = 'mj-panneau ar-panneau';
  d.innerHTML = `<div class="mj-panneau-in"><div class="ar-panneau-emoji">${emoji}</div><h2>${titre}</h2>${texte ? `<p>${texte}</p>` : ''}<button class="btn mj-go" type="button">${bouton}</button></div>`;
  scene.appendChild(d);
  const go = () => { d.remove(); action(); };
  d.querySelector('.mj-go').addEventListener('click', (e) => { e.stopPropagation(); go(); });
  d.addEventListener('pointerdown', (e) => e.stopPropagation());
  d.querySelector('.mj-go').focus({ preventScroll: true });
  return d;
}
function bulle(scene, x, y, txt, cls = '') {
  const s = document.createElement('span');
  s.className = 'mj-bulle ' + cls;
  s.textContent = txt;
  s.style.left = x + 'px'; s.style.top = y + 'px';
  scene.appendChild(s);
  setTimeout(() => s.remove(), 1300);
}
const fete = (t) => { if (window.chatReagit) try { window.chatReagit(t); } catch { /* rien */ } };

// Croix de flèches à l'écran (souris et doigt)
function croix(zone, f) {
  const d = document.createElement('div');
  d.className = 'ar-croix';
  d.innerHTML = '<button type="button" data-d="haut" aria-label="Haut">▲</button><button type="button" data-d="gauche" aria-label="Gauche">◀</button><button type="button" data-d="bas" aria-label="Bas">▼</button><button type="button" data-d="droite" aria-label="Droite">▶</button>';
  d.addEventListener('pointerdown', (e) => { const b = e.target.closest('button'); if (b) { e.preventDefault(); f(b.dataset.d); } });
  d.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b && e.detail === 0) f(b.dataset.d); }); // Entrée au clavier
  zone.appendChild(d);
  return d;
}
const TOUCHES = { ArrowUp: 'haut', ArrowDown: 'bas', ArrowLeft: 'gauche', ArrowRight: 'droite', z: 'haut', w: 'haut', s: 'bas', q: 'gauche', a: 'gauche', d: 'droite' };
const dirTouche = (e) => TOUCHES[e.key] || TOUCHES[e.key.toLowerCase()];

// Glisser (doigt ou souris bouton appuyé) → direction
function glisse(el, f) {
  let x0 = null, y0 = null;
  page.ecoute(el, 'pointerdown', (e) => { x0 = e.clientX; y0 = e.clientY; });
  const fin = (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0, dy = e.clientY - y0; x0 = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
    f(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'droite' : 'gauche') : (dy > 0 ? 'bas' : 'haut'));
  };
  page.ecoute(el, 'pointerup', fin);
  page.ecoute(el, 'pointercancel', () => { x0 = null; });
}
const DIRS = { haut: [0, -1], bas: [0, 1], gauche: [-1, 0], droite: [1, 0] };

function toile(zone, w, h, cls) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h; cv.className = 'ar-toile ' + (cls || '');
  const sc = document.createElement('div');
  sc.className = 'mj-scene ar-scene';
  sc.style.setProperty('--ratio', w / h);
  sc.appendChild(cv);
  zone.appendChild(sc);
  return { sc, cv, ctx: cv.getContext('2d') };
}
function arrondi(ctx, x, y, w, h, r) { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); }

/* ======================= 1. Snake ======================= */
function jeuSnake(app, jeu) {
  const zone = cadre(app, jeu, '<span>🍓 Fruits : <b class="ar-score">0</b></span>');
  const N = 18, T = 30;
  const { sc, cv, ctx } = toile(zone, N * T, N * T);
  const FRUITS = ['🍓', '🍎', '🍒', '🍑', '🍇', '🍌', '🍉', '🥝'];
  let serpent, dir, file, fruit, etoile, score, vitesse, acc, etat = 'attente', mort = 0;

  function libre() {
    for (let i = 0; i < 400; i++) {
      const p = { x: rnd(N), y: rnd(N) };
      if (!serpent.some((s) => s.x === p.x && s.y === p.y) && !(fruit && fruit.x === p.x && fruit.y === p.y)) return p;
    }
    return { x: 0, y: 0 };
  }
  function nouvelle() {
    serpent = [{ x: 6, y: 9 }, { x: 5, y: 9 }, { x: 4, y: 9 }];
    dir = 'droite'; file = []; score = 0; vitesse = 0.15; acc = 0; etoile = null; fruit = null;
    fruit = { ...libre(), e: pick(FRUITS) };
    app.querySelector('.ar-score').textContent = 0;
  }
  function tourner(d) {
    if (etat === 'attente' || etat === 'fin') return;
    if (etat === 'pause') { reprendre(); return; }
    const der = file.length ? file[file.length - 1] : dir;
    const [ax, ay] = DIRS[der], [bx, by] = DIRS[d];
    if (ax + bx === 0 && ay + by === 0) return; // pas de demi-tour
    if (d !== der && file.length < 3) file.push(d);
  }
  function pas() {
    if (file.length) dir = file.shift();
    const [dx, dy] = DIRS[dir];
    const t = { x: serpent[0].x + dx, y: serpent[0].y + dy };
    const mange = t.x === fruit.x && t.y === fruit.y;
    const corps = mange ? serpent : serpent.slice(0, -1);
    if (t.x < 0 || t.y < 0 || t.x >= N || t.y >= N || corps.some((s) => s.x === t.x && s.y === t.y)) return perdu();
    serpent.unshift(t);
    if (mange) {
      score++; vitesse = Math.max(0.065, vitesse - 0.004);
      bulle(sc, (t.x + 0.5) / N * sc.clientWidth, (t.y / N) * sc.clientHeight, '+1');
      fruit = { ...libre(), e: pick(FRUITS) };
      if (!etoile && Math.random() < 0.18) etoile = { ...libre(), vie: 6 };
    } else serpent.pop();
    if (etoile && t.x === etoile.x && t.y === etoile.y) {
      score += 3; bulle(sc, (t.x + 0.5) / N * sc.clientWidth, (t.y / N) * sc.clientHeight, '+3 ⭐', 'gros'); etoile = null;
    }
    app.querySelector('.ar-score').textContent = score;
  }
  function perdu() {
    etat = 'fin'; mort = 0.4;
    const nouveau = record(jeu.id, score);
    if (nouveau) { majRecord(app, score); fete('fete'); }
    const phr = score >= 30 ? 'Un vrai boa ! 🐍' : score >= 15 ? 'Pas mal du tout !' : 'Le serpent a encore faim…';
    panneau(sc, { titre: nouveau ? `🏆 Nouveau record : ${score} !` : `${score} fruit${score > 1 ? 's' : ''}`, texte: phr, bouton: 'Rejouer', emoji: nouveau ? '🏆' : '🐍', action: demarrer });
  }
  function demarrer() { nouvelle(); etat = 'jeu'; cv.focus({ preventScroll: true }); }
  function pause() { if (etat !== 'jeu') return; etat = 'pause'; panneau(sc, { titre: 'Pause', bouton: 'Continuer', emoji: '⏸️', action: reprendre }); }
  function reprendre() { sc.querySelector('.mj-panneau')?.remove(); etat = 'jeu'; }

  function dessin(t) {
    ctx.fillStyle = '#f3fbf4'; ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = '#e6f5e9';
    for (let y = 0; y < N; y++) for (let x = (y % 2); x < N; x += 2) ctx.fillRect(x * T, y * T, T, T);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `${T * 0.82}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
    if (fruit) ctx.fillText(fruit.e, fruit.x * T + T / 2, fruit.y * T + T / 2 + 1);
    if (etoile && (etoile.vie > 1.5 || Math.floor(t * 8) % 2)) ctx.fillText('⭐', etoile.x * T + T / 2, etoile.y * T + T / 2 + 1);
    const n = serpent.length;
    serpent.forEach((s, i) => {
      const k = i / Math.max(1, n - 1);
      ctx.fillStyle = mort > 0 && Math.floor(t * 10) % 2 ? '#f4b6cf' : `hsl(${150 - k * 40}, 52%, ${62 + k * 12}%)`;
      arrondi(ctx, s.x * T + 2, s.y * T + 2, T - 4, T - 4, i === 0 ? 11 : 8); ctx.fill();
    });
    const h = serpent[0], [dx, dy] = DIRS[dir];
    const cx = h.x * T + T / 2, cy = h.y * T + T / 2;
    for (const sgn of [-1, 1]) {
      const ex = cx + dx * 5 + dy * sgn * 6, ey = cy + dy * 5 - dx * sgn * 6;
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ex, ey, 4.5, 0, 7); ctx.fill();
      ctx.fillStyle = '#2f3b36'; ctx.beginPath(); ctx.arc(ex + dx * 1.5, ey + dy * 1.5, 2.3, 0, 7); ctx.fill();
    }
    if (etat === 'jeu' && Math.floor(t * 2) % 3 === 0) { ctx.strokeStyle = '#e0527a'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(cx + dx * 13, cy + dy * 13); ctx.lineTo(cx + dx * 19, cy + dy * 19); ctx.stroke(); }
  }

  let temps = 0;
  page.boucle((dt) => {
    temps += dt;
    if (etat === 'jeu') {
      acc += dt;
      if (etoile) { etoile.vie -= dt; if (etoile.vie <= 0) etoile = null; }
      while (acc >= vitesse && etat === 'jeu') { acc -= vitesse; pas(); }
    }
    if (mort > 0) mort -= dt;
    dessin(temps);
  });
  cv.tabIndex = 0;
  croix(zone, tourner);
  glisse(cv, tourner);
  page.ecoute(document, 'keydown', (e) => {
    if (ecrit(document.activeElement)) return;
    const d = dirTouche(e);
    if (d) { e.preventDefault(); tourner(d); }
    else if (e.code === 'Space' || e.key === 'p' || e.key === 'P') {
      if (etat === 'jeu') { e.preventDefault(); pause(); }
      else if (etat === 'pause') { e.preventDefault(); reprendre(); }
    }
  });
  page.ecoute(document, 'visibilitychange', () => { if (document.hidden) pause(); });
  nouvelle();
  panneau(sc, { titre: 'Snake', texte: 'Mange un maximum de fruits !', emoji: '🐍', action: demarrer });
}

/* ======================= 2. 2048 ======================= */
function jeu2048(app, jeu) {
  const zone = cadre(app, jeu, '<span>⭐ Score : <b class="ar-score">0</b></span><span>Meilleure tuile : <b class="ar-max">2</b></span>');
  const outils = document.createElement('div');
  outils.className = 'ar-outils';
  outils.innerHTML = '<button class="btn small ghost" type="button" data-a="annuler">↩️ Annuler</button><button class="btn small ghost" type="button" data-a="nouveau">🔄 Nouvelle partie</button>';
  zone.appendChild(outils);
  const sc = document.createElement('div');
  sc.className = 'mj-scene ar-scene ar-scene-2048';
  sc.innerHTML = '<div class="g2-plateau" tabindex="0" aria-label="Grille du 2048">' + '<div class="g2-case"></div>'.repeat(16) + '</div>';
  zone.appendChild(sc);
  const plateau = sc.querySelector('.g2-plateau');
  let tuiles, score, fini, gagne, idn = 0, avant = null;
  const SAVE = 'partie2048';

  const grille = () => { const g = Array.from({ length: 4 }, () => Array(4).fill(null)); tuiles.forEach((t) => { if (!t.mort) g[t.r][t.c] = t; }); return g; };
  function ajoute() {
    const vides = [];
    const g = grille();
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) if (!g[r][c]) vides.push([r, c]);
    if (!vides.length) return;
    const [r, c] = pick(vides);
    tuiles.push({ id: ++idn, v: Math.random() < 0.9 ? 2 : 4, r, c, neuf: true });
  }
  function rendu() {
    const vus = new Set();
    for (const t of tuiles) {
      vus.add(t.id);
      let el = plateau.querySelector(`[data-t="${t.id}"]`);
      if (!el) {
        el = document.createElement('div');
        el.dataset.t = t.id;
        el.className = 'g2-tuile' + (t.neuf ? ' neuf' : '') + (t.fusion ? ' fusion' : '');
        plateau.appendChild(el);
      }
      el.style.setProperty('--r', t.r); el.style.setProperty('--c', t.c);
      el.dataset.v = t.v > 2048 ? 'gros' : t.v;
      el.textContent = t.v;
      el.classList.toggle('long', t.v >= 1024);
      if (t.mort) el.style.zIndex = 1;
      t.neuf = t.fusion = false;
    }
    plateau.querySelectorAll('.g2-tuile').forEach((el) => { if (!vus.has(+el.dataset.t)) el.remove(); });
    app.querySelector('.ar-score').textContent = score;
    app.querySelector('.ar-max').textContent = Math.max(...tuiles.map((t) => t.v));
    outils.querySelector('[data-a="annuler"]').disabled = !avant;
  }
  const etatCopie = () => ({ t: tuiles.filter((t) => !t.mort).map(({ v, r, c }) => ({ v, r, c })), score, gagne });
  function charge(e) {
    plateau.querySelectorAll('.g2-tuile').forEach((el) => el.remove());
    tuiles = e.t.map((t) => ({ ...t, id: ++idn })); score = e.score; gagne = e.gagne; fini = false;
    rendu();
  }
  function nouvelle() {
    plateau.querySelectorAll('.g2-tuile').forEach((el) => el.remove());
    tuiles = []; score = 0; fini = false; gagne = false; avant = null;
    ajoute(); ajoute(); rendu(); sauve();
  }
  const sauve = () => mem.set(SAVE, fini ? null : etatCopie());
  function peutBouger() {
    const g = grille();
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      if (!g[r][c]) return true;
      if (c < 3 && g[r][c + 1] && g[r][c + 1].v === g[r][c].v) return true;
      if (r < 3 && g[r + 1][c] && g[r + 1][c].v === g[r][c].v) return true;
    }
    return false;
  }
  function bouge(d) {
    if (fini || sc.querySelector('.mj-panneau')) return;
    tuiles = tuiles.filter((t) => !t.mort);
    const copie = etatCopie();
    const [dx, dy] = DIRS[d];
    const g = grille();
    let aBouge = false, gain = 0;
    const ordre = [0, 1, 2, 3];
    const lignes = dx > 0 || dy > 0 ? [3, 2, 1, 0] : ordre;
    for (const a of ordre) {
      let cible = null, pos = dx > 0 || dy > 0 ? 3 : 0;
      const pasPos = dx > 0 || dy > 0 ? -1 : 1;
      for (const b of lignes) {
        const r = dx ? a : b, c = dx ? b : a;
        const t = g[r][c];
        if (!t) continue;
        if (cible && cible.v === t.v && !cible.fus) {
          t.r = cible.r; t.c = cible.c; t.mort = true;
          cible.v *= 2; cible.fus = true; cible.fusion = true; gain += cible.v; aBouge = true;
        } else {
          const nr = dx ? a : pos, nc = dx ? pos : a;
          if (nr !== t.r || nc !== t.c) aBouge = true;
          t.r = nr; t.c = nc; cible = t; pos += pasPos;
        }
      }
    }
    tuiles.forEach((t) => delete t.fus);
    if (!aBouge) { plateau.classList.remove('secoue'); void plateau.offsetWidth; plateau.classList.add('secoue'); return; }
    avant = copie;
    score += gain;
    if (gain) bulle(sc, sc.clientWidth / 2 - 14, 8, '+' + gain);
    ajoute(); rendu();
    page.tard(() => { tuiles = tuiles.filter((t) => !t.mort); rendu(); }, 130);
    const max = Math.max(...tuiles.map((t) => t.v));
    if (record(jeu.id, score)) majRecord(app, score);
    if (max >= 2048 && !gagne) {
      gagne = true; fete('fete');
      page.tard(() => panneau(sc, { titre: '🎉 2048 !', texte: 'Incroyable, tu as réussi ! Tu peux continuer pour aller encore plus loin.', bouton: 'Continuer', emoji: '🏆', action: () => plateau.focus({ preventScroll: true }) }), 300);
    } else if (!peutBouger()) {
      fini = true;
      page.tard(() => panneau(sc, { titre: `${score} points`, texte: `Plus aucun mouvement possible. Meilleure tuile : ${max}.`, bouton: 'Rejouer', emoji: max >= 512 ? '🤩' : '🔢', action: nouvelle }), 400);
    }
    sauve();
  }
  outils.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.a === 'nouveau') { sc.querySelector('.mj-panneau')?.remove(); nouvelle(); }
    if (b.dataset.a === 'annuler' && avant) { sc.querySelector('.mj-panneau')?.remove(); charge(avant); avant = null; rendu(); sauve(); }
    plateau.focus({ preventScroll: true });
  });
  croix(zone, bouge);
  glisse(plateau, bouge);
  page.ecoute(document, 'keydown', (e) => {
    if (ecrit(document.activeElement)) return;
    const d = dirTouche(e);
    if (d) { e.preventDefault(); bouge(d); }
  });
  const s = mem.get(SAVE, null);
  if (s && s.t && s.t.length) { tuiles = []; charge(s); } else nouvelle();
  if (!peutBouger()) nouvelle();
  plateau.focus({ preventScroll: true });
}

/* ======================= 3. Démineur ======================= */
const NIVEAUX = { facile: { w: 9, h: 9, m: 10, nom: 'Facile' }, moyen: { w: 12, h: 12, m: 24, nom: 'Moyen' }, difficile: { w: 16, h: 16, m: 40, nom: 'Difficile' } };
function jeuDemineur(app, jeu) {
  const zone = cadre(app, jeu, '<span>💣 Restantes : <b class="ar-mines">0</b></span><span>⏱️ <b class="ar-temps">0</b> s</span>');
  let niv = mem.get('niveau', 'facile'); if (!NIVEAUX[niv]) niv = 'facile';
  const outils = document.createElement('div');
  outils.className = 'ar-outils';
  outils.innerHTML = '<div class="ar-niveaux" role="group" aria-label="Niveau">' + Object.entries(NIVEAUX).map(([k, n]) => `<button class="btn small ghost" type="button" data-n="${k}">${n.nom}</button>`).join('') + '</div>'
    + '<button class="btn small ghost ar-mode" type="button" aria-pressed="false">⛏️ Creuser</button><button class="btn small ghost" type="button" data-a="nouveau">🔄 Nouvelle partie</button>';
  zone.appendChild(outils);
  const sc = document.createElement('div');
  sc.className = 'mj-scene ar-scene ar-scene-demineur';
  zone.appendChild(sc);
  const modeBtn = outils.querySelector('.ar-mode');
  let W, H, M, cases, grilleEl, ouvert, drapeaux, premier, fini, t0, temps, cur = 0, drapeauMode = false;

  const voisins = (i) => {
    const x = i % W, y = (i / W) | 0, out = [];
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if (!dx && !dy) continue;
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < W && ny < H) out.push(ny * W + nx);
    }
    return out;
  };
  function nouvelle() {
    ({ w: W, h: H, m: M } = NIVEAUX[niv]);
    cases = Array.from({ length: W * H }, () => ({ bombe: false, n: 0, ouvert: false, drapeau: false }));
    ouvert = 0; drapeaux = 0; premier = true; fini = false; t0 = 0; temps = 0; cur = Math.floor(H / 2) * W + Math.floor(W / 2);
    sc.querySelector('.mj-panneau')?.remove();
    sc.style.setProperty('--w', W);
    sc.innerHTML = `<div class="dm-grille" tabindex="0" role="grid" aria-label="Démineur ${W} sur ${H}" style="--w:${W}">` + cases.map((_, i) => `<button type="button" class="dm-case" data-i="${i}" tabindex="-1" aria-label="case"></button>`).join('') + '</div>';
    grilleEl = sc.querySelector('.dm-grille');
    outils.querySelectorAll('[data-n]').forEach((b) => b.classList.toggle('actif', b.dataset.n === niv));
    const best = mem.get('best:demineur:' + niv, 0);
    majRecord(app, best);
    infos(); curseur();
  }
  function poser(sauf) {
    const interdit = new Set([sauf, ...voisins(sauf)]);
    let n = 0;
    while (n < M) { const i = rnd(W * H); if (!cases[i].bombe && !interdit.has(i)) { cases[i].bombe = true; n++; } }
    cases.forEach((c, i) => { c.n = voisins(i).filter((j) => cases[j].bombe).length; });
  }
  function infos() {
    app.querySelector('.ar-mines').textContent = M - drapeaux;
    app.querySelector('.ar-temps').textContent = temps;
  }
  function majCase(i) {
    const c = cases[i], el = grilleEl.children[i];
    el.className = 'dm-case' + (c.ouvert ? ' ouvert' : '') + (c.drapeau ? ' drapeau' : '') + (i === cur ? ' cur' : '');
    if (c.ouvert) { el.textContent = c.bombe ? '💣' : c.n || ''; el.dataset.n = c.bombe ? 'b' : c.n; el.setAttribute('aria-label', c.bombe ? 'bombe' : c.n ? c.n + ' bombes autour' : 'vide'); }
    else { el.textContent = c.drapeau ? '🚩' : ''; el.setAttribute('aria-label', c.drapeau ? 'drapeau' : 'case fermée'); }
  }
  function curseur() { grilleEl.querySelector('.cur')?.classList.remove('cur'); grilleEl.children[cur]?.classList.add('cur'); }
  function creuser(i) {
    if (fini) return;
    const c = cases[i];
    if (c.drapeau) return;
    if (c.ouvert) { // clic sur un chiffre : ouvre les voisines si les drapeaux sont posés
      const v = voisins(i);
      if (c.n && v.filter((j) => cases[j].drapeau).length === c.n) v.forEach((j) => { if (!cases[j].ouvert && !cases[j].drapeau) ouvrir(j); });
      verifier();
      return;
    }
    if (premier) { poser(i); premier = false; t0 = performance.now(); }
    ouvrir(i);
    verifier();
  }
  function ouvrir(i) {
    if (fini) return;
    const pile = [i];
    while (pile.length) {
      const k = pile.pop(), c = cases[k];
      if (c.ouvert || c.drapeau) continue;
      c.ouvert = true; ouvert++; majCase(k);
      if (c.bombe) { boum(k); return; }
      if (!c.n) voisins(k).forEach((j) => { if (!cases[j].ouvert) pile.push(j); });
    }
  }
  function drapeau(i) {
    if (fini || cases[i].ouvert) return;
    const c = cases[i];
    c.drapeau = !c.drapeau; drapeaux += c.drapeau ? 1 : -1;
    majCase(i); infos();
    if (navigator.vibrate) try { navigator.vibrate(25); } catch { /* rien */ }
  }
  function boum(k) {
    fini = true;
    grilleEl.children[k].classList.add('boum');
    cases.forEach((c, i) => {
      if (c.bombe && !c.drapeau) { c.ouvert = true; majCase(i); }
      if (!c.bombe && c.drapeau) { grilleEl.children[i].textContent = '❌'; }
    });
    grilleEl.children[k].classList.add('boum');
    fete('oups');
    page.tard(() => panneau(sc, { titre: 'Boum ! 💥', texte: 'Ce n\'était pas la bonne case… On retente ?', bouton: 'Rejouer', emoji: '💣', action: nouvelle }), 700);
  }
  function verifier() {
    if (fini || ouvert !== W * H - M) return;
    fini = true;
    cases.forEach((c, i) => { if (c.bombe && !c.drapeau) { c.drapeau = true; majCase(i); } });
    drapeaux = M; infos();
    const s = Math.max(1, Math.round((performance.now() - t0) / 1000));
    const nouveau = record('demineur:' + niv, s, true);
    if (nouveau) majRecord(app, s);
    fete('fete');
    page.tard(() => panneau(sc, { titre: nouveau ? `🏆 Record : ${s} s !` : `Gagné en ${s} s !`, texte: `Niveau ${NIVEAUX[niv].nom}. Record : ${mem.get('best:demineur:' + niv, s)} s.`, bouton: 'Rejouer', emoji: '🎉', action: nouvelle }), 400);
  }

  // Souris : clic = creuser, clic droit = drapeau. Doigt : appui long = drapeau.
  let appui = null, long = false;
  sc.addEventListener('contextmenu', (e) => { if (e.target.closest('.dm-case')) e.preventDefault(); });
  sc.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.dm-case'); if (!el) return;
    const i = +el.dataset.i;
    cur = i; curseur();
    long = false;
    if (e.button === 2) { drapeau(i); long = true; return; }
    if (e.pointerType !== 'mouse') appui = setTimeout(() => { long = true; drapeau(i); }, 420);
  });
  const annule = () => { clearTimeout(appui); appui = null; };
  sc.addEventListener('pointerup', annule); sc.addEventListener('pointercancel', annule);
  sc.addEventListener('pointerleave', annule);
  sc.addEventListener('click', (e) => {
    const el = e.target.closest('.dm-case'); if (!el) return;
    if (long) { long = false; return; }
    const i = +el.dataset.i;
    if (drapeauMode && !cases[i].ouvert) drapeau(i); else creuser(i);
    grilleEl.focus({ preventScroll: true });
  });
  page.add(annule);
  page.ecoute(document, 'keydown', (e) => {
    if (ecrit(document.activeElement) || sc.querySelector('.mj-panneau') || !grilleEl) return;
    const d = TOUCHES[e.key];
    if (e.key.startsWith('Arrow') && d) {
      e.preventDefault();
      const [dx, dy] = DIRS[d];
      const x = clamp(cur % W + dx, 0, W - 1), y = clamp(((cur / W) | 0) + dy, 0, H - 1);
      cur = y * W + x; curseur();
    } else if (e.key === 'Enter' || e.code === 'Space') {
      const a = document.activeElement; // un bouton des outils garde son comportement normal
      if (a && (a.tagName === 'BUTTON' || a.tagName === 'A') && !a.classList.contains('dm-case')) return;
      e.preventDefault(); creuser(cur);
    } else if (e.key === 'f' || e.key === 'F' || e.key === 'd' || e.key === 'D') { e.preventDefault(); drapeau(cur); }
  });
  modeBtn.addEventListener('click', () => {
    drapeauMode = !drapeauMode;
    modeBtn.textContent = drapeauMode ? '🚩 Drapeau' : '⛏️ Creuser';
    modeBtn.setAttribute('aria-pressed', drapeauMode);
    modeBtn.classList.toggle('actif', drapeauMode);
  });
  outils.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.n) { niv = b.dataset.n; mem.set('niveau', niv); nouvelle(); }
    if (b.dataset.a === 'nouveau') nouvelle();
    if (b.dataset.n || b.dataset.a) grilleEl.focus({ preventScroll: true });
  });
  page.tous(() => { if (!premier && !fini) { temps = Math.round((performance.now() - t0) / 1000); infos(); } }, 250);
  nouvelle();
}

/* ======================= 4. Casse-briques ======================= */
function jeuBriques(app, jeu) {
  const zone = cadre(app, jeu, '<span>⭐ Score : <b class="ar-score">0</b></span><span>❤️ <b class="ar-vies">3</b></span><span>Niveau <b class="ar-niv">1</b></span>');
  const W = 600, H = 450;
  const { sc, cv, ctx } = toile(zone, W, H, 'ar-toile-briques');
  const COUL = ['#f4a6c4', '#ffc7a8', '#ffe39a', '#bfe8c8', '#a9d2f3', '#d4c3f2'];
  const PLANS = [
    ['xxxxxxxxxx', 'xxxxxxxxxx', 'xxxxxxxxxx', 'xxxxxxxxxx', 'xxxxxxxxxx'],
    ['x.x.x.x.x.', '.x.x.x.x.x', 'x.x.x.x.x.', '.x.x.x.x.x', 'x.x.x.x.x.', '.x.x.x.x.x'],
    ['....xx....', '...xxxx...', '..xxxxxx..', '.xxxxxxxx.', 'xxxxxxxxxx', '.xxxxxxxx.', '..xxxxxx..'],
    ['xxxxxxxxxx', 'x........x', 'x.xxxxxx.x', 'x.x....x.x', 'x.xxxxxx.x', 'x........x', 'xxxxxxxxxx'],
  ];
  const BW = 54, BH = 20, BX = (W - 10 * (BW + 4) + 4) / 2, BY = 50;
  let briques, raq, balles, bonus, score, vies, niv, etat = 'attente', clavier = {}, grand = 0;

  function niveau(n) {
    const plan = PLANS[(n - 1) % PLANS.length];
    briques = [];
    plan.forEach((ligne, r) => [...ligne].forEach((ch, c) => {
      if (ch === 'x') briques.push({ x: BX + c * (BW + 4), y: BY + r * (BH + 4), w: BW, h: BH, coul: COUL[r % COUL.length], dur: n >= 3 && r === 0 ? 2 : 1, pts: (plan.length - r) * 10 });
    }));
    bonus = []; grand = 0;
    app.querySelector('.ar-niv').textContent = n;
    remettre();
  }
  function remettre() {
    raq = raq || { x: W / 2, w: 96, y: H - 28 };
    raq.w = 96;
    const v = 300 + (niv - 1) * 30;
    balles = [{ x: raq.x, y: raq.y - 10, vx: 0, vy: 0, r: 8, v, collee: true }];
  }
  function lancer() {
    if (etat !== 'jeu') return;
    for (const b of balles) if (b.collee) { b.collee = false; const a = (Math.random() * 0.6 - 0.3); b.vx = Math.sin(a) * b.v; b.vy = -Math.cos(a) * b.v; }
  }
  function nouvelle() { score = 0; vies = 3; niv = 1; raq = null; niveau(1); maj(); etat = 'jeu'; cv.focus({ preventScroll: true }); }
  function maj() { app.querySelector('.ar-score').textContent = score; app.querySelector('.ar-vies').textContent = vies; }
  const posX = (e) => { const r = cv.getBoundingClientRect(); return (e.clientX - r.left) / r.width * W; };

  function collision(b, r) {
    const px = clamp(b.x, r.x, r.x + r.w), py = clamp(b.y, r.y, r.y + r.h);
    const dx = b.x - px, dy = b.y - py;
    if (dx * dx + dy * dy > b.r * b.r) return false;
    const ox = Math.min(b.x + b.r - r.x, r.x + r.w - (b.x - b.r)), oy = Math.min(b.y + b.r - r.y, r.y + r.h - (b.y - b.r));
    if (ox < oy) { b.vx = b.x < r.x + r.w / 2 ? -Math.abs(b.vx) : Math.abs(b.vx); }
    else { b.vy = b.y < r.y + r.h / 2 ? -Math.abs(b.vy) : Math.abs(b.vy); }
    return true;
  }
  function avance(dt) {
    const vit = 520;
    if (clavier.g) raq.x -= vit * dt;
    if (clavier.d) raq.x += vit * dt;
    if (grand > 0) { grand -= dt; raq.w = grand > 0 ? 150 : 96; }
    raq.x = clamp(raq.x, raq.w / 2, W - raq.w / 2);
    for (const b of balles) {
      if (b.collee) { b.x = raq.x; b.y = raq.y - b.r - 1; continue; }
      const etapes = Math.ceil(b.v * dt / 4);
      for (let s = 0; s < etapes; s++) {
        b.x += b.vx * dt / etapes; b.y += b.vy * dt / etapes;
        if (b.x < b.r) { b.x = b.r; b.vx = Math.abs(b.vx); }
        if (b.x > W - b.r) { b.x = W - b.r; b.vx = -Math.abs(b.vx); }
        if (b.y < b.r) { b.y = b.r; b.vy = Math.abs(b.vy); }
        // raquette : l'angle dépend de l'endroit touché
        if (b.vy > 0 && b.y + b.r >= raq.y && b.y < raq.y + 12 && Math.abs(b.x - raq.x) <= raq.w / 2 + b.r) {
          const k = clamp((b.x - raq.x) / (raq.w / 2), -1, 1) * 1.05;
          b.vx = Math.sin(k) * b.v; b.vy = -Math.cos(k) * b.v; b.y = raq.y - b.r;
        }
        for (const br of briques) {
          if (br.casse || !collision(b, br)) continue;
          br.dur--;
          if (br.dur <= 0) {
            br.casse = true; score += br.pts; maj();
            if (Math.random() < 0.08) bonus.push({ x: br.x + br.w / 2, y: br.y + br.h / 2 });
          }
          b.v = Math.min(b.v + 3, 560);
          const n = Math.hypot(b.vx, b.vy); b.vx *= b.v / n; b.vy *= b.v / n;
          break;
        }
      }
    }
    briques = briques.filter((br) => !br.casse);
    for (const bo of bonus) {
      bo.y += 150 * dt;
      if (bo.y > raq.y - 8 && bo.y < raq.y + 14 && Math.abs(bo.x - raq.x) < raq.w / 2 + 10) { bo.pris = true; grand = 10; bulle(sc, bo.x / W * sc.clientWidth, (raq.y - 40) / H * sc.clientHeight, 'Raquette géante !'); }
    }
    bonus = bonus.filter((bo) => !bo.pris && bo.y < H + 20);
    balles = balles.filter((b) => b.y < H + 20);
    if (!balles.length) {
      vies--; maj();
      if (vies <= 0) return perdu();
      bulle(sc, sc.clientWidth / 2 - 30, sc.clientHeight / 2, 'Oups ! 💔', 'ko');
      remettre();
    }
    if (!briques.length) {
      niv++; score += 100; maj(); fete('bravo');
      bulle(sc, sc.clientWidth / 2 - 60, sc.clientHeight / 2, `Niveau ${niv} !`, 'gros');
      niveau(niv);
    }
  }
  function perdu() {
    etat = 'fin';
    const nouveau = record(jeu.id, score);
    if (nouveau) { majRecord(app, score); fete('fete'); }
    panneau(sc, { titre: nouveau ? `🏆 Nouveau record : ${score} !` : `${score} points`, texte: `Tu es arrivée au niveau ${niv}.`, bouton: 'Rejouer', emoji: nouveau ? '🏆' : '🧱', action: nouvelle });
  }
  function pause() { if (etat !== 'jeu') return; etat = 'pause'; panneau(sc, { titre: 'Pause', bouton: 'Continuer', emoji: '⏸️', action: () => { etat = 'jeu'; } }); }

  function dessin(t) {
    const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#fdf2f8'); g.addColorStop(1, '#eef6fd');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    for (const br of briques) {
      ctx.fillStyle = br.coul; arrondi(ctx, br.x, br.y, br.w, br.h, 6); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.45)'; arrondi(ctx, br.x + 4, br.y + 3, br.w - 8, 5, 3); ctx.fill();
      if (br.dur > 1) { ctx.strokeStyle = '#b07a9a'; ctx.lineWidth = 2; arrondi(ctx, br.x + 1, br.y + 1, br.w - 2, br.h - 2, 6); ctx.stroke(); }
    }
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '22px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
    for (const bo of bonus) ctx.fillText('🍬', bo.x, bo.y);
    ctx.fillStyle = grand > 0 ? '#f4a6c4' : '#9cc9ee';
    arrondi(ctx, raq.x - raq.w / 2, raq.y, raq.w, 12, 6); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.6)'; arrondi(ctx, raq.x - raq.w / 2 + 6, raq.y + 2, raq.w - 12, 3, 2); ctx.fill();
    for (const b of balles) {
      ctx.fillStyle = '#e0527a'; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(b.x - 2.5, b.y - 2.5, 2.5, 0, 7); ctx.fill();
    }
    if (etat === 'jeu' && balles.some((b) => b.collee)) {
      ctx.fillStyle = `rgba(122, 90, 110, ${0.55 + Math.sin(t * 5) * 0.25})`; ctx.font = '600 18px system-ui, sans-serif';
      ctx.fillText('Clic, toucher ou Espace pour lancer', W / 2, H * 0.68);
    }
  }
  let temps = 0;
  page.boucle((dt) => { temps += dt; if (etat === 'jeu') avance(dt); dessin(temps); });
  cv.tabIndex = 0;
  page.ecoute(cv, 'pointermove', (e) => { if (etat === 'jeu') raq.x = posX(e); });
  page.ecoute(cv, 'pointerdown', (e) => { if (etat === 'jeu') { raq.x = posX(e); lancer(); } });
  page.ecoute(document, 'keydown', (e) => {
    if (ecrit(document.activeElement)) return;
    const d = dirTouche(e);
    if (d === 'gauche') { clavier.g = true; e.preventDefault(); }
    else if (d === 'droite') { clavier.d = true; e.preventDefault(); }
    else if (e.code === 'Space' && etat === 'jeu') { e.preventDefault(); if (balles.some((b) => b.collee)) lancer(); else pause(); }
    else if (e.code === 'Space' && etat === 'pause') { e.preventDefault(); sc.querySelector('.mj-panneau')?.remove(); etat = 'jeu'; }
    else if ((e.key === 'p' || e.key === 'P') && etat === 'jeu') pause();
    else if (d === 'haut' && etat === 'jeu') { e.preventDefault(); lancer(); }
    else if (d === 'bas') e.preventDefault();
  });
  page.ecoute(document, 'keyup', (e) => { const d = dirTouche(e); if (d === 'gauche') clavier.g = false; if (d === 'droite') clavier.d = false; });
  page.ecoute(window, 'blur', () => { clavier = {}; });
  page.ecoute(document, 'visibilitychange', () => { if (document.hidden) pause(); });
  score = 0; vies = 3; niv = 1; niveau(1);
  panneau(sc, { titre: 'Casse-briques', texte: 'Casse toutes les briques sans laisser tomber la balle !', emoji: '🧱', action: nouvelle });
}

/* ======================= Branchement sur les mini-jeux ======================= */
const PAGES = { snake: jeuSnake, 2048: jeu2048, demineur: jeuDemineur, briques: jeuBriques };
const idDeRoute = () => { const m = /^#\/minijeux\/([^/?#]+)/.exec(location.hash); return m ? decodeURIComponent(m[1]) : ''; };
const accueilRoute = () => /^#\/minijeux\/?$/.test(location.hash);
let actuel = null; // { id, root }

function arret() { page.stop(); page = groupe(); actuel = null; }

function lancerJeu(id) {
  const app = document.getElementById('content');
  if (!app || !PAR_ID[id]) return;
  arret();
  document.body.classList.remove('menu-open');
  app.className = 'content';
  window.scrollTo(0, 0);
  PAGES[id](app, PAR_ID[id]);
  actuel = { id, root: app.querySelector('.ar-root') };
  document.title = PAR_ID[id].nom + ' · Mini-jeux';
  document.querySelectorAll('.side-minijeux').forEach((a) => a.classList.add('active'));
}

// Ajoute nos 4 cartes sous les jeux du chat
function decorer() {
  const app = document.getElementById('content');
  if (!app || !accueilRoute()) return;
  const root = app.querySelector('.mj-root');
  if (!root || root.classList.contains('ar-root') || root.querySelector('.ar-accueil')) return;
  const sec = document.createElement('section');
  sec.className = 'ar-accueil';
  sec.innerHTML = '<h2>🕹️ Jeux d\'arcade</h2><div class="mj-grille">' + JEUX.map((j) => {
    const b = mem.get('best:' + j.id + (j.id === 'demineur' ? ':' + mem.get('niveau', 'facile') : ''), 0);
    return `<a class="card mj-carte" href="#/minijeux/${j.id}"><div class="emoji">${j.emoji}</div><h3>${j.nom}</h3><p>${j.desc}</p>
      <div class="meta">${b ? `🏆 ${b} ${j.unite}` : '✨ Pas encore joué'}</div></a>`;
  }).join('') + '</div>';
  root.appendChild(sec);
}

function verifier() {
  const app = document.getElementById('content');
  if (!app) return;
  if (actuel && !actuel.root.isConnected) arret();
  const id = idDeRoute();
  if (PAR_ID[id]) { if (!actuel || actuel.id !== id) lancerJeu(id); }
  else decorer();
}

// app.js appelle window.pageMiniJeux(id) : on intercepte nos jeux, le reste part vers les jeux du chat
function brancher() {
  const original = window.pageMiniJeux;
  if (!original || original.arcade) return;
  const f = function (id) {
    if (PAR_ID[id]) return lancerJeu(id);
    if (actuel) arret();
    original(id);
    decorer();
  };
  f.arcade = true;
  window.pageMiniJeux = f;
}

function demarrer() {
  brancher();
  const app = document.getElementById('content');
  if (app) new MutationObserver(() => { brancher(); verifier(); }).observe(app, { childList: true });
  window.addEventListener('hashchange', () => setTimeout(() => {
    if (actuel && idDeRoute() !== actuel.id) arret();
    verifier();
  }, 0));
  verifier();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();

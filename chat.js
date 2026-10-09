/* Silver, le petit chat Sacré de Birmanie qui vit en bas de l'écran.
   Il se promène, fait sa toilette, des siestes et des bêtises. On peut le caresser (passer la souris
   dessus plusieurs fois), le porter (cliquer-glisser), cliquer dessus pour une surprise, et il réagit aux quiz. */
'use strict';

(function () {
  const NOM = 'Silver';
  const SVG = `<svg class="chat-svg" viewBox="0 0 140 100" aria-hidden="true">
  <defs>
    <linearGradient id="ch-queue" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#eadbc6"/><stop offset=".45" stop-color="#a88672"/><stop offset="1" stop-color="#7a5a49"/></linearGradient>
    <radialGradient id="ch-masque" cx=".5" cy=".6" r=".6"><stop offset="0" stop-color="#7d5d4c"/><stop offset=".5" stop-color="#957460" stop-opacity=".88"/><stop offset="1" stop-color="#c9ad98" stop-opacity="0"/></radialGradient>
    <radialGradient id="ch-tete-g" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#fffdf9"/><stop offset=".7" stop-color="#fbf3e8"/><stop offset="1" stop-color="#f0e1cc"/></radialGradient>
    <linearGradient id="ch-patte" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3e7d6"/><stop offset=".5" stop-color="#c2a28b"/><stop offset="1" stop-color="#9a7964"/></linearGradient>
    <linearGradient id="ch-corps" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efdfc9"/><stop offset=".45" stop-color="#fcf6ee"/><stop offset="1" stop-color="#fffdf9"/></linearGradient>
    <radialGradient id="ch-iris" cx=".5" cy=".7" r=".7"><stop offset="0" stop-color="#bfe3ff"/><stop offset=".6" stop-color="#7cbcf0"/><stop offset="1" stop-color="#4f93d6"/></radialGradient>
  </defs>
  <ellipse class="ch-ombre" cx="66" cy="94" rx="42" ry="4"/>
  <g class="ch-queue">
    <path class="ch-queue-p ch-queue-halo" d="M33 58 C 22 58, 12 50, 12 38 C 12 30, 14 24, 18 20" stroke="#f6eadb" stroke-width="16" stroke-linecap="round" fill="none"/>
    <path class="ch-queue-p" d="M33 58 C 22 58, 12 50, 12 38 C 12 30, 14 24, 18 20" stroke="url(#ch-queue)" stroke-width="12" stroke-linecap="round" fill="none"/>
  </g>
  <g class="ch-patte p-af"><rect x="33" y="63" width="11" height="26" rx="5.5" fill="url(#ch-patte)" opacity=".85"/><ellipse cx="38.5" cy="89.5" rx="7" ry="4.2" fill="#f1ede9"/></g>
  <g class="ch-patte p-vf"><rect x="84" y="63" width="11" height="26" rx="5.5" fill="url(#ch-patte)" opacity=".85"/><ellipse cx="89.5" cy="89.5" rx="7" ry="4.2" fill="#f1ede9"/></g>
  <g class="ch-corps">
    <ellipse cx="62" cy="61" rx="34" ry="18.5" fill="url(#ch-corps)"/>
    <path d="M34 54 q9 -10 24 -11" stroke="#e5d1b8" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="89" cy="60" rx="15" ry="16" fill="#fffaf3"/>
    <path d="M77 70 q3 5 6 1 q3 5 6 1 q3 5 6 1 q3 5 6 -1" fill="#fffaf3"/>
  </g>
  <g class="ch-patte p-ap"><rect x="44" y="64" width="11.5" height="26" rx="5.7" fill="url(#ch-patte)"/><ellipse cx="49.7" cy="90.2" rx="7.5" ry="4.4" fill="#fff"/></g>
  <g class="ch-patte p-vp"><rect x="95" y="64" width="11.5" height="26" rx="5.7" fill="url(#ch-patte)"/><ellipse cx="100.7" cy="90.2" rx="7.5" ry="4.4" fill="#fff"/>
    <g fill="#f6b3c8"><ellipse cx="100.7" cy="92.4" rx="2.4" ry="1.3"/><circle cx="97.2" cy="91" r=".9"/><circle cx="100.7" cy="90" r=".9"/><circle cx="104.2" cy="91" r=".9"/></g></g>
  <g class="ch-tete">
    <g class="ch-or g"><path d="M84 31 Q82 11 91 7 Q97 11 100 21 Z" fill="#7d5d4c"/><path d="M87.5 27 Q86.5 15 91 11.5 Q94.5 15 96.5 21 Z" fill="#f6c9d8"/></g>
    <g class="ch-or d"><path d="M106 21 Q109 11 115 7 Q124 11 122 31 Z" fill="#7d5d4c"/><path d="M109.5 21 Q111.5 15 115 11.5 Q119.5 15 118.5 27 Z" fill="#f6c9d8"/></g>
    <path d="M83 43 l-6 1 l4 2.5 l-4.5 3 l7 .5 z M123 43 l6 1 l-4 2.5 l4.5 3 l-7 .5 z" fill="#fbf3e8"/>
    <ellipse cx="103" cy="38" rx="22" ry="19" fill="url(#ch-tete-g)"/>
    <ellipse cx="103" cy="33" rx="6" ry="7.5" fill="#9b7b67" opacity=".3"/>
    <ellipse cx="103" cy="43" rx="14.5" ry="12.5" fill="url(#ch-masque)"/>
    <ellipse cx="88.5" cy="46.5" rx="3.8" ry="2.4" fill="#f9bfd4" opacity=".75"/><ellipse cx="117.5" cy="46.5" rx="3.8" ry="2.4" fill="#f9bfd4" opacity=".75"/>
    <g class="ch-yeux">
      <g class="ch-oeil"><ellipse cx="95" cy="37.5" rx="4.9" ry="5.5" fill="url(#ch-iris)" stroke="#5a4a42" stroke-width=".5"/></g>
      <g class="ch-oeil"><ellipse cx="111" cy="37.5" rx="4.9" ry="5.5" fill="url(#ch-iris)" stroke="#5a4a42" stroke-width=".5"/></g>
      <g class="ch-pup">
        <ellipse class="ch-pupille" cx="95" cy="38" rx="2.2" ry="3.9" fill="#2b3444"/><ellipse class="ch-pupille" cx="111" cy="38" rx="2.2" ry="3.9" fill="#2b3444"/>
        <circle cx="96.8" cy="35.4" r="1.5" fill="#fff"/><circle cx="93.8" cy="40.2" r=".7" fill="#fff"/>
        <circle cx="112.8" cy="35.4" r="1.5" fill="#fff"/><circle cx="109.8" cy="40.2" r=".7" fill="#fff"/>
      </g>
    </g>
    <g class="ch-yeux-dodo" stroke="#4a3a32" stroke-width="1.5" fill="none" stroke-linecap="round"><path d="M90.5 38 q4.5 3.5 9 0"/><path d="M106.5 38 q4.5 3.5 9 0"/></g>
    <g class="ch-yeux-joie" stroke="#4a3a32" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M90.5 39.5 q4.5 -5 9 0"/><path d="M106.5 39.5 q4.5 -5 9 0"/></g>
    <path d="M100.6 43.2 q2.4 -1 4.8 0 q-.4 1.8 -2.4 2.6 q-2 -.8 -2.4 -2.6z" fill="#f2a7bf"/>
    <path class="ch-bouche" d="M103 45.8 q-1.8 2.6 -4 1.1 M103 45.8 q1.8 2.6 4 1.1" stroke="#4a3a32" stroke-width="1" fill="none" stroke-linecap="round"/>
    <g class="ch-bouche-o"><ellipse cx="103" cy="48.4" rx="2.7" ry="3" fill="#b84f6e"/><ellipse cx="103" cy="49.9" rx="1.8" ry="1.2" fill="#f28fb0"/></g>
    <path class="ch-blep" d="M101.7 46.4 h2.6 v2.4 a1.3 1.3 0 0 1 -2.6 0z" fill="#f28fb0"/>
    <ellipse class="ch-langue" cx="103" cy="49" rx="1.8" ry="2.3" fill="#f28fb0"/>
    <g stroke="#cdbbaa" stroke-width=".7" stroke-linecap="round"><path d="M93 45 L77 42"/><path d="M93 47 L78 49"/><path d="M113 45 L129 42"/><path d="M113 47 L128 49"/></g>
    <text class="ch-chapeau" x="103" y="17" text-anchor="middle" font-size="18"></text>
  </g>
</svg>`;

  const FAITS = [
    'Je suis un chat Sacré de Birmanie : j\'ai des chaussettes blanches aux 4 pattes ! 🧦',
    'Mes yeux sont toujours bleus, comme le ciel 💙',
    'À ma naissance j\'étais tout blanc. Mes oreilles, ma queue et mon masque ont foncé ensuite !',
    'Une légende raconte que mes ancêtres gardaient un temple en Birmanie 🛕',
    'La Birmanie, mon pays d\'origine, s\'appelle aujourd\'hui le Myanmar. <a href="#/monde/mm">Va voir sa fiche !</a>',
    'Je dors environ 15 heures par jour. Une vie de rêve 😴',
    'Quand ma queue se dresse en point d\'interrogation, ça veut dire que je suis content ❓😺',
    'Un chat retombe presque toujours sur ses pattes. Essaie de me porter et de me lâcher !',
    'Les chats ne miaulent presque que pour parler aux humains. Miaou = « je t\'aime » (ou « j\'ai faim ») 😼',
    'Mon nez est unique, comme une empreinte digitale 🐽',
  ];
  const CHAPEAUX = [['🎓', 'Prêt pour le brevet ! 🎓'], ['👑', 'Appelez-moi Sa Majesté Silver 👑'], ['🎀', 'Je suis tout beau avec mon nœud 🎀'], ['🎩', 'Bonsoir, très chère… 🎩'], ['🧢', 'Yo ! 🧢'], ['🌸', 'Une fleur pour faire joli 🌸']];
  const BRAVO = ['Bravo !! 😻', 'Trop forte ! 🎉', 'Yesss ! 🐾', 'Miaou-tastique ! ✨', 'Je savais que tu y arriverais 💕', 'Wouhou ! 😸'];
  const OUPS = ['Pas grave, on réessaie ! 💪', 'Presque ! 🐾', 'Même moi je me trompe… parfois 😼', 'Courage, tu vas y arriver 💕', 'Hmm… relis la fiche avec moi ? 📖'];

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const rnd = (a, b) => a + Math.random() * (b - a);
  const hasard = (t) => t[Math.floor(Math.random() * t.length)];
  const W = () => window.innerWidth, H = () => window.innerHeight;
  const LARG = () => (W() < 600 ? 96 : 120);
  const nuit = () => { const h = new Date().getHours(); return h >= 21 || h < 7; };

  const C = { x: 40, y: 0, vy: 0, dir: 1, v: 38, mode: 'marche', fin: 0, occupe: false, aller: null, derniers: [], premier: true,
    press: null, drag: false, tombe: false, caline: false, chapeau: null, faim: 0, actif: 0,
    jeu: null, jeuEtat: null, pomo: 0, comblePending: false, lastRoute: 0 };
  const souris = { x: 0, y: 0, t: 0 };
  const caresse = { d: 0, n: 0, last: 0, max: 15 };
  let el, act, bulle, svg, pup, last = 0, bulleTimer, clics = [], lastReact = 0;

  function creer() {
    el = document.createElement('div');
    el.className = 'chat';
    el.innerHTML = `<div class="chat-bulle" hidden></div><div class="chat-flip"><div class="chat-act">${SVG}</div></div>`;
    el.title = `${NOM}, le chat Sacré de Birmanie : clique, caresse ou porte-le !`;
    document.body.appendChild(el);
    act = el.querySelector('.chat-act');
    bulle = el.querySelector('.chat-bulle');
    svg = el.querySelector('svg');
    pup = el.querySelector('.ch-pup');
    const flip = el.querySelector('.chat-flip');
    flip.addEventListener('pointerdown', appui);
    flip.addEventListener('pointermove', bouge);
    flip.addEventListener('pointerup', lache);
    flip.addEventListener('pointercancel', () => { if (C.drag) lache(); C.press = null; });
    flip.addEventListener('pointerenter', () => el.classList.add('regarde'));
    flip.addEventListener('pointerleave', () => el.classList.remove('regarde'));
    bulle.addEventListener('click', (e) => { const b = e.target.closest('[data-chat]'); if (b) { e.preventDefault(); BOUTONS[b.dataset.chat]?.(); } });
    document.addEventListener('pointermove', (e) => { souris.x = e.clientX; souris.y = e.clientY; souris.t = performance.now(); C.actif = souris.t; }, { passive: true });
    document.addEventListener('keydown', () => (C.actif = performance.now()));
    C.x = rnd(20, Math.max(40, W() / 2));
    C.actif = performance.now();
    C.fin = C.actif + 6000;
    C.faim = C.actif + rnd(150000, 220000);
    requestAnimationFrame(boucle);
    setInterval(cligne, 3600);
    setInterval(oreille, 5200);
    const btn = document.getElementById('chat-btn');
    const appliquer = () => { const off = store.get('chat:off', false); el.hidden = off; if (btn) btn.classList.toggle('off', off); };
    if (btn) btn.addEventListener('click', () => { store.set('chat:off', !store.get('chat:off', false)); appliquer(); if (!el.hidden) parle('Me revoilà ! 😺', 1800); });
    appliquer();
    panneau(btn);
    ecouteSite();
  }

  /* ---------- Boucle : déplacements, chute, regard ---------- */
  function boucle(t) {
    const dt = Math.min(0.05, (t - last) / 1000 || 0); last = t;
    const max = W() - LARG() - 6;
    let bouge = false;
    if (C.drag) { /* il suit la souris */ }
    else if (C.y > 0 || C.vy) { // chute après qu'on l'a lâché
      C.vy += 2600 * dt; C.y -= C.vy * dt;
      if (C.y <= 0) { C.y = 0; C.vy = 0; atterrit(); }
    } else if (C.jeu) {
      bouge = jeuTick(dt, t, max);
    } else if (C.aller) {
      const d = C.aller.x - C.x, pas = C.aller.v * dt;
      if (d) C.dir = Math.sign(d);
      if (Math.abs(d) <= pas) { C.x = C.aller.x; const r = C.aller.ok; C.aller = null; r(); } else { C.x += Math.sign(d) * pas; bouge = true; }
    } else if (!C.occupe) {
      if (C.mode === 'marche') {
        C.x += C.dir * C.v * dt; bouge = true;
        if (C.x < 6) { C.x = 6; C.dir = 1; }
        if (C.x > max) { C.x = max; C.dir = -1; }
      }
      if (t > C.fin) humeur(t);
      else if (t > C.faim && !el.hidden) { C.faim = t + rnd(300000, 420000); faire(BETISES.faim); }
      else if (t - C.actif > 120000 && !el.hidden) { C.actif = t; faire(BETISES.oublie); }
    }
    if (C.caline && t - caresse.last > 1600) finCalin();
    C.x = Math.min(Math.max(6, C.x), Math.max(6, max));
    el.style.transform = `translate(${C.x}px, ${-C.y}px)`;
    el.classList.toggle('gauche', C.dir < 0);
    el.classList.toggle('marche', bouge && (!C.aller || C.aller.v < 150) && !(C.jeu && C.jeuEtat && C.jeuEtat.vite));
    el.classList.toggle('court', bouge && ((!!C.aller && C.aller.v >= 150) || (C.jeu && C.jeuEtat && C.jeuEtat.vite)));
    regard(t);
    requestAnimationFrame(boucle);
  }

  function regard(t) { // les pupilles suivent la souris
    let ox = 0, oy = 0;
    if (souris.t && t - souris.t < 6000 && !el.hidden) {
      const r = svg.getBoundingClientRect();
      const ex = r.left + (C.dir < 0 ? 1 - 103 / 140 : 103 / 140) * r.width, ey = r.top + 0.38 * r.height;
      const dx = souris.x - ex, dy = souris.y - ey, d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 160);
      ox = (dx / d) * 1.6 * k * (C.dir < 0 ? -1 : 1); oy = (dy / d) * 1.3 * k;
    }
    pup.style.transform = `translate(${ox.toFixed(2)}px, ${oy.toFixed(2)}px)`;
  }

  function humeur(t) { // ce que Silver fait tout seul
    if (C.comblePending) { C.comblePending = false; C.fin = t + 99999; faire(BETISES.comble).then(() => (C.fin = performance.now() + 3000)); return; }
    const calme = C.pomo > Date.now();
    let r = Math.random(); const dodo = nuit() ? 0.22 : 0.06;
    if (calme && C.mode === 'marche') r = 0.45 + r * 0.45;
    poses();
    if (C.mode !== 'marche' || r < 0.42) {
      C.mode = 'marche';
      if (Math.random() < 0.35) C.dir = -C.dir;
      C.v = calme ? rnd(14, 24) : rnd(28, 50);
      C.fin = t + (calme ? rnd(2500, 4500) : rnd(5000, 11000));
      return;
    }
    C.mode = 'pause';
    if (r < 0.58) { C.fin = t + rnd(2500, 4500); if (Math.random() < 0.5) setTimeout(() => !C.occupe && el.classList.add('penche'), 800); }
    else if (r < 0.58 + dodo) { el.classList.add('dodo'); C.fin = t + rnd(7000, 11000); zzz(C.fin - t); }
    else if (r < 0.66 + dodo) { el.classList.add('toilette'); C.fin = t + 3200; }
    else if (r < 0.73 + dodo) { el.classList.add('pain'); C.fin = t + rnd(4000, 7000); }
    else if (r < 0.79 + dodo) { el.classList.add('baille'); C.fin = t + 1800; }
    else if (calme) { C.fin = t + rnd(3000, 5000); el.classList.add('pain'); }
    else { C.fin = t + 99999; faire(BETISES[hasard(['eternue', 'hoquet', 'queue', 'blep', 'renverse', 'etire', 'gym', 'miroir'])]).then(() => (C.fin = performance.now() + 3000)); }
  }

  function poses() { el.classList.remove('dodo', 'toilette', 'etire', 'heureux', 'pain', 'baille', 'grognon', 'surpris', 'miaule', 'blep', 'peur', 'penche', 'chasse', 'porte', 'tape', 'dans-boite'); }
  function cligne() {
    if (/\b(dodo|heureux|baille)\b/.test(el.className)) return;
    el.classList.add('cligne'); setTimeout(() => el.classList.remove('cligne'), 150);
  }
  function oreille() {
    if (Math.random() < 0.5) return;
    const c = Math.random() < 0.5 ? 'or-g' : 'or-d';
    el.classList.add(c); setTimeout(() => el.classList.remove(c), 420);
  }
  const allerA = (x, v) => new Promise((ok) => { C.aller = { x: Math.min(Math.max(6, x), W() - LARG() - 6), v, ok }; });
  async function anim(cls, ms) { act.classList.add(cls); await wait(ms); act.classList.remove(cls); }
  async function pose(cls, ms) { el.classList.add(cls); await wait(ms); el.classList.remove(cls); }

  async function faire(fn) { // lance une bêtise en empêchant les autres de démarrer en même temps
    if (C.occupe) return;
    C.occupe = true; C.aller = null; poses();
    try { await fn(); } catch (e) { /* une bêtise ratée ne doit rien casser */ }
    finally { poses(); C.occupe = false; C.mode = 'marche'; C.fin = performance.now() + rnd(4000, 8000); }
  }

  /* ---------- Bulles et petits effets ---------- */
  function parle(html, ms = 2600) {
    clearTimeout(bulleTimer);
    bulle.innerHTML = html; bulle.hidden = false;
    const larg = Math.min(250, W() - 20);
    bulle.style.maxWidth = larg + 'px';
    const centre = C.x + LARG() / 2;
    bulle.classList.toggle('a-droite', centre + larg / 2 > W() - 8);
    bulle.classList.toggle('a-gauche', centre - larg / 2 < 8);
    bulle.classList.remove('pop'); void bulle.offsetWidth; bulle.classList.add('pop');
    if (ms) bulleTimer = setTimeout(() => (bulle.hidden = true), ms);
  }
  const tais = () => { clearTimeout(bulleTimer); bulle.hidden = true; };
  function effet(txt, n = 1, cls = '') {
    for (let i = 0; i < n; i++) {
      const s = document.createElement('span');
      s.className = 'chat-fx ' + cls; s.textContent = txt;
      s.style.left = rnd(35, 80) + '%';
      s.style.animationDelay = i * 0.22 + 's';
      el.appendChild(s);
      setTimeout(() => s.remove(), 2600 + i * 220);
    }
  }
  function zzz(ms) {
    const id = setInterval(() => { if (!el.classList.contains('dodo')) return clearInterval(id); effet('z', 1, 'zz'); }, 800);
    setTimeout(() => clearInterval(id), ms);
  }
  function objet(txt, cls, x) {
    const o = document.createElement('div');
    o.className = 'chat-objet ' + cls; o.innerHTML = txt;
    o.style.left = x + 'px';
    document.body.appendChild(o);
    return o;
  }
  const devant = (d = 70) => (C.dir > 0 ? C.x + LARG() + d - 60 : C.x - d + 20);

  /* ---------- Caresses, clics et portage ---------- */
  function appui(e) {
    if (e.button !== 0) return;
    C.press = { x: e.clientX, y: e.clientY, id: e.pointerId };
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }
  function bouge(e) {
    if (C.press) {
      if (!C.drag && Math.hypot(e.clientX - C.press.x, e.clientY - C.press.y) > 7) debutPorte();
      if (C.drag) porteA(e.clientX, e.clientY);
      return;
    }
    // la souris passe sur lui sans cliquer : ce sont des caresses
    const d = Math.hypot(e.movementX || 0, e.movementY || 0);
    if (!d) return;
    caresse.d += d; caresse.last = performance.now();
    if (caresse.d > 190) { caresse.d = 0; unCalin(); }
  }
  function lache() {
    const p = C.press; C.press = null;
    if (C.drag) { C.drag = false; el.classList.remove('porte'); C.vy = 0; if (C.y < 2) { C.y = 0; atterrit(); } else C.tombe = true; return; }
    if (p) clic();
  }

  function debutPorte() {
    if (C.occupe && !C.caline && !el.classList.contains('dodo')) return;
    C.drag = true; C.occupe = true; C.caline = false; C.aller = null; poses();
    el.classList.add('porte', 'surpris');
    parle(hasard(['Miaou ?! Pose-moi ! 🙀', 'Hé ! Je vole ! ✈️', 'Wiii ! 😹', 'Doucement, hein… 😾']), 0);
  }
  function porteA(px, py) {
    const larg = LARG(), haut = larg * 100 / 140;
    C.x = px - larg * (C.dir > 0 ? 0.62 : 0.38);
    C.y = Math.max(0, Math.min(H() - haut - 64, H() - 2 - py - haut * 0.72));
  }
  async function atterrit() {
    C.tombe = false;
    poses();
    act.classList.add('a-atterrit');
    parle(hasard(['Retombé sur mes pattes ! 😼', 'Ta-daaa ! 🤸', 'Même pas mal ! 😸', 'Encore ! Encore ! 😹']), 2200);
    await wait(500); act.classList.remove('a-atterrit');
    C.occupe = false; C.mode = 'pause'; C.fin = performance.now() + 1500;
  }

  function unCalin() {
    if (C.drag || el.hidden) return;
    if (!C.caline) {
      if (C.occupe && !el.classList.contains('dodo')) return;
      C.occupe = true; C.caline = true; C.aller = null; caresse.n = 0; poses();
      caresse.max = Math.round(rnd(13, 19));
      el.classList.add('heureux');
      parle('Rrrr… rrrr… 💕', 1800);
    }
    caresse.n++; bonheur(0.25);
    effet(hasard(['💕', '💗', '💖']), 1, 'coeur');
    if (caresse.n === 7) parle('Encore ! Juste derrière l\'oreille… 😻', 2200);
    if (caresse.n === Math.round(caresse.max * 0.8)) parle('Rrrrrr… Tu es ma personne préférée 💗', 2200);
    if (caresse.n >= caresse.max) grogne();
  }
  async function grogne() { // comme un vrai chat : trop de caresses, il en a marre
    C.caline = false;
    el.classList.remove('heureux'); el.classList.add('grognon');
    parle(hasard(['Bon, ça suffit maintenant ! 😾', 'Stop ! Mon ventre, c\'est interdit ! 😾', 'Pfff, les humains… 😾']), 2200);
    await wait(500); await pose('tape', 450);
    await wait(500); el.classList.remove('grognon');
    await allerA(C.x < W() / 2 ? C.x + 260 : C.x - 260, 170);
    caresse.n = 0; C.occupe = false; C.mode = 'pause'; C.fin = performance.now() + 2500;
  }
  function finCalin() {
    C.caline = false; el.classList.remove('heureux');
    if (caresse.n >= 4) parle(hasard(['C\'était bien… 😌', 'Merci pour les câlins 💕', 'Rrr… reviens vite 💗']), 2000);
    caresse.n = 0; C.occupe = false; C.mode = 'pause'; C.fin = performance.now() + 2500;
  }

  async function clic() {
    const now = performance.now();
    clics = clics.filter((c) => now - c < 2000); clics.push(now);
    if (C.caline) finCalin();
    if (el.classList.contains('dodo') && C.occupe) { parle(hasard(['Chut… je dors ! 💤', 'Mmmh… encore 5 minutes… 😴']), 1500); return; }
    if (C.occupe) {
      if (clics.length >= 4) { clics = []; parle('Hihihi ! Arrête, ça chatouille ! 😹', 1800); anim('a-hoche', 900); }
      return;
    }
    if (C.premier) {
      C.premier = false;
      return faire(async () => {
        el.classList.add('miaule');
        parle(`Miaou ! Je m'appelle <b>${NOM}</b>, je suis un chat Sacré de Birmanie 🐾<br>Clique sur moi, caresse-moi avec la souris, ou porte-moi !${nuit() ? '<br>…mais il est tard, bientôt dodo 😴' : ''}`, 5200);
        await anim('a-saut', 900); el.classList.remove('miaule'); await wait(1800);
      });
    }
    const noms = Object.keys(BETISES).filter((n) => !C.derniers.includes(n) && !['faim', 'oublie', 'comble'].includes(n));
    const n = hasard(noms);
    C.derniers = [n, ...C.derniers].slice(0, 6);
    faire(BETISES[n]);
  }

  /* ---------- Les boutons dans les bulles ---------- */
  const BOUTONS = {
    async croquettes() {
      tais();
      const bol = objet('🥣', 'bol', devant(60));
      C.occupe = true;
      await allerA(C.dir > 0 ? devant(60) - LARG() + 40 : devant(60) + 10, 140);
      el.classList.add('heureux');
      for (let i = 0; i < 5; i++) { effet(hasard(['crunch', 'miam', 'crunch']), 1, 'mot'); await anim('a-mange', 420); }
      bol.classList.add('vide'); el.classList.remove('heureux'); bonheur(1);
      parle('Miam ! Merci beaucoup 💕 J\'ai le ventre tout rond !', 2600);
      await anim('a-hoche', 900);
      bol.remove();
    },
  };

  /* ---------- Les bêtises ---------- */
  const BETISES = {
    async saut() { el.classList.add('miaule'); parle(hasard(['Miaou ! 😺', 'Hop ! 🐾', 'Boing ! 😸'])); await anim('a-saut', 900); },
    async roulade() { el.classList.add('heureux'); parle('Youpiii ! 😹'); await anim('a-roulade', 1200); },
    async ronron() {
      el.classList.add('heureux'); effet('💕', 5, 'coeur'); parle('Rrrr… rrrr… Je t\'aime fort 💕', 2800);
      await wait(2800);
    },
    async dodo() {
      el.classList.add('dodo'); parle('Bonne nuit… 😴', 2000); zzz(5200);
      await wait(5200); el.classList.remove('dodo');
      el.classList.add('surpris'); parle('Quoi ?! J\'ai raté quelque chose ? 🙀', 2000); await anim('a-sursaut', 500);
    },
    async folle() {
      el.classList.add('surpris');
      parle('Zoomies !!! 💨', 1800);
      await allerA(C.x < W() / 2 ? W() : 0, 560); await anim('a-saut', 700);
      await allerA(W() / 2 - LARG() / 2, 560);
      el.classList.remove('surpris');
      parle('Pfiou… Je ne sais pas ce qui m\'a pris 😅', 1800);
      await anim('a-souffle', 1200);
    },
    async pelote() {
      const dir = C.x < W() / 2 ? 1 : -1;
      const depart = C.x + (dir > 0 ? LARG() : -30), arrivee = dir > 0 ? Math.min(W() - 60, C.x + 340) : Math.max(20, C.x - 320);
      const o = objet('🧶', 'pelote', depart);
      el.classList.add('surpris');
      parle('Une pelote !!! 😻', 1800);
      requestAnimationFrame(() => { o.style.transform = `translateX(${arrivee - depart}px) rotate(${dir * 720}deg)`; });
      el.classList.add('chasse'); await anim('a-fesses', 700); el.classList.remove('chasse');
      await allerA(dir > 0 ? arrivee - LARG() + 10 : arrivee + 20, 260);
      await anim('a-bond', 600);
      o.classList.add('attrape'); el.classList.remove('surpris'); el.classList.add('heureux'); parle('Attrapée ! 🏆', 1600);
      await wait(800); o.remove();
    },
    async papillon() {
      const o = objet('🦋', 'papillon', C.x + LARG() / 2 - 14);
      el.classList.add('surpris');
      parle('Oh, un papillon ! 🦋', 1600);
      await wait(700); await anim('a-saut', 800);
      await wait(200); await anim('a-saut', 800);
      o.classList.add('part'); el.classList.remove('surpris'); el.classList.add('grognon'); parle('Presque… 😾', 1800);
      await wait(1400); o.remove();
    },
    async toilette() { el.classList.add('toilette'); parle('Je me fais tout beau 😼', 2600); await wait(2800); },
    async danse() { el.classList.add('heureux'); parle('🎵 Miaou-miaou-miaou 🎵', 2200); effet('🎵', 3); effet('🎶', 2); await anim('a-danse', 2200); },
    async etire() { el.classList.add('etire'); parle('Aaaah, ça fait du bien… 😌', 2000); await wait(2000); },
    async coucou() { await anim('a-cache', 1900); el.classList.add('miaule'); parle('Coucou ! 👀', 1600); await wait(600); },
    async info() { el.classList.add('penche'); parle(hasard(FAITS), 5600); await anim('a-hoche', 900); await wait(1600); },

    async concombre() { // la célèbre peur du concombre
      const derriere = C.dir > 0 ? C.x - 34 : C.x + LARG() + 4;
      const o = objet('🥒', 'concombre', derriere);
      el.classList.add('penche'); parle('Tiens, j\'ai entendu un bruit… 🤔', 1600);
      await wait(1700); el.classList.remove('penche');
      C.dir = -C.dir; await wait(250);
      el.classList.add('peur'); parle('AAAAAH ! UN CONCOMBRE !!! 🙀', 2000);
      await anim('a-grand-saut', 1000);
      await allerA(C.x < W() / 2 ? C.x + 380 : C.x - 380, 600);
      el.classList.remove('peur');
      C.dir = -C.dir; await wait(300);
      parle('… c\'était juste un concombre 😳', 2000);
      await wait(1600); o.classList.add('part'); await wait(500); o.remove();
    },
    async boite() {
      const x = devant(80);
      const b = objet('<div class="boite-fond"></div><div class="boite-avant">📦</div>', 'boite', x - 20);
      el.classList.add('surpris'); parle('Une boîte !! 😻', 1400);
      await allerA(C.dir > 0 ? x - LARG() / 2 - 10 : x - LARG() / 2 + 30, 200);
      el.classList.remove('surpris');
      await anim('a-saut', 700);
      b.style.left = (C.x + LARG() / 2 - 55) + 'px'; b.classList.add('occupee');
      el.classList.add('dans-boite');
      parle('Si ça rentre, je m\'assois. 📦', 2400);
      await wait(2200); await anim('a-hoche', 900);
      el.classList.add('miaule'); parle('Tu ne me vois pas, hein ? 👀', 1800); await wait(1800);
      el.classList.remove('dans-boite', 'miaule'); await anim('a-saut', 700);
      b.classList.add('part'); await wait(400); b.remove();
    },
    async renverse() { // pousser un objet en regardant droit dans les yeux
      const x = devant(40);
      const o = objet(hasard(['🥛', '🪴', '🧁', '✏️', '🍵']), 'tasse', x);
      await allerA(C.dir > 0 ? x - LARG() + 18 : x + 12, 60);
      el.classList.add('penche'); parle('…', 1400); await wait(1500);
      parle('(il te regarde droit dans les yeux) 👀', 1600); await wait(1500);
      await pose('tape', 450);
      o.style.setProperty('--dir', C.dir); o.classList.add('tombe');
      el.classList.remove('penche'); el.classList.add('blep');
      parle('Oups. 😼', 1600); await wait(1500);
      parle('Je ne regrette rien. 😼', 1800); await wait(1600); o.remove();
    },
    async laser() {
      const p = objet('', 'laser', C.x + (C.dir > 0 ? LARG() + 60 : -60));
      el.classList.add('surpris'); parle('Le point rouge !!! 🔴', 1600);
      for (let i = 0; i < 3; i++) {
        const cible = rnd(30, W() - 60);
        p.style.left = cible + 'px';
        await wait(350);
        C.dir = cible > C.x ? 1 : -1;
        el.classList.add('chasse'); await anim('a-fesses', 650); el.classList.remove('chasse');
        await allerA(cible - (C.dir > 0 ? LARG() - 20 : 0), 520);
        await anim('a-bond', 500);
      }
      p.remove(); el.classList.remove('surpris'); el.classList.add('penche');
      parle('Mais… il est passé où ?? 🤔', 2000); await wait(2000);
    },
    async queue() {
      el.classList.add('surpris'); parle('Ma queue !!! Elle me suit ! 🌀', 2000);
      for (let i = 0; i < 12; i++) { C.dir = -C.dir; await anim('a-hic', 170); }
      el.classList.remove('surpris'); el.classList.add('cligne');
      parle('Ouh… la tête qui tourne 😵', 2000); await anim('a-vertige', 1600); el.classList.remove('cligne');
    },
    async eternue() {
      el.classList.add('dodo'); parle('A… a… 😣', 900); await wait(900);
      parle('A… AAA… 😖', 900); await wait(900);
      el.classList.remove('dodo'); el.classList.add('miaule');
      parle('ATCHOUM !!! 💦', 1500); effet('💦', 2); await anim('a-atchoum', 600);
      el.classList.remove('miaule'); parle('Pardon 😅', 1400); await wait(1300);
    },
    async hoquet() {
      parle('Hic ! 😳', 900);
      for (let i = 0; i < 4; i++) { el.classList.add('surpris'); effet('hic !', 1, 'mot'); await anim('a-hic', 300); el.classList.remove('surpris'); await wait(rnd(350, 700)); }
      parle('Hic… c\'est passé ? … Hic ! 😹', 1800); await wait(1500);
    },
    async blep() { el.classList.add('blep'); parle('…', 1500); await wait(1700); parle('blep 😛', 1600); await wait(1800); },
    async pain() { el.classList.add('pain'); parle('Je suis un petit pain. 🍞', 2400); await wait(3200); },
    async baille() { el.classList.add('baille'); parle('Aaaaaawwwh… 🥱', 1800); await wait(1800); el.classList.remove('baille'); await wait(300); },
    async chapeau() {
      const txt = el.querySelector('.ch-chapeau');
      if (C.chapeau) { txt.textContent = ''; C.chapeau = null; parle('J\'enlève mon chapeau 🙇', 1600); await anim('a-hoche', 900); return; }
      const [c, phrase] = hasard(CHAPEAUX);
      txt.textContent = c; C.chapeau = c;
      el.classList.add('heureux'); parle(phrase, 2400); await anim('a-saut', 900); await wait(800);
      setTimeout(() => { if (C.chapeau === c) { txt.textContent = ''; C.chapeau = null; } }, 40000);
    },
    async calin() {
      el.classList.add('heureux'); parle('Viens, un gros câlin ! 🤗', 2000); effet('💗', 1, 'gros-coeur');
      await anim('a-calin', 1600); await wait(400);
    },
    async faim() {
      el.classList.add('miaule', 'penche');
      parle('J\'ai faim… 🥺<br><button class="btn small chat-donner" data-chat="croquettes">🐟 Donner des croquettes</button>', 0);
      for (let i = 0; i < 20; i++) { await wait(500); if (bulle.hidden) return; }
      if (bulle.hidden) return;
      el.classList.remove('penche');
      parle('MIAOUUUU ! 😿<br><button class="btn small chat-donner" data-chat="croquettes">🐟 Donner des croquettes</button>', 0);
      await anim('a-sursaut', 500);
      for (let i = 0; i < 16; i++) { await wait(500); if (bulle.hidden) return; }
      parle('Bon… je me débrouillerai tout seul 😾', 2000);
    },
    async oublie() {
      await allerA(W() / 2 - LARG() / 2, 70);
      el.classList.add('penche', 'miaule'); parle('Tu m\'oublies ? 🥺 Coucou !', 3000); await wait(3200);
      el.classList.remove('penche', 'miaule'); el.classList.add('dodo'); zzz(6000); await wait(6000);
    },
  };


  /* ---------- Plus de bêtises ---------- */
  Object.assign(BETISES, {
    async magicien() {
      const txt = el.querySelector('.ch-chapeau'), ancien = txt.textContent;
      txt.textContent = '🎩'; el.classList.add('heureux');
      parle('Mesdames et messieurs… 🎩✨', 1700); await wait(1700);
      effet('✨', 4); parle('Abracadabra ! 🪄', 1300); await anim('a-hoche', 700);
      const lapin = objet('🐇', 'lapin', C.x + LARG() / 2 - 14);
      await wait(1500);
      el.classList.remove('heureux'); el.classList.add('surpris'); C.dir = -C.dir;
      parle('Hein ?! D\'où il sort, lui ?! 🙀', 1800); await anim('a-sursaut', 600); await wait(1100);
      lapin.classList.add('part'); await wait(500); lapin.remove();
      txt.textContent = ancien;
    },
    async poisson() {
      const x = devant(90), o = objet('🐟', 'poisson', x);
      el.classList.add('surpris'); parle('Un poisson tombé du ciel ?! 🐟', 1800); await wait(800);
      await allerA(C.dir > 0 ? x - LARG() + 25 : x - 10, 220);
      el.classList.remove('surpris'); el.classList.add('heureux');
      o.classList.add('mange'); for (let i = 0; i < 3; i++) { effet('miam', 1, 'mot'); await anim('a-mange', 420); }
      o.remove(); parle('C\'était trop bon ! 😻 Recommence !', 2000); bonheur(0.5); await wait(1600);
    },
    async pizza() {
      const x = devant(80), o = objet('🍕', 'pizza', x);
      el.classList.add('penche'); parle('Une pizza ?! Pour moi ?! 🍕', 1700); await wait(1500);
      await allerA(C.dir > 0 ? x - LARG() + 25 : x - 10, 200);
      el.classList.remove('penche'); el.classList.add('heureux');
      for (let i = 0; i < 4; i++) { effet('crunch', 1, 'mot'); await anim('a-mange', 420); }
      o.remove(); parle('Ce n\'est pas bon pour les chats… mais ça valait le coup 😼', 2600); await wait(2400);
    },
    async gym() {
      el.classList.add('heureux'); parle('Séance de sport ! Un… deux… 💪', 2000);
      for (let i = 0; i < 5; i++) { await anim('a-gym', 480); if (i === 2) effet('💪', 2); }
      el.classList.remove('heureux'); parle('Pfff… je suis épuisé 😮‍💨', 2000); await anim('a-souffle', 1200);
    },
    async parapluie() {
      const o = objet('☔', 'parapluie', C.x + LARG() / 2 - 20);
      el.classList.add('grognon'); parle('Il pleut ?! Je déteste l\'eau ! 😾', 1800); effet('💧', 6, 'pluie');
      await wait(2200); o.remove(); el.classList.remove('grognon'); el.classList.add('surpris');
      parle('Brrr… 💦', 1500); await anim('a-secoue', 900);
    },
    async miroir() {
      const x = devant(75), o = objet('<span class="mir">🪞</span><span class="mir-chat">🐱</span>', 'miroir', x);
      el.classList.add('surpris'); await allerA(C.dir > 0 ? x - LARG() + 10 : x + 10, 80);
      parle('Qui est ce chat ?! 🙀', 1700); await wait(1500);
      el.classList.remove('surpris'); el.classList.add('grognon'); parle('Tsss ! Ce chat me copie ! 😾', 1800); await anim('a-hoche', 900);
      el.classList.remove('grognon'); el.classList.add('heureux'); parle('…Oh. C\'est moi ! Je suis trop beau 😳', 2400); await wait(2300);
      o.classList.add('part'); await wait(450); o.remove();
    },
    async comble() {
      el.querySelector('.ch-chapeau').textContent = '👑'; C.chapeau = '👑';
      el.classList.add('heureux'); effet('💖', 4, 'coeur'); effet('🎵', 3); effet('✨', 3);
      parle('Je suis le chat le plus heureux du monde ! 💖👑', 3400); await anim('a-danse', 2200); await anim('a-roulade', 1200);
      setTimeout(() => { if (C.chapeau === '👑') { el.querySelector('.ch-chapeau').textContent = ''; C.chapeau = null; } }, 30000);
    },
  });

  /* ---------- Bonheur de Silver (0 à 5 cœurs, il baisse avec le temps) ---------- */
  function bonheurLire() {
    const o = store.get('chat:bonheur', null), now = Date.now();
    if (!o) return 3;
    return Math.max(0, Math.min(5, o.v - (now - o.t) / 240000));
  }
  function bonheur(d) {
    let v = Math.min(5, bonheurLire() + d);
    if (v >= 5) { v = 3; if (C.occupe) C.comblePending = true; else setTimeout(() => faire(BETISES.comble), 900); }
    store.set('chat:bonheur', { v, t: Date.now() });
    majPanneau();
  }

  /* ---------- Modes de jeu : laser, balle, papillons, cache-cache ---------- */
  function jeuTick(dt, t, max) {
    const J = C.jeuEtat; if (!J) return false;
    const centre = C.x + LARG() / 2; let bouge = false;
    const va = (cible, v) => { const d = cible - centre; if (Math.abs(d) > 16) { C.dir = Math.sign(d); C.x += C.dir * Math.min(v * dt, Math.abs(d)); bouge = true; } return d; };
    J.vite = false;
    if (t > J.fin) { stopJeu(J.finMsg ? J.finMsg() : null); return false; }
    if (C.jeu === 'laser') {
      J.pt.style.transform = `translate(${souris.x - 6}px, ${souris.y - 6}px)`;
      if (t - souris.t > 25000) { stopJeu('Tu ne bouges plus la souris ? Je vais faire un petit somme 😴'); return false; }
      J.vite = true; const d = va(souris.x, 340);
      if (Math.abs(d) < 60 && souris.y > H() - 170 && t > J.next) { J.next = t + rnd(1800, 3600); J.n++; anim('a-bond', 500); parle(hasard(['Je l\'ai ! … ah non 😾', 'Attrape-le ! 🔴', 'Il est plus rapide que moi ! 😹']), 1300); }
      else if (Math.abs(d) < 120 && t > J.fesses) { J.fesses = t + 2500; el.classList.add('chasse'); anim('a-fesses', 650).then(() => el.classList.remove('chasse')); }
    } else if (C.jeu === 'balle') {
      for (const b of J.balles) {
        b.vy -= 1500 * dt; b.y += b.vy * dt; b.x += b.vx * dt; b.a += b.vx * dt * 0.6;
        if (b.y < 8) { b.y = 8; b.vy = -b.vy * 0.55; b.vx *= 0.82; if (Math.abs(b.vy) < 90) b.vy = 0; }
        if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx); } if (b.x > W() - 28) { b.x = W() - 28; b.vx = -Math.abs(b.vx); }
        b.el.style.transform = `translate(${b.x}px, ${H() - b.y - 28}px) rotate(${b.a}deg)`;
      }
      if (J.balles.length) {
        const b = J.balles.reduce((m, c) => (Math.abs(c.x - centre) < Math.abs(m.x - centre) ? c : m));
        J.vite = true; va(b.x + 14, 250);
        if (Math.abs(b.x + 14 - centre) < 46 && b.y < 70 && t > J.kick) {
          J.kick = t + 450; J.n++; b.vy = rnd(560, 820); b.vx = (Math.random() < 0.5 ? -1 : 1) * rnd(140, 420);
          anim('a-bond', 500); if (J.n % 4 === 0) parle(hasard(['Gooool ! ⚽', 'Quelle passe ! 😸', 'Je suis un champion 🏆', 'Encore ! Encore ! 🎾']), 1200);
        }
      }
    } else if (C.jeu === 'papillons') {
      J.pap.forEach((b) => {
        if (b.pris) return;
        b.ph += dt; b.ang += Math.sin(b.ph * 1.7) * dt * 3;
        b.x += Math.cos(b.ang) * b.v * dt; b.y += Math.sin(b.ang) * b.v * dt * 0.7;
        if (b.x < 10 || b.x > W() - 40) b.ang = Math.PI - b.ang; if (b.y < 90 || b.y > H() - 170) b.ang = -b.ang;
        b.x = Math.min(Math.max(10, b.x), W() - 40); b.y = Math.min(Math.max(90, b.y), H() - 170);
        b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
      });
      const rest = J.pap.filter((b) => !b.pris);
      if (!rest.length) { J.fin = 0; return false; }
      const b = rest[0]; J.vite = true; const d = va(b.x + 14, 190);
      if (Math.abs(d) < 50 && t > J.next) { J.next = t + rnd(2200, 4200); anim('a-saut', 800); parle(hasard(['Raté ! 😾', 'Hop ! … trop haut 🦋', 'Reviens ici ! 😼']), 1100); }
    } else if (C.jeu === 'cache') {
      if (t - J.debut > 22000 && !J.indice) { J.indice = true; J.oeil.classList.add('indice'); }
    }
    return bouge;
  }

  function stopJeu(msg) {
    const J = C.jeuEtat; if (!J) return;
    J.nettoie && J.nettoie();
    C.jeu = null; C.jeuEtat = null; C.aller = null;
    poses(); el.classList.remove('cache');
    C.occupe = false; C.mode = 'pause'; C.fin = performance.now() + 1800;
    majPanneau();
    if (msg) { parle(msg, 3600); }
    if (J.recompense) bonheur(J.recompense);
  }

  async function demarreJeu(nom) {
    if (C.drag || el.hidden) return;
    if (C.jeu === nom) { stopJeu('On arrête de jouer ? D\'accord 😺'); return; }
    if (C.jeu) stopJeu();
    for (let i = 0; i < 24 && C.occupe; i++) { if (i === 0) parle('Une seconde, je finis ma bêtise 😼', 1500); await wait(250); }
    if (C.occupe) return;
    C.occupe = true; C.aller = null; C.caline = false; poses(); tais();
    C.jeu = nom; const now = performance.now();
    const J = C.jeuEtat = { debut: now, fin: now + 60000, n: 0, next: now + 1500, fesses: now, kick: 0, vite: false, recompense: 1 };
    if (nom === 'laser') {
      J.pt = document.createElement('div'); J.pt.className = 'chat-objet laser-souris'; document.body.appendChild(J.pt);
      J.nettoie = () => { J.pt.remove(); };
      J.finMsg = () => `Le point rouge m'a bien fait courir ! 😹 (${J.n} bonds)`;
      parle('Le point rouge !!! Bouge ta souris, je le chasse ! 🔴', 3500);
    } else if (nom === 'balle') {
      J.balles = []; J.fin = now + 45000;
      const lancer = (e) => {
        if (e.target.closest('.chat, .chat-panel, #chat-jouer, #chat-btn, .chat-bulle')) return;
        if (J.balles.length >= 4) { const o = J.balles.shift(); o.el.remove(); }
        const b = { x: e.clientX - 14, y: Math.max(8, H() - e.clientY), vx: rnd(-160, 160), vy: 0, a: 0, el: document.createElement('div') };
        b.el.className = 'chat-objet balle'; b.el.textContent = '🎾'; document.body.appendChild(b.el); J.balles.push(b);
        J.fin = Math.max(J.fin, performance.now() + 20000);
      };
      document.addEventListener('click', lancer, true);
      J.nettoie = () => { document.removeEventListener('click', lancer, true); J.balles.forEach((b) => b.el.remove()); };
      J.finMsg = () => `Quel match ! ${J.n} passes 🎾`;
      parle('Clique n\'importe où pour me lancer une balle ! 🎾', 3500);
    } else if (nom === 'papillons') {
      J.fin = now + 40000; J.pap = []; J.score = 0;
      for (let i = 0; i < 6; i++) {
        const b = { x: rnd(30, W() - 60), y: rnd(100, Math.max(120, H() - 200)), ang: rnd(0, 6.28), v: rnd(60, 110), ph: rnd(0, 6), pris: false, el: document.createElement('div') };
        b.el.className = 'chat-objet papi'; b.el.textContent = '🦋';
        b.el.addEventListener('click', () => {
          if (b.pris) return; b.pris = true; J.score++; b.el.classList.add('attrape');
          setTimeout(() => b.el.remove(), 500); effet('+1', 1, 'mot'); parle(`${J.score}/6 🦋`, 900);
        });
        document.body.appendChild(b.el); J.pap.push(b);
      }
      J.nettoie = () => J.pap.forEach((b) => b.el.remove());
      J.finMsg = () => (J.score === 6 ? 'Tous attrapés ! Tu es plus forte que moi 😹🏆' : `Tu en as attrapé ${J.score} sur 6. ${J.score > 3 ? 'Bravo ! 😸' : 'Pas mal ! 😺'}`);
      J.recompense = 1; parle('Attrape les papillons en cliquant dessus ! 🦋', 3500);
    } else if (nom === 'cache') {
      J.fin = now + 70000; el.classList.add('cache');
      parle('Cache-cache ! Trouve-moi… 🙈', 1800);
      const x = rnd(40, W() - 100);
      J.oeil = document.createElement('div'); J.oeil.className = 'chat-objet oeil'; J.oeil.innerHTML = '<span>👀</span>'; J.oeil.style.left = x + 'px';
      document.body.appendChild(J.oeil);
      J.oeil.addEventListener('click', () => {
        C.x = x - LARG() / 2; J.oeil.remove(); el.classList.remove('cache');
        J.fin = 0; J.finMsg = () => { setTimeout(() => anim('a-saut', 900), 100); return 'Tu m\'as trouvé ! 😻 Bravo !'; };
      });
      J.nettoie = () => J.oeil.remove();
      J.finMsg = () => 'Raté, je suis ici ! Bouh ! 😹';
      J.recompense = 0.8;
    }
    majPanneau();
  }

  /* ---------- Révise avec moi : minuteur de 25 minutes ---------- */
  function pomoDemarre() {
    if (C.pomo > Date.now()) { pomoStop(); parle('On arrête la séance ? Pas grave, on reprendra ! 💕', 2600); return; }
    C.pomo = Date.now() + 25 * 60000; store.set('chat:pomo', C.pomo); C.pomoMoitie = false;
    pomoPill(); majPanneau();
    parle('C\'est parti pour 25 minutes de révision ! 📚 Je reste sage à côté de toi 🍅', 3800);
    if (!C.occupe) faire(async () => { el.classList.add('pain'); await wait(2500); });
  }
  function pomoStop() { C.pomo = 0; store.remove ? store.remove('chat:pomo') : store.set('chat:pomo', 0); document.querySelectorAll('.chat-pomo').forEach((e) => e.remove()); majPanneau(); }
  function pomoPill() {
    let pill = document.querySelector('.chat-pomo');
    if (!pill) { pill = document.createElement('button'); pill.className = 'chat-pomo'; pill.title = 'Annuler la séance'; pill.addEventListener('click', pomoDemarre); document.body.appendChild(pill); }
    const reste = Math.max(0, C.pomo - Date.now()), m = Math.floor(reste / 60000), sec = Math.floor((reste % 60000) / 1000);
    pill.textContent = `🍅 ${m}:${String(sec).padStart(2, '0')}`;
  }
  function pomoTick() {
    if (!C.pomo) return;
    if (Date.now() >= C.pomo) {
      pomoStop(); bonheur(1);
      const msg = '🍅 Bravo ! 25 minutes de révision ! Fais une pause de 5 min… et <a href="#/minijeux">viens jouer avec moi</a> 🐾';
      if (C.jeu) stopJeu();
      if (C.occupe) { parle(msg, 12000); return; }
      faire(async () => { el.classList.add('heureux'); parle(msg, 14000); effet('🎉', 3); effet('✨', 3); await anim('a-danse', 2200); await wait(1000); });
      return;
    }
    pomoPill();
    const duree = 25 * 60000, ecoule = duree - (C.pomo - Date.now());
    if (!C.pomoMoitie && ecoule > duree / 2 && !C.occupe) { C.pomoMoitie = true; parle('Déjà la moitié ! Courage, tu es géniale 💪', 3200); }
  }

  /* ---------- Panneau « Jouer avec Silver » ---------- */
  const ACTIONS = [
    ['laser', '🔴', 'Point laser', () => demarreJeu('laser')],
    ['balle', '🎾', 'Balle', () => demarreJeu('balle')],
    ['papillons', '🦋', 'Papillons', () => demarreJeu('papillons')],
    ['cache', '🙈', 'Cache-cache', () => demarreJeu('cache')],
    ['croquettes', '🐟', 'Croquettes', () => nourrir()],
    ['chapeau', '🎩', 'Chapeau', () => lancer('chapeau')],
    ['pomo', '🍅', 'Réviser 25 min', () => pomoDemarre()],
    ['surprise', '🎲', 'Surprise !', () => lancer(hasard(Object.keys(BETISES).filter((n) => !['faim', 'oublie', 'comble'].includes(n))))],
  ];
  function lancer(n) { if (C.jeu) stopJeu(); setTimeout(() => faire(BETISES[n]), C.jeu ? 50 : 0); }
  function nourrir() { if (C.jeu) stopJeu(); setTimeout(() => faire(async () => { parle('Des croquettes ?! Oui oui oui ! 😻', 1400); await wait(800); await BOUTONS.croquettes(); }), 60); }
  let panneauEl = null;
  function panneau(btnChat) {
    const b = document.createElement('button');
    b.className = 'icon-btn'; b.id = 'chat-jouer'; b.title = 'Jouer avec Silver'; b.setAttribute('aria-label', 'Jouer avec Silver'); b.textContent = '🎮';
    if (btnChat && btnChat.parentNode) btnChat.parentNode.insertBefore(b, btnChat); else document.body.appendChild(b);
    panneauEl = document.createElement('div'); panneauEl.className = 'chat-panel'; panneauEl.hidden = true;
    panneauEl.innerHTML = `<div class="cp-titre">🐾 Jouer avec ${NOM}</div><div class="cp-grille">${ACTIONS.map(([k, e, t]) => `<button class="cp-btn" data-k="${k}"><span>${e}</span>${t}</button>`).join('')}</div><div class="cp-bonheur"><span>Bonheur de ${NOM}</span><b class="cp-coeurs"></b></div><div class="cp-aide">Astuces : caresse-le avec la souris, porte-le, ou double-clique sur la page pour l'appeler !</div>`;
    document.body.appendChild(panneauEl);
    b.addEventListener('click', (e) => { e.stopPropagation(); panneauEl.hidden = !panneauEl.hidden; majPanneau(); });
    panneauEl.addEventListener('click', (e) => {
      const k = e.target.closest('.cp-btn'); if (!k) return;
      ACTIONS.find((a) => a[0] === k.dataset.k)[3](); panneauEl.hidden = true;
    });
    document.addEventListener('click', (e) => { if (!panneauEl.hidden && !e.target.closest('.chat-panel, #chat-jouer')) panneauEl.hidden = true; });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { panneauEl.hidden = true; if (C.jeu) stopJeu('Fini de jouer ! 😺'); } });
    const pomo = store.get('chat:pomo', 0);
    if (pomo && pomo > Date.now()) { C.pomo = pomo; pomoPill(); }
    setInterval(pomoTick, 1000);
    majPanneau();
  }
  function majPanneau() {
    if (!panneauEl) return;
    const n = Math.round(bonheurLire());
    panneauEl.querySelector('.cp-coeurs').textContent = '❤️'.repeat(n) + '🤍'.repeat(5 - n);
    panneauEl.querySelectorAll('.cp-btn').forEach((k) => k.classList.toggle('on', k.dataset.k === C.jeu || (k.dataset.k === 'pomo' && C.pomo > Date.now())));
  }

  /* ---------- Silver écoute le site ---------- */
  function ecouteSite() {
    document.addEventListener('dblclick', (e) => { // double-clic sur la page : il vient voir
      if (el.hidden || C.occupe || C.drag || e.target.closest('.chat, .chat-panel, button, a, input, textarea, label, svg, nav, aside, .topbar, .sidebar')) return;
      const x = e.clientX - LARG() / 2;
      faire(async () => { parle('Tu m\'appelles ? 🐾', 1600); await allerA(x, 300); el.classList.add('miaule'); parle('Me voilà ! 😺', 1500); await anim('a-saut', 900); });
    });
    window.addEventListener('hashchange', () => {
      const now = Date.now(); if (now - C.lastRoute < 90000 || Math.random() > 0.35) return; C.lastRoute = now;
      setTimeout(() => {
        if (el.hidden || C.occupe || C.drag || C.jeu) return;
        const h = location.hash;
        const t = h.startsWith('#/monde') ? ['On voyage ? 🌍', 'Quel pays on découvre ? 🗺️'] : h.startsWith('#/minijeux') ? ['Mes jeux préférés ! 😻'] : ['Une nouvelle fiche ! 📖', 'Je lis avec toi 🤓', 'Courage, tu vas y arriver ! 💪'];
        parle(hasard(t), 2400);
      }, 700);
    });
  }

  /* ---------- Réactions au site (quiz, jeux) ---------- */
  window.chatReagit = (type) => {
    if (!el || el.hidden || C.drag) return;
    const now = performance.now();
    if (now - lastReact < 2400) return;
    lastReact = now;
    if (C.occupe) { if (!el.classList.contains('dodo')) parle(type === 'oups' ? hasard(OUPS) : hasard(BRAVO), 1800); return; }
    if (type === 'bravo') bonheur(0.5);
    if (type === 'bravo') faire(async () => { el.classList.add('heureux'); parle(hasard(BRAVO), 1800); await anim('a-saut', 900); });
    if (type === 'oups') faire(async () => { el.classList.add('penche'); parle(hasard(OUPS), 2200); await anim('a-hoche', 900); await wait(800); });
    if (type === 'fete') faire(async () => { el.classList.add('heureux'); parle('🎉 Youpiiii ! On fait la fête ! 🎉', 2200); effet('🎉', 2); effet('✨', 2); await anim('a-danse', 2200); });
  };
  window.chatBetise = (n) => { if (BETISES[n]) { C.derniers = [n]; C.premier = false; faire(BETISES[n]); } }; // pour les tests

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', creer); else creer();
})();

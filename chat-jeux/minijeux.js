/* Mini-jeux du chat sacré de Birmanie : 5 petits jeux juste pour rigoler (route #/minijeux).
   Fichier autonome : il gère sa route tout seul et ajoute son lien dans le menu.
   Scores et état du chat câlin gardés dans le navigateur (localStorage). */
(function () {
'use strict';

/* ======================= Outils ======================= */
const K = 'minijeux:';
const mem = {
  get(k, d) { try { const v = localStorage.getItem(K + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(K + k, JSON.stringify(v)); } catch { /* stockage indisponible */ } },
};
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (t) => t[Math.floor(Math.random() * t.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Un « groupe » range tout ce qu'il faut arrêter (minuteries, boucles, écouteurs) quand on quitte un jeu.
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
      const tick = (t) => { if (!on) return; const dt = Math.min(0.05, (t - last) / 1000); last = t; f(dt); if (on) id = requestAnimationFrame(tick); };
      id = requestAnimationFrame(tick);
      const stop = () => { on = false; cancelAnimationFrame(id); };
      g.add(stop);
      return stop;
    },
  };
  return g;
}
let page = groupe();

function record(id, score) {
  score = Math.round(score);
  const b = mem.get('best:' + id, 0);
  if (score > b) { mem.set('best:' + id, score); return true; }
  return false;
}

/* ======================= Le chat (dessins SVG) ======================= */
const C = { creme: '#f6ead6', clair: '#fdf7ec', point: '#7b5745', pointClair: '#a88570', oreille: '#efb9b5', yeux: '#5fa9e6', trait: '#3a2a24' };
const NS = 'xmlns="http://www.w3.org/2000/svg"';

// Chat assis vu de face. humeur : normal | heureux | fache | surpris | dort
function chatFace(humeur = 'normal') {
  const yeuxNormaux = `<ellipse cx="50" cy="50" rx="5.5" ry="6" fill="${C.yeux}"/><ellipse cx="70" cy="50" rx="5.5" ry="6" fill="${C.yeux}"/>
    <ellipse cx="50" cy="50.5" rx="1.7" ry="4.6" fill="#1d2530"/><ellipse cx="70" cy="50.5" rx="1.7" ry="4.6" fill="#1d2530"/>
    <circle cx="51.8" cy="47.8" r="1.5" fill="#fff"/><circle cx="71.8" cy="47.8" r="1.5" fill="#fff"/>`;
  const yeux = {
    normal: yeuxNormaux,
    heureux: `<path d="M44.5 51.5 q5.5 -6.5 11 0 M64.5 51.5 q5.5 -6.5 11 0" stroke="#1d2530" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    dort: `<path d="M44.5 49.5 q5.5 5 11 0 M64.5 49.5 q5.5 5 11 0" stroke="#1d2530" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    fache: yeuxNormaux + `<path d="M43 42 l13 5 M77 42 l-13 5" stroke="#1d2530" stroke-width="2.6" stroke-linecap="round"/>`,
    surpris: `<circle cx="50" cy="50" r="7.5" fill="${C.yeux}"/><circle cx="70" cy="50" r="7.5" fill="${C.yeux}"/>
      <circle cx="50" cy="50" r="2.6" fill="#1d2530"/><circle cx="70" cy="50" r="2.6" fill="#1d2530"/>
      <circle cx="52" cy="47.5" r="1.7" fill="#fff"/><circle cx="72" cy="47.5" r="1.7" fill="#fff"/>`,
  }[humeur] || yeuxNormaux;
  const bouche = {
    surpris: `<ellipse cx="60" cy="65" rx="3" ry="3.6" fill="#8d3f4a"/>`,
    fache: `<path d="M53 66 q7 -5 14 0" stroke="${C.trait}" stroke-width="1.5" fill="#fff"/><path d="M55 64.6 l1.4 3 l1.4 -3.4 M65 64.6 l-1.4 3 l-1.4 -3.4" fill="#fff"/>`,
  }[humeur] || `<path d="M60 61 v2.6 M60 63.6 q-3 3.2 -6.2 1 M60 63.6 q3 3.2 6.2 1" stroke="${C.trait}" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  const oreilles = humeur === 'fache'
    ? `<path d="M37 40 L18 26 L49 30 Z" fill="${C.point}"/><path d="M83 40 L102 26 L71 30 Z" fill="${C.point}"/>`
    : `<path d="M37 38 L34 13 L56 27 Z" fill="${C.point}"/><path d="M40 34 L38.5 19 L51 27 Z" fill="${C.oreille}"/>
       <path d="M83 38 L86 13 L64 27 Z" fill="${C.point}"/><path d="M80 34 L81.5 19 L69 27 Z" fill="${C.oreille}"/>`;
  return `<svg ${NS} viewBox="0 0 120 124" class="mj-chat-svg" data-humeur="${humeur}">
    <path class="mj-queue" d="M84 106 C114 102 118 70 104 56 C99 51 93 55 97 61 C106 76 101 93 82 96 Z" fill="${C.point}"/>
    <ellipse cx="60" cy="90" rx="31" ry="28" fill="${C.creme}"/>
    <ellipse cx="60" cy="75" rx="23" ry="14" fill="${C.clair}"/>
    <ellipse class="mj-ventre" cx="60" cy="97" rx="15" ry="13" fill="${C.clair}"/>
    <ellipse cx="47" cy="114" rx="9.5" ry="6.5" fill="#fff" stroke="#eadfcf"/><ellipse cx="73" cy="114" rx="9.5" ry="6.5" fill="#fff" stroke="#eadfcf"/>
    ${oreilles}
    <circle cx="60" cy="48" r="25" fill="${C.creme}"/>
    <ellipse cx="60" cy="43" rx="19" ry="12" fill="${C.pointClair}" opacity=".35"/>
    <ellipse cx="60" cy="57" rx="15.5" ry="13.5" fill="${C.point}" opacity=".92"/>
    ${yeux}
    <path d="M56.4 57 h7.2 l-3.6 4 z" fill="#d48b98"/>
    ${bouche}
    <path d="M46 59 L22 55 M46 62 L23 64 M74 59 L98 55 M74 62 L97 64" stroke="#d9cbb8" stroke-width="1" stroke-linecap="round"/>
    ${humeur === 'heureux' ? `<ellipse cx="40" cy="62" rx="4.5" ry="2.6" fill="#f4b6cf" opacity=".8"/><ellipse cx="80" cy="62" rx="4.5" ry="2.6" fill="#f4b6cf" opacity=".8"/>` : ''}
  </svg>`;
}

// Chat de profil, tourné vers la droite. pose : 0 ou 1 (pattes qui courent), 'saut'
function chatProfil(pose = 0, surpris = false) {
  const angles = pose === 'saut' ? [40, 50, -40, -50] : pose === 1 ? [25, -18, 22, -25] : [-25, 18, -22, 25];
  const xs = [42, 52, 88, 98];
  const pattes = xs.map((x, i) => `<g transform="rotate(${angles[i]} ${x} 62)"><rect x="${x - 5}" y="60" width="10" height="22" rx="5" fill="${i % 2 ? C.creme : '#efe0c8'}"/><ellipse cx="${x}" cy="82" rx="6.5" ry="4.5" fill="#fff"/></g>`).join('');
  const oeil = surpris
    ? `<circle cx="114" cy="36" r="5" fill="${C.yeux}"/><circle cx="115" cy="36" r="1.8" fill="#1d2530"/>`
    : `<ellipse cx="114" cy="36" rx="3.6" ry="4.2" fill="${C.yeux}"/><ellipse cx="115" cy="36" rx="1.3" ry="3.4" fill="#1d2530"/>`;
  return `<svg ${NS} viewBox="0 0 140 96">
    <path d="M32 52 C12 46 6 24 16 12 C20 8 26 11 23 16 C16 28 22 42 36 46 Z" fill="${C.point}"/>
    ${pattes}
    <ellipse cx="70" cy="56" rx="40" ry="19" fill="${C.creme}"/>
    <ellipse cx="96" cy="58" rx="13" ry="14" fill="${C.clair}"/>
    <path d="M97 27 L98 6 L111 22 Z" fill="${C.point}"/><path d="M111 22 L121 7 L123 30 Z" fill="${C.point}"/>
    <circle cx="109" cy="38" r="18" fill="${C.creme}"/>
    <ellipse cx="117" cy="44" rx="11" ry="10" fill="${C.point}" opacity=".92"/>
    ${oeil}
    <circle cx="127" cy="43" r="2.2" fill="#d48b98"/>
    <path d="M118 46 L138 42 M118 48 L138 50" stroke="#d9cbb8" stroke-width="1" stroke-linecap="round"/>
  </svg>`;
}

function image(svg) { const im = new Image(); im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); return im; }

/* ======================= Habillage commun ======================= */
const JEUX = [
  { id: 'tomber', nom: 'Tout faire tomber', emoji: '🏺', unite: 'objets cassés', desc: 'Pousse les objets de la table… et fige-toi quand le maître se retourne !', regle: 'Reste appuyé sur « Pousser » (ou sur la barre espace) pour faire glisser l\'objet. Lâche tout dès que le maître se retourne ! Le « ? » prévient juste avant.' },
  { id: 'cartons', nom: 'Cartons mystère', emoji: '📦', unite: 'manches', desc: 'Le chat se cache dans un carton, puis tout se mélange. Où est-il ?', regle: 'Regarde bien dans quel carton le chat se cache, suis-le pendant le mélange, puis clique dessus. 3 erreurs et c\'est fini.' },
  { id: 'laser', nom: 'Le point laser', emoji: '🔴', unite: 'points attrapés', desc: 'Guide le chat jusqu\'au point rouge sans foncer dans les meubles.', regle: 'Le chat suit ta souris (ou ton doigt, ou les flèches du clavier). Attrape le point rouge un maximum de fois en 45 secondes, sans te cogner aux meubles ni au chien.' },
  { id: 'course', nom: 'Le chat qui court', emoji: '🏠', unite: 'points', desc: 'Saute de toit en toit. Attention aux concombres !', regle: 'Clique, touche l\'écran ou appuie sur espace pour sauter (deux fois pour un double saut). Évite les cheminées et les trous. Les poissons donnent des points. Un concombre… tu verras.' },
  { id: 'calin', nom: 'Le chat câlin', emoji: '💕', unite: 'ronrons', desc: 'Caresse, brosse et nourris ton chat… mais pas le ventre !', regle: 'Choisis un outil puis frotte sur le chat avec la souris (bouton appuyé) ou le doigt. Le chat se souvient de tout, même quand tu fermes la page.' },
];

function cadre(app, jeu, hud) {
  app.innerHTML = `<div class="mj-root">
    <div class="breadcrumb"><a href="#/">Accueil</a> › <a href="#/minijeux">Mini-jeux du chat</a> › ${jeu.nom}</div>
    <h1>${jeu.emoji} ${jeu.nom}</h1>
    <details class="mj-regle ar-regle"><summary>Comment jouer ?</summary><p class="muted">${jeu.regle}</p></details>
    <div class="mj-hud">${hud}<span class="mj-best">🏆 Record : <b>${mem.get('best:' + jeu.id, 0)}</b> ${jeu.unite}</span></div>
    <div class="mj-scene mj-scene-${jeu.id}"></div>
  </div>`;
  return app.querySelector('.mj-scene');
}
const majRecord = (app, jeu) => { const b = app.querySelector('.mj-best b'); if (b) b.textContent = mem.get('best:' + jeu.id, 0); };

function panneau(scene, { titre, texte = '', bouton = 'Jouer', humeur = 'normal', action }) {
  scene.querySelector('.mj-panneau')?.remove();
  const d = document.createElement('div');
  d.className = 'mj-panneau';
  d.innerHTML = `<div class="mj-panneau-in"><div class="mj-panneau-chat">${chatFace(humeur)}</div><h2>${titre}</h2>${texte ? `<p>${texte}</p>` : ''}<button class="btn mj-go" type="button">${bouton}</button></div>`;
  scene.appendChild(d);
  const go = () => { d.remove(); action(); auCentre(scene); };
  d.querySelector('.mj-go').addEventListener('click', (e) => { e.stopPropagation(); go(); });
  d.addEventListener('pointerdown', (e) => e.stopPropagation());
  d.querySelector('.mj-go').focus({ preventScroll: true });
}
// Sur téléphone, le plateau doit être entièrement visible pendant la partie
function auCentre(scene) {
  if (!matchMedia('(max-width: 760px)').matches) return;
  const r = scene.getBoundingClientRect(), haut = 64;
  if (r.top < haut || r.bottom > innerHeight - 8) window.scrollBy({ top: r.top - haut - Math.max(0, (innerHeight - haut - r.height) / 2), behavior: 'smooth' });
}

// Petit texte qui s'envole (« Oups ! », « +10 »…)
function bulle(scene, x, y, txt, cls = '') {
  const s = document.createElement('span');
  s.className = 'mj-bulle ' + cls;
  s.textContent = txt;
  s.style.left = x + 'px';
  s.style.top = y + 'px';
  scene.appendChild(s);
  setTimeout(() => s.remove(), 1300);
}

function finDePartie(scene, app, jeu, score, phrase, rejouer) {
  const nouveau = record(jeu.id, score);
  majRecord(app, jeu);
  panneau(scene, {
    titre: nouveau ? `🏆 Nouveau record : ${Math.round(score)} !` : `${Math.round(score)} ${jeu.unite}`,
    texte: phrase + (nouveau ? '' : ` Record : ${mem.get('best:' + jeu.id, 0)}.`),
    bouton: 'Rejouer', humeur: nouveau ? 'heureux' : 'surpris', action: rejouer,
  });
}

/* ======================= Page d'accueil des jeux ======================= */
function accueil(app) {
  let h = `<div class="mj-root"><div class="breadcrumb"><a href="#/">Accueil</a> › Mini-jeux du chat</div>
    <div class="mj-hero"><button class="mj-hero-chat" type="button" aria-label="Le chat">${chatFace('heureux')}</button>
    <div><h1>Mini-jeux du chat</h1><p class="muted">Un chat sacré de Birmanie, cinq jeux, zéro révision. Juste pour rigoler !</p></div></div>
    <div class="mj-grille">`;
  for (const j of JEUX) {
    const b = mem.get('best:' + j.id, 0);
    h += `<a class="card mj-carte" href="#/minijeux/${j.id}"><div class="emoji">${j.emoji}</div><h3>${j.nom}</h3><p>${j.desc}</p>
      <div class="meta">${b ? `🏆 ${b} ${j.unite}` : '✨ Pas encore joué'}</div></a>`;
  }
  app.innerHTML = h + '</div></div>';
  const chat = app.querySelector('.mj-hero-chat');
  chat.addEventListener('click', () => {
    chat.classList.remove('saute'); void chat.offsetWidth; chat.classList.add('saute');
    bulle(app.querySelector('.mj-hero'), 70, -6, pick(['Miaou !', 'Mrrr ?', 'Prrrt !', 'Joue avec moi !', 'Miaaaou']));
  });
}

/* ======================= 1. Tout faire tomber ======================= */
const OBJETS = [
  ['🏺', 'le vase de mamie'], ['☕', 'la tasse'], ['🪴', 'la plante'], ['📱', 'le téléphone'], ['🎂', 'le gâteau'],
  ['🥚', 'l\'œuf'], ['🧸', 'le nounours'], ['🍩', 'le donut'], ['🎮', 'la manette'], ['🧁', 'le cupcake'],
  ['🕯️', 'la bougie'], ['🍉', 'la pastèque'], ['🔑', 'les clés'], ['👓', 'les lunettes'], ['🍝', 'les spaghettis'],
];
const PHRASES_MAITRE = ['Le chat !!', 'Qu\'est-ce que tu fabriques ?', 'Je t\'ai vu !', 'Pas touche !', 'NON !', 'Hé ho !', 'Je te surveille…'];

function maitreSVG() {
  const corps = '<path d="M14 140 Q14 92 50 90 Q86 92 86 140 Z" fill="#a9d2f3"/>';
  return `<svg ${NS} viewBox="0 0 100 140">
    <g class="tt-dos">${corps}<circle cx="50" cy="56" r="28" fill="#8a5a3c"/><path d="M28 66 Q50 96 72 66 Q68 88 50 90 Q32 88 28 66Z" fill="#8a5a3c"/>
      <text x="80" y="122" font-size="22">📱</text></g>
    <g class="tt-face">${corps}<circle cx="50" cy="58" r="26" fill="#f6d2b8"/>
      <path d="M23 56 Q24 26 50 27 Q78 26 77 56 Q70 38 50 40 Q32 40 23 56Z" fill="#8a5a3c"/>
      <circle cx="41" cy="58" r="3.6" fill="#3a2a24"/><circle cx="59" cy="58" r="3.6" fill="#3a2a24"/>
      <path class="tt-sourcils" d="M34 48 l11 4 M66 48 l-11 4" stroke="#3a2a24" stroke-width="2.6" stroke-linecap="round"/>
      <ellipse cx="50" cy="73" rx="5" ry="4.5" fill="#c9645f"/></g>
  </svg>`;
}

function jeuTomber(app, jeu) {
  const scene = cadre(app, jeu, '<span>💥 <b class="tt-score">0</b></span><span class="tt-vies"></span>');
  scene.innerHTML = `<div class="tt-maitre" data-etat="dos">${maitreSVG()}<div class="tt-question">?</div><div class="tt-dit"></div></div>
    <div class="tt-table"><div class="tt-plateau"></div><div class="tt-pied g"></div><div class="tt-pied d"></div></div>
    <div class="tt-objet"></div><div class="tt-chat">${chatFace()}</div>
    <button class="btn tt-pousser" type="button">🐾 Pousser</button>`;
  const $ = (s) => scene.querySelector(s);
  const maitre = $('.tt-maitre'), objet = $('.tt-objet'), chat = $('.tt-chat'), bouton = $('.tt-pousser');
  let partie = groupe();
  page.add(() => partie.stop());
  let appui = false;

  const appuyer = (on) => { appui = on; bouton.classList.toggle('actif', on); };
  page.ecoute(bouton, 'pointerdown', (e) => { e.preventDefault(); bouton.setPointerCapture?.(e.pointerId); appuyer(true); });
  page.ecoute(bouton, 'pointerup', () => appuyer(false));
  page.ecoute(bouton, 'pointercancel', () => appuyer(false));
  page.ecoute(bouton, 'contextmenu', (e) => e.preventDefault());
  page.ecoute(document, 'keydown', (e) => { if (e.code === 'Space' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); appuyer(true); } });
  page.ecoute(document, 'keyup', (e) => { if (e.code === 'Space') appuyer(false); });

  function partieTomber() {
    partie.stop(); partie = groupe();
    let score = 0, vies = 3, x = 0, poids = 1, etat = 'dos', pause = false, fin = false;
    const majHud = () => { app.querySelector('.tt-score').textContent = score; app.querySelector('.tt-vies').textContent = '❤️'.repeat(vies) + '🤍'.repeat(3 - vies); };
    const place = () => { const l = 50 + 33 * x; objet.style.left = l + '%'; chat.style.left = (l - 9) + '%'; };
    function nouvelObjet() {
      const [e, nom] = pick(OBJETS);
      objet.className = 'tt-objet'; objet.textContent = e; objet.dataset.nom = nom;
      x = 0; poids = rand(0.9, 1.6); place(); pause = false;
    }
    function changeEtat(e) {
      etat = e; maitre.dataset.etat = e;
      if (fin) return;
      const vite = Math.max(0.45, 1 - score * 0.045);
      if (e === 'dos') partie.tard(() => changeEtat('alerte'), rand(1300, 3600) * vite);
      if (e === 'alerte') partie.tard(() => changeEtat('face'), Math.max(260, 720 - score * 28));
      if (e === 'face') partie.tard(() => { maitre.classList.remove('colere'); changeEtat('dos'); }, rand(1000, 2200));
    }
    function pris() {
      vies--; majHud(); pause = true;
      maitre.classList.add('colere');
      maitre.querySelector('.tt-dit').textContent = pick(PHRASES_MAITRE);
      chat.innerHTML = chatFace('surpris'); chat.classList.add('pris');
      partie.tard(() => { chat.innerHTML = chatFace(); chat.classList.remove('pris'); maitre.querySelector('.tt-dit').textContent = ''; }, 1300);
      x = Math.max(0, x - 0.35); place();
      if (vies <= 0) {
        fin = true;
        partie.tard(() => finDePartie(scene, app, jeu, score, score ? `Tu as cassé ${score} objet${score > 1 ? 's' : ''} avant d'être privé de croquettes.` : 'Le maître a l\'œil…', partieTomber), 900);
      } else partie.tard(() => { pause = false; }, 1300);
    }
    function chute() {
      pause = true; score++; majHud();
      objet.classList.add('tombe');
      const r = scene.getBoundingClientRect(), o = objet.getBoundingClientRect();
      partie.tard(() => {
        bulle(scene, o.left - r.left + 40, r.height - 90, pick(['Oups !', 'Bim !', 'Crac !', 'Ça glisse…', 'Patatras !', 'Bien fait !', 'Splotch !']));
        bulle(scene, o.left - r.left + 20, r.height - 60, '💥', 'gros');
      }, 420);
      partie.tard(nouvelObjet, 900);
    }
    nouvelObjet(); majHud(); maitre.classList.remove('colere'); changeEtat('dos');
    partie.boucle((dt) => {
      if (fin) return;
      const pousse = appui && !pause;
      chat.classList.toggle('pousse', pousse);
      if (!pousse) return;
      if (etat === 'face') return pris();
      x += dt / poids;
      place();
      if (x >= 1) chute();
    });
  }
  panneau(scene, { titre: 'Tout faire tomber', texte: 'Reste appuyé pour pousser. Lâche dès que le maître se retourne !', action: partieTomber });
}

/* ======================= 2. Cartons mystère ======================= */
const SURPRISES = ['🧦 une chaussette', '🕷️ une araignée', '🥒 un concombre !', '🐭 une souris', '🍕 une vieille pizza', '🦆 un canard en plastique', '🩲 un slip', '🐟 une arête', '🥦 un brocoli'];

function jeuCartons(app, jeu) {
  const scene = cadre(app, jeu, '<span>🎯 Manche <b class="cm-manche">1</b></span><span class="cm-vies"></span>');
  scene.innerHTML = '<div class="cm-msg"></div><div class="cm-sol"></div>';
  const msg = scene.querySelector('.cm-msg');
  let partie = groupe();
  page.add(() => partie.stop());

  function partieCartons() {
    partie.stop(); partie = groupe();
    let manche = 1, vies = 3;
    const majHud = () => { app.querySelector('.cm-manche').textContent = manche; app.querySelector('.cm-vies').textContent = '❤️'.repeat(vies) + '🤍'.repeat(3 - vies); };
    majHud();
    lancer();

    async function lancer() {
      scene.querySelectorAll('.cm-carton').forEach((c) => c.remove());
      const n = manche <= 3 ? 3 : manche <= 6 ? 4 : 5;
      const echanges = 3 + manche;
      const duree = Math.max(170, 560 - manche * 32);
      const cartons = [];
      for (let i = 0; i < n; i++) {
        const c = document.createElement('button');
        c.type = 'button'; c.className = 'cm-carton'; c.disabled = true;
        c.innerHTML = '<div class="cm-dedans"></div><div class="cm-boite"><span>FRAGILE</span></div>';
        c.dataset.slot = i;
        c.style.left = ((i + 0.5) / n * 100) + '%';
        scene.appendChild(c); cartons.push(c);
      }
      const cache = pick(cartons);
      const attendre = (ms) => new Promise((r) => partie.tard(r, ms));
      msg.textContent = 'Je me cache ici…';
      cache.querySelector('.cm-dedans').innerHTML = chatFace('heureux');
      cache.classList.add('ouvert');
      await attendre(1300);
      cache.classList.remove('ouvert');
      cache.classList.add('secoue');
      msg.textContent = 'Mélange !';
      await attendre(500);
      cache.classList.remove('secoue');
      scene.style.setProperty('--cm-duree', duree + 'ms');
      for (let k = 0; k < echanges; k++) {
        const a = Math.floor(Math.random() * n);
        let b = Math.floor(Math.random() * (n - 1)); if (b >= a) b++;
        const ca = cartons.find((c) => +c.dataset.slot === a), cb = cartons.find((c) => +c.dataset.slot === b);
        ca.dataset.slot = b; cb.dataset.slot = a;
        ca.style.left = ((b + 0.5) / n * 100) + '%'; cb.style.left = ((a + 0.5) / n * 100) + '%';
        ca.classList.add('haut'); cb.classList.add('bas');
        await attendre(duree + 40);
        ca.classList.remove('haut'); cb.classList.remove('bas');
      }
      msg.textContent = 'Où suis-je ? 🐾';
      cartons.forEach((c) => {
        c.disabled = false;
        c.onclick = () => choisir(c);
      });
      function choisir(c) {
        cartons.forEach((x) => { x.disabled = true; x.onclick = null; });
        if (c === cache) {
          c.querySelector('.cm-dedans').innerHTML = chatFace('heureux');
          c.classList.add('ouvert', 'gagne');
          msg.textContent = pick(['Trouvé ! 🎉', 'Bravo, tu as l\'œil !', 'Coucou ! 😺', 'Mrrrr, bien joué !']);
          manche++;
          partie.tard(() => { majHud(); lancer(); }, 1300);
        } else {
          vies--; majHud();
          const s = pick(SURPRISES);
          c.querySelector('.cm-dedans').textContent = s.split(' ')[0];
          c.classList.add('ouvert', 'rate');
          msg.textContent = 'Raté ! Il y avait ' + s.replace(/^\S+ /, '') + '…';
          partie.tard(() => { cache.querySelector('.cm-dedans').innerHTML = chatFace('normal'); cache.classList.add('ouvert'); msg.textContent = 'J\'étais là ! 😹'; }, 700);
          if (vies <= 0) partie.tard(() => finDePartie(scene, app, jeu, manche - 1, `Tu as trouvé le chat ${manche - 1} fois.`, partieCartons), 1900);
          else partie.tard(lancer, 2100);
        }
      }
    }
  }
  panneau(scene, { titre: 'Cartons mystère', texte: 'Suis le chat des yeux !', action: partieCartons });
}

/* ======================= Canvas commun ======================= */
function canvasJeu(scene, w, h) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h; cv.className = 'mj-canvas';
  scene.appendChild(cv);
  const ctx = cv.getContext('2d');
  const pos = (e) => { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * w, y: (e.clientY - r.top) / r.height * h }; };
  return { cv, ctx, pos };
}
function bulleCanvas(scene, cv, x, y, txt, cls) {
  const r = cv.getBoundingClientRect(), s = scene.getBoundingClientRect();
  bulle(scene, r.left - s.left + x / cv.width * r.width, r.top - s.top + y / cv.height * r.height, txt, cls);
}
function arrondi(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); }

/* ======================= 3. Le point laser ======================= */
const MEUBLES = [
  { x: 70, y: 50, w: 190, h: 72, c: '#f4b6cf', e: '🛋️', nom: 'le canapé' },
  { x: 560, y: 60, w: 70, h: 70, c: '#c8e6c0', e: '🪴', nom: 'la plante' },
  { x: 330, y: 200, w: 120, h: 70, c: '#f3dc86', e: '☕', nom: 'la table basse' },
  { x: 120, y: 300, w: 90, h: 70, c: '#ffd9b3', e: '🐕', nom: 'le chien', chien: true },
  { x: 600, y: 300, w: 70, h: 70, c: '#d9c8f0', e: '💡', nom: 'la lampe' },
];
function jeuLaser(app, jeu) {
  const scene = cadre(app, jeu, '<span>🔴 <b class="lz-score">0</b></span><span>⏱️ <b class="lz-temps">45</b> s</span><span class="lz-vies"></span>');
  const W = 800, H = 450;
  const { cv, ctx, pos } = canvasJeu(scene, W, H);
  const imgs = [image(chatProfil(0)), image(chatProfil(1)), image(chatProfil('saut', true))];
  let partie = groupe();
  page.add(() => partie.stop());
  let cible = null;
  const fleches = {};
  const viseur = (e) => pos(e.pointerType === 'touch' ? { clientX: e.clientX, clientY: e.clientY - 48 } : e); // au doigt : un peu au-dessus, pour voir le chat
  page.ecoute(cv, 'pointermove', (e) => { cible = viseur(e); });
  page.ecoute(cv, 'pointerdown', (e) => { cible = viseur(e); });
  page.ecoute(document, 'keydown', (e) => { if (e.key.startsWith('Arrow')) { fleches[e.key] = true; e.preventDefault(); } });
  page.ecoute(document, 'keyup', (e) => { delete fleches[e.key]; });

  const touche = (x, y, r, m, marge = 0) => {
    const px = clamp(x, m.x - marge, m.x + m.w + marge), py = clamp(y, m.y - marge, m.y + m.h + marge);
    return (x - px) ** 2 + (y - py) ** 2 < r * r;
  };
  const libre = (x, y, r) => !MEUBLES.some((m) => touche(x, y, r, m, 6));

  function dessin(chat, point, t) {
    ctx.fillStyle = '#fbf3ea'; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = '#f1e2d3'; ctx.lineWidth = 2;
    for (let y = 30; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    ctx.fillStyle = '#e3f1fc'; arrondi(ctx, 300, 330, 220, 100, 50); ctx.fill(); // tapis
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (const m of MEUBLES) {
      ctx.fillStyle = m.c; arrondi(ctx, m.x, m.y, m.w, m.h, 14); ctx.fill();
      ctx.font = '40px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
      ctx.fillText(m.chien && Math.sin(t * 2) > 0.6 ? '💤' : m.e, m.x + m.w / 2, m.y + m.h / 2 + 2);
    }
    // point rouge
    const g = ctx.createRadialGradient(point.x, point.y, 1, point.x, point.y, 16);
    g.addColorStop(0, 'rgba(255,40,60,1)'); g.addColorStop(0.35, 'rgba(255,60,80,.8)'); g.addColorStop(1, 'rgba(255,80,100,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(point.x, point.y, 16, 0, 7); ctx.fill();
    // chat
    const im = chat.etourdi > 0 ? imgs[2] : imgs[Math.floor(t * 8) % 2 && chat.bouge ? 1 : 0];
    ctx.save(); ctx.translate(chat.x, chat.y); if (chat.dir < 0) ctx.scale(-1, 1);
    ctx.drawImage(im, -35, -28, 70, 48); ctx.restore();
    if (chat.etourdi > 0) { ctx.font = '18px sans-serif'; for (let i = 0; i < 3; i++) { const a = t * 6 + i * 2.1; ctx.fillText('⭐', chat.x + Math.cos(a) * 26, chat.y - 30 + Math.sin(a) * 8); } }
  }

  function partieLaser() {
    partie.stop(); partie = groupe();
    let score = 0, vies = 3, temps = 45, fin = false, t = 0;
    const chat = { x: 420, y: 140, dir: 1, etourdi: 0, bouge: false };
    const point = { x: 700, y: 220, vx: 120, vy: 80, change: 1 };
    cible = { x: chat.x, y: chat.y };
    const majHud = () => {
      app.querySelector('.lz-score').textContent = score; app.querySelector('.lz-temps').textContent = Math.ceil(temps);
      app.querySelector('.lz-vies').textContent = '❤️'.repeat(vies) + '🤍'.repeat(3 - vies);
    };
    majHud();
    const finir = (phrase) => { fin = true; finDePartie(scene, app, jeu, score, phrase, partieLaser); };
    function deplacePoint() {
      for (let i = 0; i < 50; i++) { const x = rand(30, W - 30), y = rand(30, H - 30); if (libre(x, y, 14) && Math.hypot(x - chat.x, y - chat.y) > 200) { point.x = x; point.y = y; break; } }
      const v = 120 + score * 14, a = rand(0, Math.PI * 2);
      point.vx = Math.cos(a) * v; point.vy = Math.sin(a) * v;
    }
    partie.boucle((dt) => {
      if (fin) return;
      t += dt; temps -= dt;
      if (temps <= 0) { temps = 0; majHud(); return finir(`Le chat a attrapé le point ${score} fois. Il est épuisé… et toujours pas rassasié.`); }
      // le point zigzague et rebondit
      point.change -= dt;
      if (point.change <= 0) { const v = Math.hypot(point.vx, point.vy), a = Math.atan2(point.vy, point.vx) + rand(-1.6, 1.6); point.vx = Math.cos(a) * v; point.vy = Math.sin(a) * v; point.change = rand(0.4, 1.4); }
      const nx = point.x + point.vx * dt, ny = point.y + point.vy * dt;
      if (nx < 14 || nx > W - 14 || !libre(nx, point.y, 10)) point.vx *= -1; else point.x = nx;
      if (ny < 14 || ny > H - 14 || !libre(point.x, ny, 10)) point.vy *= -1; else point.y = ny;
      // le chat suit la souris ou les flèches
      if (fleches.ArrowLeft) cible.x = chat.x - 60; if (fleches.ArrowRight) cible.x = chat.x + 60;
      if (fleches.ArrowUp) cible.y = chat.y - 60; if (fleches.ArrowDown) cible.y = chat.y + 60;
      chat.bouge = false;
      if (chat.etourdi > 0) chat.etourdi -= dt;
      else if (cible) {
        const dx = cible.x - chat.x, dy = cible.y - chat.y, d = Math.hypot(dx, dy), v = 300;
        if (d > 4) {
          const pas = Math.min(d, v * dt);
          chat.x = clamp(chat.x + dx / d * pas, 26, W - 26); chat.y = clamp(chat.y + dy / d * pas, 22, H - 22);
          chat.bouge = true; if (Math.abs(dx) > 2) chat.dir = Math.sign(dx);
          const m = MEUBLES.find((mm) => touche(chat.x, chat.y, 22, mm));
          if (m) {
            vies--; majHud(); chat.etourdi = 0.9;
            chat.x -= dx / d * 40; chat.y -= dy / d * 40; cible = { x: chat.x, y: chat.y };
            bulleCanvas(scene, cv, chat.x, chat.y - 40, m.chien ? 'WOUF ! 🐕' : pick(['BONK !', 'Aïe !', 'Paf !']) + ' (' + m.nom + ')', 'ko');
            if (vies <= 0) return finir(`Trois bosses, ça suffit ! Score : ${score} points attrapés.`);
          }
        }
      }
      if (Math.hypot(point.x - chat.x, point.y - chat.y) < 30) {
        score++; majHud();
        bulleCanvas(scene, cv, point.x, point.y - 20, pick(['Attrapé !', 'Hop !', 'Gnap !', 'À moi !', '+1']));
        deplacePoint();
      }
      dessin(chat, point, t);
    });
    partie.tous(() => { if (!fin) majHud(); }, 250);
  }
  dessin({ x: 420, y: 140, dir: 1, etourdi: 0 }, { x: 700, y: 220 }, 0);
  panneau(scene, { titre: 'Le point laser', texte: 'Le chat suit ta souris. Attrape le point, évite les meubles !', action: partieLaser });
}

/* ======================= 4. Le chat qui court ======================= */
function jeuCourse(app, jeu) {
  const scene = cadre(app, jeu, '<span>⭐ <b class="cr-score">0</b> points</span><span>🐟 <b class="cr-poissons">0</b></span>');
  const W = 800, H = 360, CX = 150, GRAV = 1900, SAUT = -680;
  const { cv, ctx } = canvasJeu(scene, W, H);
  const imgs = [image(chatProfil(0)), image(chatProfil(1)), image(chatProfil('saut')), image(chatProfil('saut', true))];
  let partie = groupe();
  page.add(() => partie.stop());
  let sauter = () => {};
  const action = (e) => { if (e.target.closest?.('.mj-panneau')) return; e.preventDefault?.(); sauter(); };
  page.ecoute(cv, 'pointerdown', action);
  page.ecoute(document, 'keydown', (e) => { if ((e.code === 'Space' || e.key === 'ArrowUp') && !/INPUT|TEXTAREA|BUTTON/.test(document.activeElement.tagName)) { e.preventDefault(); sauter(); } });

  function decor(t, dist) {
    const ciel = ctx.createLinearGradient(0, 0, 0, H);
    ciel.addColorStop(0, '#e3f1fc'); ciel.addColorStop(1, '#fde4ee');
    ctx.fillStyle = ciel; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#fff6d6'; ctx.beginPath(); ctx.arc(680, 70, 34, 0, 7); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.9)';
    for (let i = 0; i < 4; i++) { const x = ((i * 260 - dist * 0.1) % 1040 + 1040) % 1040 - 120; ctx.beginPath(); ctx.ellipse(x, 50 + i * 18, 50, 16, 0, 0, 7); ctx.ellipse(x + 30, 42 + i * 18, 34, 14, 0, 0, 7); ctx.fill(); }
    ctx.fillStyle = '#d6e8f7';
    for (let i = 0; i < 9; i++) { const x = ((i * 120 - dist * 0.3) % 1080 + 1080) % 1080 - 120; const h = 90 + (i * 37) % 70; ctx.fillRect(x, H - h - 40, 90, h + 40); }
  }

  function partieCourse() {
    partie.stop(); partie = groupe();
    let dist = 0, poissons = 0, v = 270, fin = false, t = 0;
    const chat = { y: 200, vy: 0, sol: true, sauts: 0, panique: 0 };
    const toits = [{ x: -50, w: 760, y: 240, objets: [] }];
    const majHud = () => { const s = app.querySelector('.cr-score'), p = app.querySelector('.cr-poissons'); if (s) s.textContent = score(); if (p) p.textContent = poissons; };
    const score = () => Math.floor(dist / 40) + poissons * 10;
    function nouveauToit() {
      const d = toits[toits.length - 1];
      const ecart = rand(70, Math.min(190, 90 + v * 0.22));
      const y = clamp(d.y + rand(-55, 55), 190, 290);
      const w = rand(240, 520);
      const t2 = { x: d.x + d.w + ecart, w, y, objets: [] };
      const places = [];
      const libreIci = (x) => places.every((p) => Math.abs(p - x) > 110);
      if (Math.random() < 0.55) { const x = rand(110, w - 90); places.push(x); t2.objets.push({ type: 'cheminee', x, w: 30, h: rand(36, 54) }); }
      if (Math.random() < 0.4) { const x = rand(60, w - 60); if (libreIci(x)) { places.push(x); t2.objets.push({ type: 'concombre', x, w: 30, h: 18 }); } }
      for (let i = 0; i < 3; i++) if (Math.random() < 0.45) { const x = rand(40, w - 40); t2.objets.push({ type: 'poisson', x, y: rand(60, 120), w: 26, h: 20 }); }
      toits.push(t2);
    }
    while (toits.length < 6) nouveauToit();
    majHud();
    sauter = () => {
      if (fin) return;
      if (chat.sol) { chat.vy = SAUT; chat.sol = false; chat.sauts = 1; }
      else if (chat.sauts < 2) { chat.vy = SAUT * 0.85; chat.sauts = 2; }
    };
    const finir = (phrase) => { fin = true; sauter = () => {}; finDePartie(scene, app, jeu, score(), phrase, partieCourse); };
    partie.boucle((dt) => {
      if (fin) return;
      t += dt; v = Math.min(560, v + dt * 7);
      const dx = v * dt; dist += dx;
      for (const r of toits) r.x -= dx;
      while (toits[0].x + toits[0].w < -60) toits.shift();
      while (toits.length < 6) nouveauToit();
      // physique du chat
      const avant = chat.y;
      chat.vy += GRAV * dt; chat.y += chat.vy * dt;
      chat.sol = false;
      const sous = toits.find((r) => CX + 18 > r.x && CX - 18 < r.x + r.w);
      if (sous && chat.vy >= 0 && avant <= sous.y + 2 && chat.y >= sous.y) { chat.y = sous.y; chat.vy = 0; chat.sol = true; chat.sauts = 0; }
      if (chat.panique > 0) chat.panique -= dt;
      // objets
      for (const r of toits) for (const o of r.objets) {
        if (o.pris) continue;
        const ox = r.x + o.x;
        if (o.type === 'cheminee') {
          if (CX + 22 > ox - o.w / 2 && CX - 22 < ox + o.w / 2 && chat.y > r.y - o.h + 6) {
            return finir(pick(['BONK ! Le chat a embrassé une cheminée.', 'Aïe, la cheminée ! Le chat repart bouder sur son coussin.']) + ` ${score()} points.`);
          }
        } else if (o.type === 'concombre') {
          if (Math.abs(CX - ox) < 30 && chat.y > r.y - 26) {
            o.pris = true; chat.vy = -1180; chat.sol = false; chat.sauts = 2; chat.panique = 1.1;
            bulleCanvas(scene, cv, CX + 40, chat.y - 90, 'AAAAH ! UN CONCOMBRE !', 'ko');
          }
        } else if (Math.abs(CX - ox) < 32 && Math.abs((chat.y - 30) - (r.y - o.y)) < 34) {
          o.pris = true; poissons++;
          bulleCanvas(scene, cv, ox, r.y - o.y - 20, '+10');
        }
      }
      if (chat.y > H + 80) return finir(pick(['Plouf, dans la gouttière !', 'Le chat est tombé… sur ses pattes, heureusement.', 'Trop loin ! Le chat atterrit dans une poubelle.']) + ` ${score()} points.`);
      majHud();
      // dessin
      decor(t, dist);
      for (const r of toits) {
        ctx.fillStyle = '#fdeef4'; ctx.fillRect(r.x, r.y, r.w, H - r.y);
        ctx.fillStyle = '#e8f3fd';
        for (let wx = r.x + 30; wx < r.x + r.w - 40; wx += 70) for (let wy = r.y + 34; wy < H; wy += 56) ctx.fillRect(wx, wy, 28, 32);
        ctx.fillStyle = '#e7a6ba'; ctx.fillRect(r.x - 6, r.y - 4, r.w + 12, 14);
        for (const o of r.objets) {
          if (o.pris) continue;
          const ox = r.x + o.x;
          if (o.type === 'cheminee') { ctx.fillStyle = '#c99387'; ctx.fillRect(ox - o.w / 2, r.y - o.h, o.w, o.h); ctx.fillStyle = '#b07c70'; ctx.fillRect(ox - o.w / 2 - 4, r.y - o.h - 6, o.w + 8, 8); }
          else {
            ctx.font = (o.type === 'poisson' ? 26 : 30) + 'px "Segoe UI Emoji", "Apple Color Emoji", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(o.type === 'poisson' ? '🐟' : '🥒', ox, o.type === 'poisson' ? r.y - o.y + Math.sin(t * 4 + o.x) * 4 : r.y - 12);
          }
        }
      }
      const im = chat.panique > 0 ? imgs[3] : !chat.sol ? imgs[2] : imgs[Math.floor(t * 10) % 2];
      ctx.drawImage(im, CX - 42, chat.y - 58, 84, 58);
      if (chat.panique > 0) { ctx.font = 'bold 26px sans-serif'; ctx.fillStyle = '#e0527a'; ctx.fillText('!!', CX + 30, chat.y - 66); }
    });
  }
  decor(0, 0);
  panneau(scene, { titre: 'Le chat qui court', texte: 'Clique ou appuie sur espace pour sauter (deux fois = double saut).', action: partieCourse });
}

/* ======================= 5. Le chat câlin ======================= */
function jeuCalin(app, jeu) {
  const etat = Object.assign({ nom: 'Minou', bonheur: 60, ventre: 60, beaute: 60, ronrons: 0, quand: Date.now() }, mem.get('calin', {}));
  const minutes = (Date.now() - etat.quand) / 60000; // les jauges baissent doucement avec le temps
  etat.bonheur = clamp(etat.bonheur - minutes * 1.5, 0, 100);
  etat.ventre = clamp(etat.ventre - minutes * 2, 0, 100);
  etat.beaute = clamp(etat.beaute - minutes * 1, 0, 100);
  const sauve = () => { etat.quand = Date.now(); mem.set('calin', etat); record('calin', etat.ronrons); };

  const scene = cadre(app, jeu, `<span>😺 <input class="cl-nom" maxlength="16" value="" aria-label="Nom du chat"></span><span>💗 <b class="cl-ronrons">0</b> ronrons</span>`);
  app.querySelector('.cl-nom').value = etat.nom;
  scene.innerHTML = `
    <div class="cl-jauges">
      <div class="cl-jauge" data-j="bonheur"><span>💕 Bonheur</span><i><b></b></i></div>
      <div class="cl-jauge" data-j="ventre"><span>🍗 Ventre</span><i><b></b></i></div>
      <div class="cl-jauge" data-j="beaute"><span>✨ Beauté</span><i><b></b></i></div>
    </div>
    <div class="cl-zone"><div class="cl-chat">${chatFace()}</div><div class="cl-gamelle"></div><div class="cl-pelote">🧶</div><div class="cl-griffes"></div></div>
    <div class="cl-outils">
      <button class="btn ghost actif" type="button" data-o="main">✋ Caresser</button>
      <button class="btn ghost" type="button" data-o="brosse">🪮 Brosser</button>
      <button class="btn ghost" type="button" data-o="croquettes">🍗 Croquettes</button>
      <button class="btn ghost" type="button" data-o="pelote">🧶 Pelote</button>
    </div>`;
  const $ = (s) => scene.querySelector(s);
  const zone = $('.cl-zone'), chatEl = $('.cl-chat');
  let outil = 'main', humeur = 'normal', humeurJusque = 0, appui = false, ventreDepuis = 0, compteur = 0, calme = Date.now();

  const setHumeur = (h, ms = 1200) => { humeurJusque = Date.now() + ms; if (h !== humeur) { humeur = h; chatEl.innerHTML = chatFace(h); } };
  const majJauges = () => {
    for (const j of ['bonheur', 'ventre', 'beaute']) scene.querySelector(`[data-j="${j}"] b`).style.width = etat[j] + '%';
    app.querySelector('.cl-ronrons').textContent = etat.ronrons;
  };
  majJauges();
  const local = (e) => { const r = zone.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  // Où est-on sur le chat ? (repère du dessin : 120 × 124)
  const surChat = (e) => {
    const r = chatEl.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * 120, y = (e.clientY - r.top) / r.height * 124;
    if (x < 26 || x > 94 || y < 18 || y > 120) return null;
    if (((x - 60) / 16) ** 2 + ((y - 97) / 14) ** 2 < 1) return 'ventre';
    return 'ok';
  };

  page.ecoute(app.querySelector('.cl-nom'), 'input', (e) => { etat.nom = e.target.value.trim() || 'Minou'; sauve(); });
  scene.querySelectorAll('.cl-outils button').forEach((b) => page.ecoute(b, 'click', () => {
    calme = Date.now();
    const o = b.dataset.o;
    if (o === 'croquettes') return manger();
    if (o === 'pelote') return jouer();
    outil = o;
    scene.querySelectorAll('.cl-outils button').forEach((x) => x.classList.toggle('actif', x === b));
    zone.dataset.outil = o;
  }));
  zone.dataset.outil = 'main';

  function griffe() {
    ventreDepuis = 0; appui = false;
    setHumeur('fache', 1600);
    etat.bonheur = clamp(etat.bonheur - 15, 0, 100); majJauges(); sauve();
    const g = $('.cl-griffes'); g.classList.remove('vu'); void g.offsetWidth; g.classList.add('vu');
    zone.classList.remove('tremble'); void zone.offsetWidth; zone.classList.add('tremble');
    bulle(zone, zone.clientWidth / 2 - 60, 40, pick(['GRRR ! Pas le ventre !', 'Ffffft ! 😾', 'C\'était un piège !', 'Le ventre, c\'est sacré !']), 'ko');
  }
  function manger() {
    const gm = $('.cl-gamelle');
    if (etat.ventre >= 95) { setHumeur('normal'); bulle(zone, zone.clientWidth / 2 - 40, 30, pick(['Burp ! 😹', 'Plus faim…', 'Je vais exploser !'])); return; }
    gm.textContent = '🥣'; gm.classList.add('vu');
    setHumeur('heureux', 1800);
    bulle(zone, zone.clientWidth / 2 + 30, 60, 'Miam miam !');
    etat.ventre = clamp(etat.ventre + 25, 0, 100); etat.bonheur = clamp(etat.bonheur + 5, 0, 100);
    majJauges(); sauve();
    page.tard(() => gm.classList.remove('vu'), 1800);
  }
  function jouer() {
    const p = $('.cl-pelote');
    p.classList.remove('roule'); void p.offsetWidth; p.classList.add('roule');
    chatEl.classList.remove('saute'); void chatEl.offsetWidth; chatEl.classList.add('saute');
    setHumeur('surpris', 900);
    page.tard(() => setHumeur('heureux', 1200), 900);
    bulle(zone, zone.clientWidth / 2 - 30, 20, pick(['Boing !', 'Attrape !', 'À moi la pelote !', 'Wiiii !']));
    etat.bonheur = clamp(etat.bonheur + 10, 0, 100); etat.beaute = clamp(etat.beaute - 4, 0, 100);
    majJauges(); sauve();
  }
  page.ecoute(zone, 'pointerdown', (e) => { appui = true; zone.setPointerCapture?.(e.pointerId); e.preventDefault(); });
  page.ecoute(zone, 'pointerup', () => { appui = false; ventreDepuis = 0; });
  page.ecoute(zone, 'pointercancel', () => { appui = false; ventreDepuis = 0; });
  page.ecoute(zone, 'pointermove', (e) => {
    if (!appui) return;
    const ou = surChat(e);
    if (!ou) { ventreDepuis = 0; return; }
    calme = Date.now();
    const p = local(e);
    if (outil === 'main' && ou === 'ventre') {
      if (!ventreDepuis) { ventreDepuis = Date.now(); setHumeur('surpris', 700); }
      else if (Date.now() - ventreDepuis > 550) griffe();
      return;
    }
    ventreDepuis = 0;
    compteur++;
    if (outil === 'main') {
      setHumeur('heureux');
      etat.bonheur = clamp(etat.bonheur + 0.5, 0, 100);
      if (compteur % 12 === 0) { etat.ronrons++; bulle(zone, p.x, p.y - 20, pick(['rrr', 'Rrrrr…', 'prrrr', '💕', 'ronron'])); }
    } else {
      setHumeur(etat.beaute > 97 ? 'normal' : 'heureux');
      etat.beaute = clamp(etat.beaute + 0.6, 0, 100);
      if (compteur % 8 === 0) bulle(zone, p.x, p.y, pick(['〰️', '✨', '·', '~']), 'poil');
      if (compteur % 20 === 0) etat.ronrons++;
    }
    if (compteur % 6 === 0) { majJauges(); sauve(); }
  });
  // Le chat vit sa vie : il bâille, miaule, s'endort si on l'oublie
  page.tous(() => {
    if (Date.now() < humeurJusque) return;
    if (Date.now() - calme > 15000) { setHumeur('dort', 4000); bulle(zone, zone.clientWidth / 2 + 40, 30, 'Zzz…', 'zzz'); return; }
    if (Math.random() < 0.25) {
      const faim = etat.ventre < 30, triste = etat.bonheur < 30;
      bulle(zone, zone.clientWidth / 2 + 40, 30, faim ? 'J\'ai faim ! 🍗' : triste ? 'Un câlin ? 🥺' : pick(['Miaou ?', 'Aaaouuh (bâillement)', 'Mrrp !', `Je suis ${etat.nom} !`, '😺']));
    }
    if (humeur !== 'normal') { humeur = 'normal'; chatEl.innerHTML = chatFace('normal'); }
  }, 2500);
  page.add(sauve);
}

/* ======================= Route et menu ======================= */
const PAGES = { tomber: jeuTomber, cartons: jeuCartons, laser: jeuLaser, course: jeuCourse, calin: jeuCalin };

function pageMiniJeux(id) {
  const app = document.getElementById('content');
  if (!app) return;
  page.stop(); page = groupe();
  document.body.classList.remove('menu-open');
  app.className = 'content';
  const jeu = JEUX.find((j) => j.id === id);
  if (jeu) PAGES[id](app, jeu); else accueil(app);
  const r = app.querySelector('.mj-root'); if (r) r.dataset.id = jeu ? id : '';
  document.title = (jeu ? jeu.nom + ' · ' : '') + 'Mini-jeux du chat';
  document.querySelectorAll('.side-minijeux').forEach((a) => a.classList.add('active'));
}
window.pageMiniJeux = pageMiniJeux;

const notreRoute = () => /^#\/minijeux(\/|$)/.test(location.hash);
const idDeRoute = () => decodeURIComponent(location.hash.split('/')[2] || '');

function verifier() {
  const app = document.getElementById('content');
  if (!app) return;
  if (notreRoute()) {
    if (idDeRoute() && !JEUX.some((j) => j.id === idDeRoute())) { page.stop(); page = groupe(); return; } // un jeu d'arcade a pris la page : on arrête nos boucles
    const actuel = app.querySelector('.mj-root');
    const id = JEUX.some((j) => j.id === idDeRoute()) ? idDeRoute() : '';
    if (!actuel || actuel.dataset.id !== id) pageMiniJeux(id);
  } else if (app.querySelector('.mj-root:not(.ar-root)') === null) {
    page.stop(); page = groupe();
  }
}
function ajouterLien() {
  const side = document.getElementById('sidebar');
  if (!side || !side.children.length || side.querySelector('.side-minijeux')) return;
  const a = document.createElement('a');
  a.className = 'side-home side-minijeux'; a.href = '#/minijeux'; a.textContent = '🐱 Mini-jeux du chat';
  const apres = side.querySelector('.side-monde') || side.querySelector('.side-home');
  if (apres) apres.after(a); else side.prepend(a);
}

function demarrer() {
  const app = document.getElementById('content'), side = document.getElementById('sidebar');
  if (app) new MutationObserver(verifier).observe(app, { childList: true });
  if (side) new MutationObserver(ajouterLien).observe(side, { childList: true });
  window.addEventListener('hashchange', () => setTimeout(() => {
    if (!notreRoute()) { page.stop(); page = groupe(); }
    verifier();
    document.querySelectorAll('.side-minijeux').forEach((a) => a.classList.toggle('active', notreRoute()));
  }, 0));
  ajouterLien();
  verifier();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();

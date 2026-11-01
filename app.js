/* Révisions du brevet : lit les fiches Markdown du coffre Obsidian et les affiche.
   Aucun framework : un petit moteur Markdown (compatible avec les encadrés Obsidian),
   des quiz interactifs, une recherche plein texte et la progression enregistrée dans le navigateur. */
'use strict';

const SUBJECTS = {
  'Mathématiques': { emoji: '📐', color: '#5b5bd6' },
  'Français': { emoji: '📚', color: '#d65b8f' },
  'Histoire-Géographie-EMC': { emoji: '🌍', color: '#c77700' },
  'Sciences': { emoji: '🔬', color: '#0f9b8e' },
};
const SUBJECT_ORDER = Object.keys(SUBJECTS);

const state = { fiches: [], byPath: new Map(), subjects: [], cur: null };
const SHORT = { 'Histoire-Géographie-EMC': 'Histoire-Géo-EMC', 'Mathématiques': 'Maths' };
const $ = (sel, root = document) => root.querySelector(sel);
const app = $('#content');

/* ======================= Utilitaires ======================= */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const baseName = (p) => p.split('/').pop().replace(/\.md$/i, '');
const ficheUrl = (p, anchor) => '#/f/' + encodeURIComponent(p) + (anchor ? '/' + encodeURIComponent(anchor) : '');
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

const store = {
  get(k, d) { try { const v = localStorage.getItem('brevet:' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('brevet:' + k, JSON.stringify(v)); } catch { /* stockage indisponible */ } },
};

/* ======================= Frontmatter ======================= */
function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: src };
  const meta = {};
  let lastKey = null;
  for (const line of m[1].split(/\r?\n/)) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && lastKey) {
      if (!Array.isArray(meta[lastKey])) meta[lastKey] = [];
      meta[lastKey].push(unquote(item[1]));
      continue;
    }
    const kv = line.match(/^([\wÀ-ſ-]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    lastKey = kv[1];
    let v = kv[2].trim();
    if (v.startsWith('[') && v.endsWith(']')) v = v.slice(1, -1).split(',').map((x) => unquote(x.trim())).filter(Boolean);
    else v = unquote(v);
    meta[lastKey] = v;
  }
  return { meta, body: src.slice(m[0].length) };
}
function unquote(s) { return s.replace(/^["'](.*)["']$/, '$1'); }

/* ======================= Markdown ======================= */
const CALLOUT_TYPES = {
  note: 'info', info: 'info', todo: 'info',
  tip: 'tip', astuce: 'tip', hint: 'tip', important: 'tip', methode: 'tip', 'méthode': 'tip',
  warning: 'warning', attention: 'warning', caution: 'warning', piege: 'warning', 'piège': 'warning',
  danger: 'danger', error: 'danger', bug: 'danger', failure: 'danger',
  success: 'success', check: 'success', done: 'success', corrige: 'success', 'corrigé': 'success',
  example: 'example', exemple: 'example', exercice: 'example',
  abstract: 'abstract', summary: 'abstract', tldr: 'abstract', resume: 'abstract', 'résumé': 'abstract', essentiel: 'abstract',
  question: 'question', faq: 'question', help: 'question',
  quote: 'quote', cite: 'quote',
};
const CALLOUT_ICONS = { info: 'ℹ️', tip: '💡', warning: '⚠️', danger: '⛔', success: '✅', example: '✏️', abstract: '📌', question: '❓', quote: '💬' };

function inline(text) {
  // Les morceaux déjà transformés (code, liens, images) sont mis de côté pour ne pas être abîmés par le gras/italique.
  const saved = [];
  const keep = (html) => { saved.push(html); return '\u0000' + (saved.length - 1) + '\u0000'; };
  let s = text.replace(/`([^`]+)`/g, (_, c) => keep(`<code>${esc(c)}</code>`));
  // formules LaTeX : $$…$$ (centrée) et $…$ (dans le texte)
  s = s.replace(/\$\$([^$]+?)\$\$/g, (_, tex) => keep(`<div class="math-block" data-tex="${esc(tex.trim())}">${esc(tex.trim())}</div>`));
  s = s.replace(/\$(?=\S)([^$\n]*?\S)\$/g, (_, tex) => keep(`<span class="math" data-tex="${esc(tex)}">${esc(tex)}</span>`));
  // images ![alt](url) et ![[image.png]]
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt, url) => keep(`<img src="${esc(resolveAsset(url))}" alt="${esc(alt)}">`));
  s = s.replace(/!\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g, (_, f) => keep(`<img src="${esc(resolveAsset(f))}" alt="">`));
  // liens internes [[cible#titre|texte]]
  s = s.replace(/\[\[([^\]|#]*)(?:#([^\]|]*))?(?:\|([^\]]*))?\]\]/g, (_, target, anchor, alias) => {
    const f = findFiche(target);
    const label = esc(alias || (anchor ? (target ? target + ' › ' : '') + anchor : target));
    if (!f && target) return keep(`<span class="muted" title="Fiche pas encore écrite">${label}</span>`);
    return keep(`<a href="${ficheUrl(f ? f.path : currentPath(), anchor ? slug(anchor) : '')}">${label}</a>`);
  });
  // liens [texte](url)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, url) => {
    const yt = youtubeId(url);
    const ext = /^https?:/.test(url);
    return keep(`<a href="${esc(url)}"${ext ? ' target="_blank" rel="noopener"' : ''}${yt ? ' class="yt"' : ''}>${esc(label)}</a>`);
  });
  s = esc(s);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/__([^_]+)__/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>')
    .replace(/(^|[^\w])_([^_\s][^_]*?)_(?!\w)/g, '$1<em>$2</em>')
    .replace(/==([^=]+)==/g, '<mark>$1</mark>')
    .replace(/~~([^~]+)~~/g, '<del>$1</del>');
  // on remet les morceaux (plusieurs passes : un lien peut contenir du code)
  for (let k = 0; k < 3 && s.includes('\u0000'); k++) s = s.replace(/\u0000(\d+)\u0000/g, (_, n) => saved[n]);
  return s;
}

/* Affiche les formules avec KaTeX (si la bibliothèque est chargée ; sinon le code LaTeX reste lisible). */
function renderMath(root) {
  if (!window.katex || !root) return;
  root.querySelectorAll('.math:not(.done), .math-block:not(.done)').forEach((el) => {
    try {
      katex.render(el.dataset.tex, el, { displayMode: el.classList.contains('math-block'), throwOnError: false, strict: false });
      el.classList.add('done');
    } catch { /* on laisse le texte brut */ }
  });
}

/* Version texte simple d'une formule (pour la recherche et le sommaire). */
function texToText(s) {
  return String(s).replace(/\$+([^$]*)\$+/g, (_, t) => t
    .replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2')
    .replace(/\\sqrt\{([^{}]*)\}/g, '√$1')
    .replace(/\\times/g, '×').replace(/\\div/g, '÷').replace(/\\pi/g, 'π')
    .replace(/\^\{?2\}?/g, '²').replace(/\^\{?3\}?/g, '³')
    .replace(/\\(text|mathrm|textbf)\{([^{}]*)\}/g, '$2')
    .replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}]/g, ''));
}

function resolveAsset(url) {
  if (/^(https?:|data:)/.test(url)) return url;
  const dir = currentPath().split('/').slice(0, -1).join('/');
  return 'vault/' + encodeURI((dir ? dir + '/' : '') + url);
}

function youtubeId(url) {
  const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

/* Transforme un texte Markdown en HTML. ctx collecte les titres (sommaire) et les quiz. */
function markdown(src, ctx = { headings: [], quizzes: [] }) {
  const lines = src.replace(/\r\n?/g, '\n').split('\n');
  let html = '';
  let i = 0;

  const isBlank = (l) => /^\s*$/.test(l);
  const listRe = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;
  const startsBlock = (l) => /^(#{1,6}\s|```|~~~|>|\s*\$\$|\s*([-*+]|\d+[.)])\s|\s*(---|\*\*\*|___)\s*$)/.test(l) || /^\|.*\|\s*$/.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (isBlank(line)) { i++; continue; }

    // Bloc de code (et quiz)
    const fence = line.match(/^(```|~~~)\s*([\w-]*)\s*(.*)$/);
    if (fence) {
      const body = [];
      i++;
      while (i < lines.length && !lines[i].startsWith(fence[1])) body.push(lines[i++]);
      i++;
      if (fence[2].toLowerCase() === 'quiz') {
        const quiz = parseQuiz(body.join('\n'));
        quiz.title = fence[3].trim(); // ```quiz Titre : quiz nommé (ex. exercices des cours de classe)
        ctx.quizzes.push(quiz);
        html += `<div class="quiz-slot" data-quiz="${ctx.quizzes.length - 1}"></div>`;
      } else {
        html += `<pre><code>${esc(body.join('\n'))}</code></pre>`;
      }
      continue;
    }

    // Formule centrée sur plusieurs lignes : $$ … $$
    if (/^\s*\$\$/.test(line)) {
      const one = line.trim().match(/^\$\$([\s\S]+)\$\$$/);
      let tex = '';
      if (one) { tex = one[1]; i++; } else {
        const buf = [line.trim().slice(2)];
        i++;
        while (i < lines.length && !/\$\$\s*$/.test(lines[i])) buf.push(lines[i++]);
        if (i < lines.length) buf.push(lines[i++].replace(/\$\$\s*$/, ''));
        tex = buf.join('\n');
      }
      html += `<div class="math-block" data-tex="${esc(tex.trim())}">${esc(tex.trim())}</div>`;
      continue;
    }

    // Titres
    const h = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (h) {
      const level = h[1].length;
      const id = slug(h[2]);
      if (level === 2 || level === 3) ctx.headings.push({ level, id, text: texToText(h[2]).replace(/[*_`=]/g, '') });
      html += `<h${level} id="${id}">${inline(h[2])}</h${level}>`;
      i++;
      continue;
    }

    // Trait horizontal
    if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) { html += '<hr>'; i++; continue; }

    // Citation / encadré Obsidian
    if (line.startsWith('>')) {
      const body = [];
      while (i < lines.length && lines[i].startsWith('>')) body.push(lines[i++].replace(/^>\s?/, ''));
      const co = body[0].match(/^\[!([^\]]+)\]([+-]?)\s*(.*)$/);
      if (co) {
        const type = CALLOUT_TYPES[norm(co[1]).trim()] || CALLOUT_TYPES[co[1].toLowerCase()] || 'info';
        const title = co[3] || co[1].charAt(0).toUpperCase() + co[1].slice(1);
        const inner = markdown(body.slice(1).join('\n'), ctx);
        const icon = CALLOUT_ICONS[type];
        if (co[2]) {
          html += `<details class="callout ${type}"${co[2] === '+' ? ' open' : ''}><summary>${icon} ${inline(title)}</summary><div class="callout-body">${inner}</div></details>`;
        } else {
          html += `<div class="callout ${type}"><div class="callout-title">${icon} ${inline(title)}</div><div class="callout-body">${inner}</div></div>`;
        }
      } else {
        html += `<blockquote>${markdown(body.join('\n'), ctx)}</blockquote>`;
      }
      continue;
    }

    // Tableau
    if (/^\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\|?\s*:?-{2,}/.test(lines[i + 1])) {
      const cells = (l) => l.trim().replace(/^\||(?<!\\)\|$/g, '').split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, '|'));
      const aligns = cells(lines[i + 1]).map((c) => (c.endsWith(':') ? (c.startsWith(':') ? 'center' : 'right') : ''));
      const head = cells(line);
      i += 2;
      let t = '<table><thead><tr>' + head.map((c, k) => `<th${aligns[k] ? ` style="text-align:${aligns[k]}"` : ''}>${inline(c)}</th>`).join('') + '</tr></thead><tbody>';
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) {
        t += '<tr>' + cells(lines[i]).map((c, k) => `<td${aligns[k] ? ` style="text-align:${aligns[k]}"` : ''}>${inline(c)}</td>`).join('') + '</tr>';
        i++;
      }
      html += t + '</tbody></table>';
      continue;
    }

    // Listes (avec imbrication)
    if (listRe.test(line)) {
      const block = [];
      while (i < lines.length && (listRe.test(lines[i]) || (/^\s+\S/.test(lines[i]) && block.length))) block.push(lines[i++]);
      html += renderList(block, 0, ctx).html;
      continue;
    }

    // Paragraphe
    const para = [];
    while (i < lines.length && !isBlank(lines[i]) && !(para.length && startsBlock(lines[i]))) para.push(lines[i++]);
    html += `<p>${para.map((l) => inline(l.trim())).join('<br>')}</p>`;
  }
  return html;
}

function renderList(lines, start, ctx) {
  const listRe = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;
  const first = lines[start].match(listRe);
  const indent = first[1].length;
  const ordered = /\d/.test(first[2]);
  let html = ordered ? `<ol${parseInt(first[2], 10) !== 1 ? ` start="${parseInt(first[2], 10)}"` : ''}>` : '<ul>';
  let i = start;
  while (i < lines.length) {
    const m = lines[i].match(listRe);
    if (m && m[1].length < indent) break;
    if (m && m[1].length === indent) {
      let text = m[3];
      let cls = '';
      const task = text.match(/^\[([ xX])\]\s+(.*)$/);
      if (task) { text = `<input type="checkbox" disabled${task[1] !== ' ' ? ' checked' : ''}> ` + inline(task[2]); cls = ' class="task"'; } else text = inline(text);
      i++;
      let sub = '';
      while (i < lines.length) {
        const n = lines[i].match(listRe);
        if (n && n[1].length > indent) { const r = renderList(lines, i, ctx); sub += r.html; i = r.next; continue; }
        if (!n && lines[i].trim()) { text += '<br>' + inline(lines[i].trim()); i++; continue; }
        break;
      }
      html += `<li${cls}>${text}${sub}</li>`;
    } else if (m) {
      const r = renderList(lines, i, ctx); html += r.html; i = r.next;
    } else i++;
  }
  return { html: html + (ordered ? '</ol>' : '</ul>'), next: i };
}

/* ======================= Quiz ======================= */
/* Format (lisible aussi dans Obsidian) :
   ? La question
   - mauvaise réponse
   + bonne réponse
   > explication affichée après la réponse
   = réponse à saisir (une ligne par réponse acceptée, sans propositions + / -) */
function parseQuiz(text) {
  const questions = [];
  let q = null;
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('?')) { q = { text: line.slice(1).trim(), options: [], explain: '' }; questions.push(q); }
    else if (!q) continue;
    else if (/^[+-]\s/.test(line)) q.options.push({ text: line.slice(2).trim(), ok: line[0] === '+' });
    else if (/^=\s/.test(line)) (q.answers = q.answers || []).push(line.slice(2).trim());
    else if (line.startsWith('>')) q.explain += (q.explain ? ' ' : '') + line.slice(1).trim();
    else if (q.options.length === 0) q.text += ' ' + line;
  }
  return questions.filter((x) => x.options.length || (x.answers && x.answers.length));
}

/* Compare une réponse saisie : sans espaces ni majuscules, virgule = point, × = x = *. */
function normAnswer(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\$/g, '').replace(/\\times|×|\*/g, 'x').replace(/,/g, '.').replace(/\s+/g, '');
}

/* Construit un quiz interactif. onDone(score, total) est appelé à la fin. */
function buildQuiz(questions, { title = 'Quiz', storeKey = null, sources = null } = {}) {
  const box = document.createElement('div');
  box.className = 'quiz';
  const best = storeKey ? store.get('quiz:' + storeKey, null) : null;
  box.innerHTML = `<div class="quiz-head"><span>🧠</span><h4>${esc(title)}</h4>${best ? scoreBadge(best.best, best.total, 'Meilleur score') : ''}</div><div class="qs"></div>`;
  const qs = $('.qs', box);
  let answered = 0, score = 0;

  questions.forEach((q, n) => {
    const multi = q.options.filter((o) => o.ok).length > 1;
    const el = document.createElement('div');
    el.className = 'q';
    el.innerHTML = `<div class="q-text"><span class="q-num">${n + 1}.</span>${inline(q.text)}${multi ? ' <span class="badge">plusieurs réponses</span>' : ''}</div><div class="opts"></div>`;
    if (sources && sources[n]) el.innerHTML += `<div class="quiz-source">Fiche : <a href="${ficheUrl(sources[n].path)}">${esc(sources[n].title)}</a></div>`;
    const opts = $('.opts', el);
    if (q.answers && q.answers.length) { // question à réponse saisie
      opts.innerHTML = '<div class="q-saisie"><input type="text" class="q-input" placeholder="Ta réponse" autocomplete="off" inputmode="text"><button class="btn q-validate">Valider</button></div>';
      const input = $('.q-input', opts), v = $('.q-validate', opts);
      const check = () => {
        if (!input.value.trim()) { input.focus(); return; }
        const good = q.answers.some((a) => normAnswer(a) === normAnswer(input.value));
        input.disabled = true; v.remove();
        input.classList.add(good ? 'right' : 'wrong');
        const ex = document.createElement('div');
        ex.className = 'explain' + (good ? '' : ' bad');
        ex.innerHTML = (good ? '✅ Bravo ! ' : `❌ Pas tout à fait. Réponse attendue : <strong>${inline(q.answers[0])}</strong>. `) + (q.explain ? inline(q.explain) : '');
        el.appendChild(ex);
        renderMath(ex);
        if (window.chatReagit && (!good || Math.random() < 0.5)) window.chatReagit(good ? 'bravo' : 'oups');
        answered++; if (good) score++;
        if (answered === questions.length) showResult();
      };
      v.addEventListener('click', check);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
      qs.appendChild(el);
      return;
    }
    const chosen = new Set();
    const vraiFaux = q.options.length === 2 && q.options.every((o) => /^(vrai|faux)$/i.test(o.text.trim()));
    const order = vraiFaux // Vrai toujours à gauche, Faux à droite
      ? q.options.map((o, k) => k).sort((x, y) => (/^vrai/i.test(q.options[y].text.trim()) ? 1 : 0) - (/^vrai/i.test(q.options[x].text.trim()) ? 1 : 0))
      : shuffle(q.options.map((o, k) => k));
    if (vraiFaux) opts.classList.add('opts-vf');
    const buttons = order.map((k) => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.innerHTML = inline(q.options[k].text);
      b.dataset.k = k;
      opts.appendChild(b);
      return b;
    });

    const finish = () => {
      const good = q.options.every((o, k) => o.ok === chosen.has(k));
      buttons.forEach((b) => {
        const k = +b.dataset.k;
        b.disabled = true;
        if (q.options[k].ok) b.classList.add(chosen.has(k) ? 'right' : 'missed');
        else if (chosen.has(k)) b.classList.add('wrong');
      });
      const ex = document.createElement('div');
      ex.className = 'explain' + (good ? '' : ' bad');
      ex.innerHTML = (good ? '✅ Bravo ! ' : '❌ Pas tout à fait. ') + (q.explain ? inline(q.explain) : '');
      el.appendChild(ex);
      renderMath(ex);
      const v = $('.q-validate', el); if (v) v.remove();
      if (window.chatReagit && (!good || Math.random() < 0.5)) window.chatReagit(good ? 'bravo' : 'oups');
      answered++; if (good) score++;
      if (answered === questions.length) showResult();
    };

    buttons.forEach((b) => b.addEventListener('click', () => {
      const k = +b.dataset.k;
      if (!multi) { chosen.add(k); finish(); return; }
      chosen.has(k) ? chosen.delete(k) : chosen.add(k);
      b.classList.toggle('right', chosen.has(k));
    }));
    if (multi) {
      const v = document.createElement('button');
      v.className = 'btn q-validate';
      v.textContent = 'Valider';
      v.addEventListener('click', () => { buttons.forEach((b) => b.classList.remove('right')); finish(); });
      el.appendChild(v);
    }
    qs.appendChild(el);
  });
  renderMath(box);

  function showResult() {
    const r = document.createElement('div');
    r.className = 'quiz-result';
    const pct = score / questions.length;
    const msg = pct === 1 ? '🏆 Parfait !' : pct >= 0.7 ? '👍 Très bien !' : pct >= 0.4 ? '💪 Encore un petit effort.' : '📖 Relis la fiche et réessaie.';
    r.innerHTML = `<span>Score : ${score} / ${questions.length} · ${msg}</span>`;
    const again = document.createElement('button');
    again.className = 'btn ghost';
    again.textContent = '↻ Recommencer';
    again.addEventListener('click', () => box.replaceWith(buildQuiz(questions, { title, storeKey, sources })));
    r.appendChild(again);
    box.appendChild(r);
    if (storeKey) {
      const prev = store.get('quiz:' + storeKey, null);
      store.set('quiz:' + storeKey, {
        best: prev ? Math.max(prev.best, score) : score, total: questions.length, last: score, date: new Date().toISOString(),
      });
      renderSidebar();
    }
  }
  return box;
}

function scoreBadge(score, total, label = '') {
  const pct = total ? score / total : 0;
  const cls = pct >= 0.8 ? 'ok' : pct >= 0.5 ? 'mid' : 'ko';
  return `<span class="badge ${cls}" title="${esc(label)}">${label ? label + ' : ' : ''}${score}/${total}</span>`;
}

/* ======================= Données ======================= */
async function loadAll() {
  const res = await fetch('fiches.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('api');
  const list = await res.json();
  // Une fiche qui ne se charge pas est ignorée (au lieu d'afficher une page d'erreur comme texte)
  const fiches = (await Promise.all(list.map(async (f) => {
    const r = await fetch('vault/' + encodeURI(f.path), { cache: 'no-store' });
    const texte = r.ok ? await r.text() : '';
    if (!texte || /^\s*<!doctype html|^\s*<html/i.test(texte)) return null;
    return makeFiche(f.path, texte);
  }))).filter(Boolean);
  state.fiches = fiches;
  state.byPath = new Map(fiches.map((f) => [f.path, f]));
  const subj = [...new Set(fiches.filter((f) => f.subject).map((f) => f.subject))];
  subj.sort((a, b) => (SUBJECT_ORDER.indexOf(a) + 1 || 99) - (SUBJECT_ORDER.indexOf(b) + 1 || 99) || a.localeCompare(b));
  state.subjects = subj;
}

function makeFiche(path, src) {
  const { meta, body } = parseFrontmatter(src);
  const parts = path.split('/');
  const subject = parts.length > 1 ? parts[0] : null;
  const name = baseName(path);
  const num = parseInt(meta.chapitre ?? (name.match(/^(\d+)/) || [])[1], 10);
  const quizzes = [];
  for (const m of body.matchAll(/```quiz[^\n]*\n([\s\S]*?)```/g)) quizzes.push(...parseQuiz(m[1]));
  const plain = texToText(body).replace(/```quiz/g, '').replace(/==/g, '').replace(/[#>*_`|\[\]]/g, ' ').replace(/\s+/g, ' ');
  return {
    path, src, meta, body, subject, name,
    title: meta.titre || name.replace(/^\d+\s*[-–.]\s*/, ''),
    type: meta.type || 'fiche',
    theme: meta.theme || '',
    num: Number.isNaN(num) ? null : num,
    tags: Array.isArray(meta.tags) ? meta.tags : meta.tags ? [meta.tags] : [],
    quizQuestions: quizzes,
    plain, plainN: norm(plain),
  };
}

function findFiche(target) {
  if (!target) return null;
  const t = norm(target.replace(/\.md$/i, ''));
  return state.fiches.find((f) => norm(f.name) === t || norm(f.path.replace(/\.md$/i, '')) === t || norm(f.title) === t) || null;
}

let _current = '';
function currentPath() { return _current; }

const numLabel = (f) => (f.type === 'fiche' && f.num != null ? String(f.num) : '★');
const chaptersOf = (subject) => state.fiches
  .filter((f) => f.subject === subject && f.type !== 'sommaire')
  .sort((a, b) => (a.num ?? 999) - (b.num ?? 999) || a.title.localeCompare(b.title));

function progressOf(subject) {
  const ch = chaptersOf(subject).filter((f) => f.type === 'fiche');
  const done = ch.filter((f) => store.get('ok:' + f.path, false)).length;
  return { done, total: ch.length };
}

/* ======================= Barre latérale ======================= */
function renderSidebar() {
  const side = $('#sidebar');
  if (state.espace === 'jeux' && window.sidebarMonde) { side.innerHTML = sidebarMonde(); return; }
  let html = '<a class="side-home" href="#/">🏠 Accueil</a>';
  for (const s of state.subjects) {
    const info = SUBJECTS[s] || { emoji: '📁' };
    const chs = chaptersOf(s);
    const isOpen = s === state.cur, pr = progressOf(s);
    html += `<details class="side-subject" data-s="${esc(s)}" style="--sc:${info.color || 'var(--accent)'}"${isOpen ? ' open' : ''}><summary>${info.emoji} ${esc(s)}<span class="side-prog">${pr.done}/${pr.total}</span></summary>`;
    html += `<a class="side-link" href="#/m/${encodeURIComponent(s)}">📋 Vue d'ensemble</a>`;
    if (!chs.length) html += '<div class="side-empty">Fiches à venir</div>';
    let theme = null;
    for (const f of chs) {
      if (f.theme && f.theme !== theme) { theme = f.theme; html += `<div class="side-theme">${esc(theme)}</div>`; }
      const ok = store.get('ok:' + f.path, false);
      const q = store.get('quiz:' + f.path, null);
      const badge = ok ? '<span class="badge ok badge-r" title="Maîtrisé">✓</span>' : q ? scoreBadge(q.best, q.total) : '';
      html += `<a class="side-link" data-path="${esc(f.path)}" href="${ficheUrl(f.path)}"><span class="num">${numLabel(f)}</span><span>${esc(f.title)}</span>${badge ? badge.replace('class="badge', 'class="badge') : ''}</a>`;
    }
    html += '</details>';
  }
  html += '<div class="side-sep"></div><a class="side-home side-monde" href="#/monde">🌍 Envie d\'une pause ? Espace découverte</a>';
  side.innerHTML = html;
  side.querySelectorAll('.side-link .badge').forEach((b) => (b.style.marginLeft = 'auto'));
  side.querySelectorAll('details').forEach((d) => d.addEventListener('toggle', () => {
    if (d.open) side.querySelectorAll('details').forEach((o) => { if (o !== d) o.open = false; }); // une seule matière ouverte à la fois
  }));
  highlightSidebar();
}

function highlightSidebar() {
  document.querySelectorAll('.side-link').forEach((a) => a.classList.toggle('active', a.dataset.path === _current));
  // la matière en cours est ouverte, les autres restent repliées (toutes les matières restent visibles)
  document.querySelectorAll('#sidebar details.side-subject').forEach((d) => { d.open = d.dataset.s === state.cur; });
  const act = document.querySelector('#sidebar .side-link.active');
  if (act && act.scrollIntoView) act.scrollIntoView({ block: 'nearest' });
}

/* Barre des matières, affichée en haut des pages du brevet pour passer d'une matière à l'autre */
function matieresNav() {
  const chips = state.subjects.map((s) => {
    const info = SUBJECTS[s] || { emoji: '📁' }, p = progressOf(s), pct = p.total ? Math.round((100 * p.done) / p.total) : 0;
    return `<a class="mat-chip${s === state.cur ? ' on' : ''}" href="#/m/${encodeURIComponent(s)}" style="--sc:${info.color || 'var(--accent)'}"><span class="mat-emoji">${info.emoji}</span><span class="mat-nom">${esc(SHORT[s] || s)}</span><span class="mat-pct">${pct}%</span></a>`;
  }).join('');
  return `<nav class="matieres-nav" aria-label="Matières">${chips}</nav>`;
}

/* La prochaine fiche à travailler dans une matière (première non maîtrisée) */
function prochaineFiche(subject) {
  const ch = chaptersOf(subject).filter((f) => f.type === 'fiche');
  return ch.find((f) => !store.get('ok:' + f.path, false)) || null;
}

/* ======================= Pages ======================= */
function pageHome() {
  _current = '';
  const last = store.get('last', null);
  const lastF = last && state.byPath.get(last);
  let html = `<div class="hero"><h1>Bonjour 👋</h1><p class="muted">Choisis une matière, ouvre une fiche, puis teste-toi avec le quiz. Coche « Je maîtrise » quand une fiche est acquise.</p></div>`;
  if (lastF) html += `<div class="actions"><a class="btn" href="${ficheUrl(lastF.path)}">▶ Reprendre : ${esc(lastF.title)}</a><a class="btn ghost" href="#/quiz">🎲 Quiz surprise (toutes matières)</a></div>`;
  else html += `<div class="actions"><a class="btn ghost" href="#/quiz">🎲 Quiz surprise (toutes matières)</a></div>`;
  const todo = state.subjects.map((s) => ({ s, f: prochaineFiche(s) })).filter((x) => x.f);
  if (todo.length) {
    html += '<h2 class="section-title">🎯 À réviser maintenant</h2><p class="muted" style="margin-top:-6px">Une fiche à ouvrir dans chaque matière : la première que tu ne maîtrises pas encore.</p><div class="grid todo">';
    for (const { s, f } of todo) {
      const info = SUBJECTS[s] || { emoji: '📁' };
      html += `<a class="card todo-card" href="${ficheUrl(f.path)}" style="--sc:${info.color || 'var(--accent)'}"><div class="todo-mat">${info.emoji} ${esc(SHORT[s] || s)}</div><h3>${f.num != null ? f.num + '. ' : ''}${esc(f.title)}</h3>${f.meta.resume ? `<p>${esc(f.meta.resume)}</p>` : ''}<span class="todo-go">Ouvrir la fiche →</span></a>`;
    }
    html += '</div>';
  }
  html += '<h2 class="section-title">Matières</h2><div class="grid">';
  const all = [...new Set([...state.subjects, ...SUBJECT_ORDER])];
  for (const s of all) {
    const info = SUBJECTS[s] || { emoji: '📁' };
    const p = progressOf(s);
    const has = state.subjects.includes(s);
    html += `<a class="card" href="#/m/${encodeURIComponent(s)}"><div class="emoji">${info.emoji}</div><h3>${esc(s)}</h3>`;
    html += p.total ? `<p>${p.total} fiche${p.total > 1 ? 's' : ''} · ${p.done} maîtrisée${p.done > 1 ? 's' : ''}</p><div class="progress"><span style="width:${Math.round((100 * p.done) / p.total)}%"></span></div>` : `<p>${has ? 'Fiches à venir' : 'Dossier à créer'}</p>`;
    html += '</a>';
  }
  html += '</div>';
  const accueil = state.fiches.find((f) => !f.subject && f.type === 'accueil');
  const conseils = accueil && accueil.body.split(/^##\s+Comment réviser.*$/m)[1];
  if (conseils) html += `<h2 class="section-title">Comment réviser avec une fiche</h2><div class="md">${markdown(conseils.split(/^##\s/m)[0])}</div>`;
  app.innerHTML = html;
  app.className = 'content wide';
  document.title = 'Révisions du brevet';
}

function pageSubject(subject) {
  _current = '';
  const info = SUBJECTS[subject] || { emoji: '📁' };
  const chs = chaptersOf(subject);
  const p = progressOf(subject);
  const nbQ = chs.reduce((n, f) => n + f.quizQuestions.length, 0);
  let html = matieresNav() + `<div class="breadcrumb"><a href="#/">Accueil</a> › ${esc(subject)}</div>`;
  html += `<div class="hero"><h1>${info.emoji} ${esc(subject)}</h1>`;
  html += p.total ? `<p class="muted">${p.done} fiche${p.done > 1 ? 's' : ''} maîtrisée${p.done > 1 ? 's' : ''} sur ${p.total}</p><div class="progress" style="max-width:420px"><span style="width:${Math.round((100 * p.done) / p.total)}%"></span></div>` : '<p class="muted">Les fiches de cette matière arrivent bientôt.</p>';
  html += '</div>';
  const nxt = prochaineFiche(subject);
  html += '<div class="actions">';
  if (nxt) html += `<a class="btn" href="${ficheUrl(nxt.path)}">▶ ${p.done ? 'Continuer' : 'Commencer'} : ${nxt.num != null ? nxt.num + '. ' : ''}${esc(nxt.title)}</a>`;
  if (nbQ) html += `<a class="btn ghost" href="#/quiz/${encodeURIComponent(subject)}">🎲 Quiz mélangé (10 questions)</a>`;
  html += '</div>';
  let theme = null;
  for (const f of chs) {
    if (f.theme !== theme) {
      if (theme !== null) html += '</div>';
      theme = f.theme;
      const du = chs.filter((x) => x.theme === theme && x.type === 'fiche'), fait = du.filter((x) => store.get('ok:' + x.path, false)).length;
      html += `<h2 class="section-title">${esc(theme || 'Fiches')}${du.length ? ` <small class="theme-prog">${fait}/${du.length} maîtrisées</small>` : ''}</h2><div class="grid">`;
    }
    const ok = store.get('ok:' + f.path, false);
    const q = store.get('quiz:' + f.path, null);
    html += `<a class="card" href="${ficheUrl(f.path)}"><h3>${f.type === 'fiche' && f.num != null ? f.num + '. ' : ''}${esc(f.title)}</h3>`;
    if (f.meta.resume) html += `<p>${esc(f.meta.resume)}</p>`;
    html += '<div class="meta">';
    if (ok) html += '<span class="badge ok">✓ Maîtrisé</span>';
    if (q) html += scoreBadge(q.best, q.total, 'Quiz');
    else if (f.quizQuestions.length) html += `<span class="badge">${f.quizQuestions.length} questions</span>`;
    html += '</div></a>';
  }
  if (theme !== null) html += '</div>';
  const sommaire = state.fiches.find((f) => f.subject === subject && f.type === 'sommaire');
  if (sommaire) {
    const extra = sommaire.body.split(/^##\s+Conseils/m)[1];
    if (extra) html += `<h2 class="section-title">Conseils</h2><div class="md">${markdown(extra)}</div>`;
  }
  app.innerHTML = html;
  app.className = 'content wide';
  document.title = subject + ' · Révisions';
}

async function pageFiche(path, anchor) {
  let f = state.byPath.get(path);
  if (!f) { app.innerHTML = '<p>Fiche introuvable. <a href="#/">Retour à l\'accueil</a></p>'; return; }
  // Relit le fichier pour afficher les dernières modifications faites dans Obsidian
  try {
    const r = await fetch('vault/' + encodeURI(path), { cache: 'no-store' });
    if (r.ok) { const txt = await r.text(); if (txt !== f.src) { f = makeFiche(path, txt); state.byPath.set(path, f); state.fiches = state.fiches.map((x) => (x.path === path ? f : x)); } }
  } catch { /* hors ligne : on garde la version chargée */ }

  _current = path;
  store.set('last', path);
  const ctx = { headings: [], quizzes: [] };
  const body = f.body.replace(/^\s*#\s+.*\n/, ''); // le titre principal est affiché dans l'en-tête
  const content = markdown(body, ctx);
  const chs = f.subject ? chaptersOf(f.subject) : [];
  const idx = chs.indexOf(chs.find((c) => c.path === path));
  const prev = idx > 0 ? chs[idx - 1] : null;
  const next = idx >= 0 && idx < chs.length - 1 ? chs[idx + 1] : null;
  const ok = store.get('ok:' + path, false);

  let html = (f.subject ? matieresNav() : '') + `<div class="breadcrumb"><a href="#/">Accueil</a>${f.subject ? ` › <a href="#/m/${encodeURIComponent(f.subject)}">${esc(f.subject)}</a>` : ''}${f.theme ? ' › ' + esc(f.theme) : ''}</div>`;
  html += `<div class="fiche-head"><h1>${f.type === 'fiche' && f.num != null ? f.num + '. ' : ''}${esc(f.title)}</h1>`;
  if (f.type === 'fiche') {
    const mots = f.plain.split(/\s+/).length, nbEx = (f.body.match(/^> \[!question\]/gm) || []).length, nbQ = f.quizQuestions.length;
    html += `<p class="fiche-infos">⏱ ~${Math.max(3, Math.round(mots / 150))} min de lecture · ✏️ ${nbEx} exercice${nbEx > 1 ? 's' : ''} · ❓ ${nbQ} question${nbQ > 1 ? 's' : ''} de quiz</p>`;
  }
  if (f.tags.length) html += `<div class="tags">${f.tags.map((t) => `<span class="badge">#${esc(t)}</span>`).join('')}</div>`;
  if (f.type === 'fiche') html += `<label class="mastery"><input type="checkbox" id="mastery"${ok ? ' checked' : ''}> Je maîtrise cette fiche</label>`;
  html += '</div>';
  const toc = ctx.headings.filter((x) => x.level === 2);
  if (f.type === 'fiche') { // parcours conseillé : essentiel → cours → exercices → quiz → maîtrise
    const h = (re) => toc.find((x) => re.test(x.text));
    const etapes = [['⚡', 'L\'essentiel', null], ['📖', 'Le cours', h(/cours/i)], ['✏️', 'Exercices', h(/exercice/i)], ['❓', 'Quiz', h(/quiz/i)], ['✅', 'Je maîtrise', { id: 'mastery' }]];
    html += `<ol class="parcours">${etapes.map(([e, t, hd], i) => `<li><a href="${hd ? (hd.id === 'mastery' ? '#' : ficheUrl(path, hd.id)) : ficheUrl(path)}"${hd && hd.id === 'mastery' ? ' data-maitrise="1"' : ''}><span class="p-num">${i + 1}</span>${e} ${t}</a></li>`).join('')}</ol>`;
    html += '<div class="outils-fiche"><button type="button" class="btn ghost small" id="mode-test" aria-pressed="false">🙈 Mode « test-toi » : cacher les définitions</button></div>';
  }
  if (toc.length > 2) html += `<nav class="toc"><strong>Sommaire</strong><ol>${toc.map((x) => `<li><a href="${ficheUrl(path, x.id)}">${esc(x.text)}</a></li>`).join('')}</ol></nav>`;
  html += `<article class="md">${content}</article>`;
  html += '<div class="fiche-nav">';
  html += prev ? `<a class="card" href="${ficheUrl(prev.path)}"><p>← Fiche précédente</p><h3>${esc(prev.title)}</h3></a>` : '<span></span>';
  html += next ? `<a class="card next" href="${ficheUrl(next.path)}"><p>Fiche suivante →</p><h3>${esc(next.title)}</h3></a>` : '<span></span>';
  html += '</div>';
  app.innerHTML = html;
  app.className = 'content';
  document.title = f.title + ' · Révisions';

  // Quiz interactifs
  const sansTitre = ctx.quizzes.filter((q) => !q.title); // les quiz nommés ne changent pas la numérotation ni le score de la fiche
  app.querySelectorAll('.quiz-slot').forEach((slot) => {
    const qs = ctx.quizzes[+slot.dataset.quiz];
    if (qs.title) { slot.replaceWith(buildQuiz(qs, { title: qs.title, storeKey: path + '#' + qs.title })); return; }
    const single = sansTitre.length === 1;
    slot.replaceWith(buildQuiz(qs, { title: single ? 'Quiz : teste-toi !' : `Quiz ${sansTitre.indexOf(qs) + 1}`, storeKey: single ? path : null }));
  });
  enhanceVideos(app);
  renderMath(app);

  const mt = $('#mode-test');
  if (mt) {
    app.querySelectorAll('.md table').forEach((t) => {
      if (t.rows[0] && t.rows[0].cells.length >= 2) t.classList.add('testable');
    });
    mt.addEventListener('click', () => {
      const on = app.classList.toggle('mode-test'); mt.setAttribute('aria-pressed', on);
      mt.textContent = on ? '👀 Tout réafficher' : '🙈 Mode « test-toi » : cacher les définitions';
      if (!on) app.querySelectorAll('td.revele').forEach((c) => c.classList.remove('revele'));
    });
    app.addEventListener('click', (e) => { const c = e.target.closest('.mode-test .testable td:not(:first-child)'); if (c) c.classList.toggle('revele'); });
  }
  app.querySelectorAll('.parcours a[data-maitrise]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); const m = $('.mastery'); if (m) m.scrollIntoView({ behavior: 'smooth', block: 'center' }); }));
  const m = $('#mastery');
  if (m) m.addEventListener('change', () => { store.set('ok:' + path, m.checked); renderSidebar(); if (m.checked && window.chatReagit) window.chatReagit('fete'); });
  highlightSidebar();
  if (anchor) { const el = document.getElementById(anchor); if (el) el.scrollIntoView(); } else window.scrollTo(0, 0);
}

/* Les éléments de liste qui ne contiennent qu'un lien YouTube deviennent des vignettes vidéo. */
function enhanceVideos(root) {
  root.querySelectorAll('ul').forEach((ul) => {
    const items = [...ul.children];
    const vids = items.filter((li) => { const a = li.querySelector('a.yt'); return a && li.children.length === 1 && youtubeId(a.href); });
    if (!vids.length || vids.length !== items.length) return;
    ul.className = 'videos';
    vids.forEach((li) => {
      const a = li.querySelector('a');
      const id = youtubeId(a.href);
      const extra = li.textContent.replace(a.textContent, '').replace(/^[\s–—:-]+/, '').trim();
      li.className = 'video';
      li.innerHTML = `<button class="thumb" title="Lire la vidéo"><img loading="lazy" src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" alt=""></button>
        <div class="vtitle">${esc(a.textContent)}${extra ? ` <span class="muted">· ${esc(extra)}</span>` : ''}<a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Ouvrir sur YouTube ↗</a></div>`;
      $('.thumb', li).addEventListener('click', (e) => {
        const ifr = document.createElement('iframe');
        ifr.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        ifr.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        ifr.allowFullscreen = true;
        e.currentTarget.replaceWith(ifr);
      });
    });
  });
}

function pageQuiz(subject) {
  _current = '';
  const pool = [];
  for (const f of state.fiches) {
    if (subject && f.subject !== subject) continue;
    f.quizQuestions.forEach((q) => pool.push({ q, f }));
  }
  const pick = shuffle(pool).slice(0, 10);
  let html = (subject ? matieresNav() : '') + `<div class="breadcrumb"><a href="#/">Accueil</a>${subject ? ` › <a href="#/m/${encodeURIComponent(subject)}">${esc(subject)}</a>` : ''} › Quiz mélangé</div>`;
  html += `<div class="hero"><h1>🎲 Quiz mélangé</h1><p class="muted">${pick.length} questions tirées au hasard ${subject ? 'dans les fiches de ' + esc(subject) : 'dans toutes les fiches'}. Recharge la page pour un nouveau tirage.</p></div><div id="mix"></div>`;
  app.innerHTML = html;
  app.className = 'content';
  if (!pick.length) { $('#mix').innerHTML = '<p class="muted">Aucun quiz pour l\'instant.</p>'; return; }
  $('#mix').appendChild(buildQuiz(pick.map((x) => x.q), {
    title: subject ? 'Quiz ' + subject : 'Quiz toutes matières',
    storeKey: 'mix:' + (subject || 'all'),
    sources: pick.map((x) => ({ path: x.f.path, title: x.f.title })),
  }));
  document.title = 'Quiz mélangé · Révisions';
  highlightSidebar();
}

const ACCENTS = { a: '[aàâä]', e: '[eéèêë]', i: '[iîï]', o: '[oôö]', u: '[uùûü]', c: '[cç]', y: '[yÿ]' };

function pageSearch(query) {
  _current = '';
  const words = norm(query).split(/\s+/).filter((w) => w.length > 1);
  const results = [];
  if (words.length) {
    for (const f of state.fiches) {
      if (!f.subject && f.type !== 'accueil') continue;
      const titleN = norm(f.title), tagsN = norm(f.tags.join(' '));
      let score = 0, all = true;
      for (const w of words) {
        const inBody = f.plainN.split(w).length - 1;
        const s = (titleN.includes(w) ? 20 : 0) + (tagsN.includes(w) ? 8 : 0) + Math.min(inBody, 10);
        if (!s) all = false;
        score += s;
      }
      if (all && score) results.push({ f, score });
    }
    results.sort((a, b) => b.score - a.score);
  }
  let html = `<div class="breadcrumb"><a href="#/">Accueil</a> › Recherche</div><h1>🔎 « ${esc(query)} »</h1>`;
  if (!words.length) html += '<p class="muted">Tape au moins 2 lettres.</p>';
  else if (!results.length) html += '<p class="muted">Aucune fiche ne contient ces mots. Essaie un autre mot (par exemple « factoriser », « médiane », « volume »).</p>';
  else html += `<p class="muted">${results.length} fiche${results.length > 1 ? 's' : ''} trouvée${results.length > 1 ? 's' : ''}</p>`;
  for (const { f } of results) {
    const pos = f.plainN.indexOf(words[0]);
    let snip = pos >= 0 ? f.plain.slice(Math.max(0, pos - 70), pos + 130) : f.plain.slice(0, 200);
    snip = esc(snip);
    for (const w of words) {
      snip = snip.replace(new RegExp(`(${[...w].map((c) => ACCENTS[c] || c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('')})`, 'gi'), '<mark>$1</mark>');
    }
    html += `<a class="card result" href="${ficheUrl(f.path)}"><h3>${f.subject ? (SUBJECTS[f.subject]?.emoji || '📁') + ' ' : ''}${esc(f.title)}</h3><div class="snippet">…${snip}…</div></a>`;
  }
  app.innerHTML = html;
  app.className = 'content';
  highlightSidebar();
}

/* ======================= Navigation ======================= */
function route() {
  document.body.classList.remove('menu-open');
  const parts = location.hash.replace(/^#\/?/, '').split('/').map((p) => { try { return decodeURIComponent(p); } catch { return p; } });
  const [page, a, b] = parts;
  setEspace(page === 'monde' || page === 'minijeux' ? 'jeux' : 'brevet');
  state.cur = page === 'm' ? a : page === 'f' && a ? (state.byPath.get(a) || {}).subject || null : page === 'quiz' && a ? a : null;
  if (page === 'f' && a) return pageFiche(a, b);
  if (page === 'm' && a) { pageSubject(a); renderMath(app); highlightSidebar(); return; }
  if (page === 'quiz') return pageQuiz(a);
  if (page === 'recherche') return pageSearch(parts.slice(1).join('/'));
  if (page === 'monde' && window.pageMonde) return pageMonde(a, b);
  if (page === 'minijeux' && window.pageMiniJeux) { document.querySelectorAll('.side-m').forEach((l) => l.classList.toggle('active', l.dataset.k === 'minijeux')); return pageMiniJeux(a); }
  pageHome();
  renderMath(app);
  highlightSidebar();
}

/* Deux espaces séparés : les révisions du brevet et l'espace découverte (jeux) */
function setEspace(e) {
  if (state.espace === e) return;
  state.espace = e;
  document.body.dataset.espace = e;
  const jeux = e === 'jeux';
  const brand = $('#brand');
  brand.href = jeux ? '#/monde' : '#/';
  brand.innerHTML = jeux ? '🌍 <span>Espace découverte</span>' : '🎓 <span>Révisions du brevet</span>';
  document.querySelectorAll('.espaces a').forEach((a) => a.classList.toggle('active', a.dataset.e === e));
  if (state.fiches) renderSidebar();
}

function setupUi() {
  const theme = store.get('theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const applyTheme = (t) => { document.documentElement.dataset.theme = t; $('#theme-btn').textContent = t === 'dark' ? '☀️' : '🌙'; };
  applyTheme(theme);
  $('#theme-btn').addEventListener('click', () => {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    store.set('theme', t); applyTheme(t);
  });
  $('#menu-btn').addEventListener('click', () => document.body.classList.toggle('menu-open'));

  const input = $('#search');
  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const q = input.value.trim();
      if (q) location.hash = '#/recherche/' + encodeURIComponent(q);
    }, 250);
  });
  input.addEventListener('keydown', (e) => { if (e.key === 'Escape') { input.value = ''; input.blur(); } });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); input.focus(); }
  });
  // À l'impression, on déplie tous les corrigés
  window.addEventListener('beforeprint', () => document.querySelectorAll('details').forEach((d) => (d.open = true)));
  window.addEventListener('hashchange', route);
  // Un lien vers la page déjà affichée la recharge quand même (ex. relancer un jeu depuis le menu)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#/"]');
    if (a && a.getAttribute('href') === location.hash && !e.ctrlKey && !e.metaKey) { e.preventDefault(); route(); }
  });
}

(async function start() {
  setupUi();
  try {
    await loadAll();
  } catch (e) {
    app.innerHTML = `<div class="notice"><h2>Le site doit être lancé avec le petit serveur</h2>
      <p>Double-clique sur <strong>« Lancer le site.bat »</strong> dans le dossier <em>elea brevet</em> : le site s'ouvrira tout seul dans le navigateur.</p></div>`;
    return;
  }
  renderSidebar();
  route();
  if (!window.katex) {
    const k = document.querySelector('script[src*="katex"]');
    if (k) k.addEventListener('load', () => renderMath(document));
  }
})();

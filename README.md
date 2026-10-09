# Révisions du brevet

Site statique (HTML, CSS, JavaScript) pour réviser le brevet, avec l'espace découverte.

- `vault/` : les fiches en Markdown (même structure que le coffre Obsidian).
- `fiches.json` : liste des fiches, générée par `node make-index.js`. À relancer après chaque modification ou ajout de fiche, puis committer.
- `vercel.json` : redirige `/api/fiches` vers `fiches.json`.

Le suivi de progression reste dans le navigateur de chaque utilisatrice (localStorage).

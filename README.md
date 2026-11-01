# Révisions du brevet

Site statique (HTML, CSS, JavaScript) pour réviser le brevet, avec l'espace découverte. Publié sur GitHub Pages (https://cintractbertrand.github.io/-elea-brevet/), sans mot de passe.

- `vault/` : les fiches en Markdown (même structure que le coffre Obsidian).
- `fiches.json` : liste des fiches, générée par `node make-index.js`. À relancer après chaque modification ou ajout de fiche, puis committer.

Le suivi de progression reste dans le navigateur de chaque utilisatrice (localStorage).

## Format des quiz

Dans une fiche, un bloc ```` ```quiz ```` contient des questions : `? question`, `+ bonne réponse`, `- mauvaise réponse`, `> explication` (affichée après la réponse). Deux ajouts :

- ```` ```quiz Titre ```` donne un titre au quiz (ex. « Série 1 : entraîne-toi » pour les exercices tirés des cours de classe). Les quiz nommés ont leur propre meilleur score et ne changent pas la numérotation des autres.
- `= réponse` à la place des propositions crée une question à réponse saisie (une ligne `=` par réponse acceptée ; espaces, majuscules et virgule/point ne comptent pas).
- Une question avec seulement `Vrai` et `Faux` garde toujours Vrai à gauche.

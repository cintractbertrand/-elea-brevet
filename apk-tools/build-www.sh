#!/usr/bin/env bash
# Prépare le dossier www/ (site embarqué, KaTeX inclus pour le hors-ligne)
set -euo pipefail
rm -rf www && mkdir -p www/katex
cp -r index.html app.js monde.js chat.js *.css fiches.json chat-jeux monde vault www/
npm pack katex@0.16.47 --silent >/dev/null
tar xzf katex-0.16.47.tgz && cp -r package/dist/* www/katex/ && rm -rf package katex-0.16.47.tgz
sed -i 's#https://cdn.jsdelivr.net/npm/katex@0.16.47/dist/#katex/#g' www/index.html

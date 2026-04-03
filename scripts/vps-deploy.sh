#!/usr/bin/env bash
# Deploy Studiely on the VPS (static Next export + optional merged deploy/ without Flutter).
# Run from repo root as a user that can sudo nginx reload.
# Env:
#   APP_ROOT   — default /var/www/studiely
#   USE_MERGE  — set to 1 to run merge (preserved paths); needs network to PRESERVE_SYNC_ORIGIN until cutover
#   PRESERVE_SYNC_ORIGIN — e.g. https://www.studiely.com while old host still serves /legal/**
set -euo pipefail

APP_ROOT="${APP_ROOT:-/var/www/studiely}"
cd "$APP_ROOT"

if [[ ! -f package.json ]]; then
  echo "No package.json in $APP_ROOT — clone the repo here first."
  exit 1
fi

git fetch origin
git checkout web-hosting-and-urls
git pull origin web-hosting-and-urls

if [[ -f .env.production ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env.production
  set +a
else
  echo "Warning: missing .env.production — create from deploy/production.env.example"
fi

npm ci
npm run build

WEB_ROOT="out"
if [[ "${USE_MERGE:-0}" == "1" ]]; then
  export SKIP_FLUTTER_APP_SYNC=1
  npm run deploy:firebase:merge
  WEB_ROOT="deploy"
fi

echo "Nginx root should be $APP_ROOT/$WEB_ROOT (set in /etc/nginx/sites-available/studiely)."

sudo nginx -t
sudo systemctl reload nginx

echo "Deployed from $(git rev-parse --short HEAD) — serving $APP_ROOT/$WEB_ROOT"

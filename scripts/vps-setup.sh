#!/usr/bin/env bash
# One-time Ubuntu VPS prep (run as root or with sudo).
# Usage: curl -fsSL ... | bash   OR   sudo bash scripts/vps-setup.sh
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

if [[ "${EUID:-$(id -u)}" -ne 0 ]]; then
  echo "Run as root: sudo bash scripts/vps-setup.sh"
  exit 1
fi

apt-get update -y
apt-get upgrade -y
apt-get install -y nginx certbot python3-certbot-nginx git curl ca-certificates ufw

# Node.js 20 LTS (NodeSource)
if ! command -v node >/dev/null 2>&1 || [[ "$(node -v 2>/dev/null || true)" != v20* ]]; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

ufw default deny incoming
ufw default allow outgoing
ufw allow OpenSSH
ufw allow "Nginx Full"
ufw --force enable

echo ""
echo "Done: nginx, certbot, git, Node $(node -v), ufw (22 + Nginx Full)."
echo "Next: .env.production, Nginx site config, npm run build (see vps-hosting/README.md)."

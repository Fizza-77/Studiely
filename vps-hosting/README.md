# Hostinger VPS deployment (branch `web-hosting-and-urls`)

Deploy the static Next.js site on Ubuntu with Nginx and Let’s Encrypt. Firebase Hosting files in the repo stay as-is; cutover is DNS + Firebase Console.

Config files live under **`vps-hosting/`** so they stay in Git (the **`deploy/`** directory is gitignored as the Firebase merge output).

## 1. SSH

```bash
ssh root@187.124.250.67
```

Use the password or SSH key from Hostinger. Create a deploy user if you prefer not to use root for daily deploys.

## 2. Clone the project first (required)

`scripts/vps-setup.sh` lives **inside the GitHub repo**. If you run it from `/root` you get **No such file or directory** — clone first, then run setup from the project folder.

As **root** (or use `sudo` where needed):

```bash
apt-get update -y
apt-get install -y git ca-certificates curl
mkdir -p /var/www/studiely
cd /var/www/studiely
git clone -b web-hosting-and-urls --single-branch https://github.com/Fizza-77/Studiely.git .
git pull origin web-hosting-and-urls
```

If `vps-hosting/` or `scripts/vps-setup.sh` is missing after clone, that branch on GitHub is behind your laptop — **push** the latest `web-hosting-and-urls` from your PC, then run `git pull` again on the server.

## 3. One-time server setup

**From `/var/www/studiely`** (you must see `package.json` when you run `ls`):

```bash
cd /var/www/studiely
bash scripts/vps-setup.sh
```

This installs Nginx, Certbot, Node.js 20, and enables UFW (SSH + HTTP/HTTPS). You already have `git` from step 2.

## 4. Environment file

Still in `/var/www/studiely`:

```bash
cp vps-hosting/production.env.example .env.production
chmod 600 .env.production
nano .env.production   # add Supabase and site URL values
```

## 5. DNS before TLS

From your dev machine (after pointing **A** records for `@` and **www** at `187.124.250.67`):

```bash
EXPECTED_VPS_IP=187.124.250.67 npm run check:vps-dns
```

If this fails, fix DNS and wait for propagation, then retry.

## 6. Nginx site + first HTTP deploy

Edit `vps-hosting/studiely.nginx.conf` and set `root` to either:

- `/var/www/studiely/out` — Next export only, or  
- `/var/www/studiely/deploy` — if you use merge (step below) for preserved paths like `/legal/**`.

Then:

```bash
sudo cp vps-hosting/studiely.nginx.conf /etc/nginx/sites-available/studiely
sudo ln -sf /etc/nginx/sites-available/studiely /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

Build:

```bash
cd /var/www/studiely
set -a && source .env.production && set +a && npm ci && npm run build
```

Optional merge (while the old host still serves extra root paths); requires `PRESERVE_SYNC_ORIGIN` in `.env.production` pointing at that host:

```bash
SKIP_FLUTTER_APP_SYNC=1 npm run deploy:firebase:merge
```

If you use **`out/`** only, set Nginx `root` to `/var/www/studiely/out` and skip the merge.

```bash
sudo systemctl reload nginx
```

## 7. HTTPS

When `check:vps-dns` passes:

```bash
sudo certbot --nginx -d studiely.com -d www.studiely.com
```

Choose redirect to HTTPS. Confirm both `https://studiely.com` and `https://www.studiely.com` work; apex should redirect to **www** (adjust generated server blocks if needed).

## 8. Repeat deploys

```bash
cd /var/www/studiely
bash scripts/vps-deploy.sh
```

With preserved-root merge (only while `PRESERVE_SYNC_ORIGIN` still points at a useful host):

```bash
USE_MERGE=1 bash scripts/vps-deploy.sh
```

## 9. Firebase Hosting cutover

1. In [Firebase Console](https://console.firebase.google.com) → your project → **Hosting** → **Domains**: remove or disconnect **studiely.com** / **www.studiely.com** so they no longer point at Firebase.
2. Keep DNS A records on the VPS IP (step 5).
3. If Flutter links break after moving the marketing domain, set `NEXT_PUBLIC_STUDIELY_APP_ORIGIN` in `.env.production` to wherever `/app/` is hosted, then rebuild.

## Notes

- **SSH** must stay allowed in UFW before enabling the firewall (the setup script allows OpenSSH).
- **`/pricing`** redirects to the homepage (see Nginx config); Firebase previously sent it to the Flutter app.
- The **`deploy/`** folder on the server is merge output only; do not commit it (it remains gitignored).

## Troubleshooting

| Problem | What to do |
|--------|------------|
| `scripts/vps-setup.sh: No such file or directory` | You are not in the repo. Run `cd /var/www/studiely` and `ls scripts/vps-setup.sh` — if missing, complete **step 2** (clone) first. |
| `fatal: destination path '.' already exists and is not an empty directory` | Use an empty folder: `rm -rf /var/www/studiely/*` (only if it has no data you need) or pick another path. |

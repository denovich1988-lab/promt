#!/usr/bin/env bash
# One-time server setup for the Promt site.
# Run on a fresh Ubuntu 22.04/24.04 server as root:
#   bash setup.sh                    # site on the server's IP address
#   bash setup.sh example.com you@mail.com   # with your domain + free HTTPS
set -euo pipefail

DOMAIN="${1:-}"
EMAIL="${2:-}"
SITE_DIR=/var/www/promt
DEPLOY_USER=deploy

echo "==> Installing packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get install -y nginx rsync ufw
if [ -n "$DOMAIN" ]; then apt-get install -y certbot python3-certbot-nginx; fi

echo "==> Creating user '$DEPLOY_USER' for GitHub deploys"
id "$DEPLOY_USER" >/dev/null 2>&1 || adduser --disabled-password --gecos "" "$DEPLOY_USER"
mkdir -p "$SITE_DIR"
chown -R "$DEPLOY_USER:$DEPLOY_USER" "$SITE_DIR"
if [ ! -f "$SITE_DIR/index.html" ]; then
  echo '<!doctype html><meta charset="utf-8"><title>Promt</title><p style="font:18px system-ui;padding:40px">Server is ready. Waiting for the first deploy from GitHub…</p>' > "$SITE_DIR/index.html"
  chown "$DEPLOY_USER:$DEPLOY_USER" "$SITE_DIR/index.html"
fi

echo "==> Creating SSH key for GitHub Actions"
HOME_DIR=$(eval echo "~$DEPLOY_USER")
mkdir -p "$HOME_DIR/.ssh"
if [ ! -f "$HOME_DIR/.ssh/github_deploy" ]; then
  ssh-keygen -t ed25519 -N "" -C "github-actions-deploy" -f "$HOME_DIR/.ssh/github_deploy" >/dev/null
  cat "$HOME_DIR/.ssh/github_deploy.pub" >> "$HOME_DIR/.ssh/authorized_keys"
fi
chmod 700 "$HOME_DIR/.ssh"
chmod 600 "$HOME_DIR/.ssh/authorized_keys" "$HOME_DIR/.ssh/github_deploy"
chown -R "$DEPLOY_USER:$DEPLOY_USER" "$HOME_DIR/.ssh"

echo "==> Configuring nginx"
SERVER_NAME="${DOMAIN:-_}"
[ -n "$DOMAIN" ] && SERVER_NAME="$DOMAIN www.$DOMAIN"
cat > /etc/nginx/sites-available/promt <<NGINX
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name $SERVER_NAME;
    root $SITE_DIR;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript application/xml application/rss+xml image/svg+xml;

    location / {
        try_files \$uri \$uri/ =404;
    }
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public";
    }
    location ~* \.html$ {
        add_header Cache-Control "no-cache";
    }
    error_page 404 /404.html;

    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy strict-origin-when-cross-origin;
}
NGINX
ln -sf /etc/nginx/sites-available/promt /etc/nginx/sites-enabled/promt
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable --now nginx
systemctl reload nginx

echo "==> Firewall"
ufw allow OpenSSH >/dev/null
ufw allow 'Nginx Full' >/dev/null
ufw --force enable >/dev/null

if [ -n "$DOMAIN" ]; then
  echo "==> Getting HTTPS certificate for $DOMAIN"
  if [ -n "$EMAIL" ]; then
    certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --redirect --agree-tos -m "$EMAIL" --non-interactive || \
      echo "!! Certificate failed. Check that the domain's DNS points to this server, then run: certbot --nginx -d $DOMAIN -d www.$DOMAIN"
  else
    certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --redirect --agree-tos --register-unsafely-without-email --non-interactive || \
      echo "!! Certificate failed. Check that the domain's DNS points to this server, then run: certbot --nginx -d $DOMAIN -d www.$DOMAIN"
  fi
fi

IP=$(curl -s -4 ifconfig.me || hostname -I | awk '{print $1}')
echo
echo "================================================================"
echo " Server is ready."
echo
echo " Add these in GitHub: repo → Settings → Secrets and variables → Actions"
echo
echo "   Secret  SSH_HOST = $IP"
echo "   Secret  SSH_USER = $DEPLOY_USER"
echo "   Secret  SSH_KEY  = (everything between the lines below, including BEGIN/END)"
echo "----------------------------------------------------------------"
cat "$HOME_DIR/.ssh/github_deploy"
echo "----------------------------------------------------------------"
if [ -n "$DOMAIN" ]; then
  echo "   Variable SITE_URL = https://$DOMAIN"
else
  echo "   Variable SITE_URL = http://$IP"
fi
echo
echo " Keep the key private: do not post it anywhere else."
echo "================================================================"

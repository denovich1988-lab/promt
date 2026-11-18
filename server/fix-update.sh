#!/bin/sh
# One-time fix for servers created before the systemd timer was added.
set -e
cat > /etc/systemd/system/promt-update.service <<'U'
[Unit]
Description=Pull the latest Promt site build from GitHub
Wants=network-online.target
After=network-online.target

[Service]
Type=oneshot
ExecStart=/usr/local/bin/promt-update
U
cat > /etc/systemd/system/promt-update.timer <<'U'
[Unit]
Description=Update the Promt site every 5 minutes

[Timer]
OnBootSec=1min
OnUnitActiveSec=5min

[Install]
WantedBy=timers.target
U
rm -f /etc/cron.d/promt-update
systemctl daemon-reload
systemctl enable --now promt-update.timer
systemctl start promt-update.service
systemctl list-timers promt-update.timer --no-pager
echo "OK: site updated, timer active"

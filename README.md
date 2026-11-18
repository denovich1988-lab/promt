# Promt — сайт с промтами для нейросетей

Сайт собирается из файлов в `content/prompts/` и сам обновляется на сервере.

```
Claude пишет промты → GitHub (main) → GitHub Actions собирает сайт → ветка "site"
                                                                         ↓
                                     сервер каждые 5 минут забирает обновления
```

Ключи, пароли и SSH-доступ для обновлений не нужны: сервер сам забирает готовые файлы из публичной ветки `site`.

## Запуск сервера (один раз)

1. В Hetzner Cloud Console: **Add Server** → Ubuntu 24.04 → самый дешёвый тариф → IPv4 включён.
2. Откройте раздел **Cloud config** и вставьте туда весь текст из [`server/cloud-config.yaml`](server/cloud-config.yaml).
3. **Create & Buy now**. Через 3–5 минут сайт откроется по IP-адресу сервера.

## Домен и HTTPS (позже)

Направьте A-запись домена на IP сервера, затем на сервере выполните:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d вашдомен.com -d www.вашдомен.com --redirect
```

И укажите адрес сайта в `site.config.json` → `url`.

## Для разработки

```bash
npm install
npm run build   # собрать сайт в dist/
npm run serve   # открыть локально: http://localhost:4321
```

Как устроены файлы промтов, описано в `CLAUDE.md`.

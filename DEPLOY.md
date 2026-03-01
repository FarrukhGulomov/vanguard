# Vanguard Logistics — Deploy Guide

## Stack
- **Backend:** Node.js 20 + Express
- **Frontend:** Vanilla HTML/CSS/JS (static files served by Express)
- **Email:** Nodemailer (Yandex / Gmail / Corporate SMTP)
- **Process manager:** PM2

---

## 1. Local Development

```bash
cd vanguard-web
npm install
cp .env.example .env
# Edit .env — fill SMTP credentials
npm run dev        # nodemon (auto-reload)
# OR
npm start          # production mode
```

Open: http://localhost:3000

---

## 2. Email Setup (важно!)

All form submissions are sent to `RECIPIENT_EMAIL` in `.env`.

### Option A — Yandex Mail (рекомендуется для СНГ)
1. Зайдите на https://id.yandex.ru/security/app-passwords
2. Создайте пароль приложения для «Почта»
3. Заполните `.env`:
```
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your@yandex.ru
SMTP_PASS=xxxx-xxxx-xxxx-xxxx   # пароль приложения
RECIPIENT_EMAIL=anvarataev@vanguarduzb.com
```

### Option B — Gmail
1. Включите 2FA: https://myaccount.google.com
2. Создайте App Password: https://myaccount.google.com/apppasswords
3. Заполните `.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx   # 16-символьный пароль
RECIPIENT_EMAIL=anvarataev@vanguarduzb.com
```

### Option C — Corporate / cPanel SMTP
```
SMTP_HOST=mail.vanguarduzb.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@vanguarduzb.com
SMTP_PASS=your_mailbox_password
RECIPIENT_EMAIL=anvarataev@vanguarduzb.com
```

---

## 3. Deploy to VPS (Ubuntu / Debian)

### 3.1 Install Node.js 20
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # should be v20.x
```

### 3.2 Install PM2
```bash
sudo npm install -g pm2
```

### 3.3 Upload project files

**Via SCP:**
```bash
# from your local machine (exclude node_modules and .env)
scp -r vanguard-web/ user@YOUR_SERVER_IP:/var/www/
```

**Via Git:**
```bash
ssh user@YOUR_SERVER_IP
cd /var/www
git clone https://github.com/your-repo/vanguard-web.git
```

### 3.4 Install & Configure
```bash
cd /var/www/vanguard-web
npm install --production
cp .env.example .env
nano .env            # fill in SMTP and other values
mkdir -p logs        # PM2 log directory
```

### 3.5 Start with PM2
```bash
pm2 start ecosystem.config.js --env production
pm2 save             # save process list
pm2 startup          # auto-start on server reboot
# copy & run the command that pm2 prints
```

### 3.6 Verify
```bash
pm2 status           # should show "vanguard" as online
pm2 logs vanguard    # view live logs
curl http://localhost:3000   # should return HTML
```

---

## 4. Nginx (Reverse Proxy)

```bash
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/vanguard
```

Paste the following (replace domain):
```nginx
server {
    listen 80;
    server_name vanguarduzb.com www.vanguarduzb.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 1024;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/vanguard /etc/nginx/sites-enabled/
sudo nginx -t        # test config
sudo systemctl restart nginx
```

---

## 5. SSL / HTTPS (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d vanguarduzb.com -d www.vanguarduzb.com
# certbot auto-renews — verify:
sudo certbot renew --dry-run
```

---

## 6. Deploy to cPanel (shared hosting with Node.js Selector)

1. Login to cPanel → **Node.js Selector**
2. Create application:
   - Node.js version: **20.x**
   - Application root: `vanguard-web`
   - Application URL: your domain
   - Application startup file: `server.js`
3. Upload all files via File Manager (exclude `node_modules/`)
4. In Node.js Selector → **Run NPM Install**
5. Create `.env` file from `.env.example`
6. Click **Restart**

---

## 7. PM2 Commands (quick reference)

```bash
pm2 status                    # list processes
pm2 logs vanguard             # live logs
pm2 logs vanguard --lines 50  # last 50 lines
pm2 restart vanguard          # restart app
pm2 stop vanguard             # stop app
pm2 delete vanguard           # remove from PM2
pm2 monit                     # real-time dashboard
```

---

## 8. View Submissions (Admin API)

All form submissions are saved to `submissions.json` on the server.

```bash
# via curl (replace KEY and DOMAIN)
curl -H "x-admin-key: YOUR_ADMIN_KEY" https://vanguarduzb.com/api/admin/submissions
```

---

## 9. Update Deployment

```bash
# on server
cd /var/www/vanguard-web
git pull                      # if using git
npm install --production      # if dependencies changed
pm2 restart vanguard
```

---

## Checklist before going live

- [ ] `.env` filled with real SMTP credentials
- [ ] Test form submission → email received at `anvarataev@vanguarduzb.com`
- [ ] `ADMIN_KEY` changed to a random string
- [ ] `ALLOWED_ORIGIN` set to `https://vanguarduzb.com`
- [ ] SSL certificate installed (HTTPS)
- [ ] PM2 startup configured (`pm2 startup` + `pm2 save`)
- [ ] Nginx config tested (`sudo nginx -t`)

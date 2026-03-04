require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const { Resend } = require('resend');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
      scriptSrcAttr: ["'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  },
}));
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Слишком много запросов. Попробуйте через 15 минут.' }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ── Helpers ──────────────────────────────────────────────
/** Escape HTML to prevent XSS in email body */
const esc = (str) =>
  String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Build nodemailer transporter from env */
const createTransporter = () => {
  const port = parseInt(process.env.SMTP_PORT) || 587;
  const secure = port === 465;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure,
    requireTLS: !secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
  });
};

/** Branded HTML email template */
const buildEmailHtml = ({ name, phone, email, company, message, date }) => `
<!DOCTYPE html>
<html lang="ru">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0">
  <tr><td align="center" style="padding:32px 16px">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#0d2a6e,#10347a);border-radius:14px 14px 0 0;padding:28px 32px">
          <h1 style="margin:0;color:#D4A017;font-size:22px;letter-spacing:1px">VANGUARD LOGISTICS</h1>
          <p style="margin:6px 0 0;color:rgba(255,255,255,.75);font-size:13px">Новая заявка с сайта — ${esc(date)}</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="background:#fff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 14px 14px;padding:28px 32px">

          <h2 style="margin:0 0 20px;font-size:16px;color:#10347a">📋 Данные клиента</h2>

          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;color:#334155">
            <tr style="border-bottom:1px solid #f1f5f9">
              <td style="padding:10px 0;width:140px;color:#64748b;font-weight:600">Имя</td>
              <td style="padding:10px 0;font-weight:700;color:#1e293b">${esc(name)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9">
              <td style="padding:10px 0;color:#64748b;font-weight:600">Телефон</td>
              <td style="padding:10px 0;font-weight:700;color:#1e293b">
                <a href="tel:${esc(phone)}" style="color:#10347a;text-decoration:none">${esc(phone)}</a>
              </td>
            </tr>
            ${email ? `
            <tr style="border-bottom:1px solid #f1f5f9">
              <td style="padding:10px 0;color:#64748b;font-weight:600">Email</td>
              <td style="padding:10px 0">
                <a href="mailto:${esc(email)}" style="color:#10347a">${esc(email)}</a>
              </td>
            </tr>` : ''}
            ${company ? `
            <tr style="border-bottom:1px solid #f1f5f9">
              <td style="padding:10px 0;color:#64748b;font-weight:600">Компания</td>
              <td style="padding:10px 0">${esc(company)}</td>
            </tr>` : ''}
            ${message ? `
            <tr>
              <td style="padding:10px 0;color:#64748b;font-weight:600;vertical-align:top">Сообщение</td>
              <td style="padding:10px 0;line-height:1.6">${esc(message).replace(/\n/g, '<br>')}</td>
            </tr>` : ''}
          </table>

          <!-- CTA -->
          <div style="margin-top:24px;padding:16px;background:#f8fafc;border-radius:10px;border-left:4px solid #D4A017">
            <p style="margin:0;font-size:13px;color:#64748b">
              Ответьте клиенту как можно скорее. Все заявки также сохраняются в <b>submissions.json</b> на сервере.
            </p>
          </div>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:16px 0;text-align:center;font-size:12px;color:#94a3b8">
          Vanguard Logistics · +998 77 746 22 22 · anvarataev@vanguarduzb.com
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;

// ── Save submission to JSON ───────────────────────────────
const saveSubmission = (data) => {
  const file = path.join(__dirname, 'submissions.json');
  let submissions = [];
  if (fs.existsSync(file)) {
    try { submissions = JSON.parse(fs.readFileSync(file, 'utf8')); } catch {}
  }
  submissions.push({ ...data, date: new Date().toISOString() });
  fs.writeFileSync(file, JSON.stringify(submissions, null, 2));
};

// ── Contact form endpoint ─────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, phone_code, phone, email, company, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Имя и телефон обязательны.' });
  }
  if (String(name).length > 100 || String(phone).length > 30) {
    return res.status(400).json({ success: false, message: 'Неверные данные.' });
  }

  // Combine country code + local number
  const fullPhone = phone_code
    ? `${String(phone_code).trim()} ${String(phone).trim()}`
    : String(phone).trim();

  const submission = {
    name:    String(name).trim(),
    phone:   fullPhone,
    email:   String(email   || '').trim(),
    company: String(company || '').trim(),
    message: String(message || '').trim(),
  };

  // Always save to file
  saveSubmission(submission);

  // Send email
  const date = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' });
  const recipient = process.env.RECIPIENT_EMAIL || 'anvarataev@vanguarduzb.com';
  const fromAddr = process.env.SMTP_FROM || 'noreply@vanguarduzb.com';

  if (process.env.RESEND_API_KEY) {
    // Resend HTTP API — works on Railway without SMTP port issues
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `Vanguard Logistics Сайт <${fromAddr}>`,
        to: recipient,
        replyTo: submission.email || undefined,
        subject: `Новая заявка: ${submission.name} (${submission.phone})`,
        html: buildEmailHtml({ ...submission, date }),
      });
    } catch (err) {
      console.error('[Email error]', err.message);
    }
  } else if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    // Fallback: SMTP
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"Vanguard Logistics Сайт" <${fromAddr}>`,
        to: recipient,
        replyTo: submission.email || undefined,
        subject: `Новая заявка: ${submission.name} (${submission.phone})`,
        html: buildEmailHtml({ ...submission, date }),
        text: `Имя: ${submission.name}\nТелефон: ${submission.phone}\nEmail: ${submission.email || '—'}\nКомпания: ${submission.company || '—'}\nСообщение: ${submission.message || '—'}`,
      });
    } catch (err) {
      console.error('[Email error]', err.message);
    }
  }

  res.json({ success: true, message: 'Заявка принята! Мы свяжемся с вами в ближайшее время.' });
});

// ── Admin: view submissions ───────────────────────────────
app.get('/api/admin/submissions', (req, res) => {
  if (req.headers['x-admin-key'] !== process.env.ADMIN_KEY) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  const file = path.join(__dirname, 'submissions.json');
  if (!fs.existsSync(file)) return res.json([]);
  try {
    res.json(JSON.parse(fs.readFileSync(file, 'utf8')));
  } catch {
    res.status(500).json({ error: 'Cannot read submissions.' });
  }
});

// ── SPA fallback ──────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n✅ Vanguard Logistics — http://localhost:${PORT}`);
  console.log(`   Email: ${process.env.SMTP_USER ? '✅ configured' : '⚠️  not configured (set SMTP_* in .env)'}\n`);
});

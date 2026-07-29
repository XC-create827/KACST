# إدارة استقطاب الكفاءات — Talent Acquisition Department (KACST)

PostgreSQL-backed recruiting platform: CV database, sourcing pipeline,
assessments, job roles, and talent-acquisition KPIs. Arabic (RTL).

Built for scale — filtering, search, ranking and KPIs all run as SQL,
lists are paginated, and each change updates a single row instead of
rewriting the dataset.

## Files

| File | Purpose |
|---|---|
| `index.html` | Entire frontend |
| `server.js` | API server |
| `db/schema.sql` | Tables + indexes (applied automatically on startup) |
| `db/optional-indexes.sql` | Trigram search indexes (applied separately) |
| `render.yaml` | Render Blueprint — provisions web service **and** database |
| `package.json` | Dependencies (`express`, `pg`) |

## Deploying to Render

**New + → Blueprint**, point at this repo. `render.yaml` creates both
the web service and a managed PostgreSQL database and wires
`DATABASE_URL` between them. **No disk needed** — everything, including
résumé files, lives in Postgres.

Then set these in the dashboard (Environment tab):

| Key | Value |
|---|---|
| `BASIC_AUTH_USER` | e.g. `admin` |
| `BASIC_AUTH_PASS` | a strong password |

Without them anyone with the URL can read all candidate data and
download résumés. The server logs a warning at startup if unset.

**Manual setup instead:** Runtime `Node`, Root Directory blank,
Build `npm install`, Start `npm start`, and add `DATABASE_URL` pointing
at your PostgreSQL instance.

## Running locally

```bash
npm install
export DATABASE_URL="postgres://user:pass@localhost:5432/talent"
export PGSSL=off          # local databases usually have no TLS
npm start
```

Open http://localhost:3000 — the schema creates itself on first run.

## Environment variables

| Variable | Required | Notes |
|---|---|---|
| `DATABASE_URL` | **yes** | PostgreSQL connection string |
| `BASIC_AUTH_USER` / `BASIC_AUTH_PASS` | strongly recommended | Enables login |
| `PGSSL` | no | Set `off` for local databases without TLS |
| `PG_POOL_MAX` | no | Connection pool size (default 10) |
| `PORT` | no | Default 3000 |

## Scale characteristics

- Candidate lists load 50 at a time; the browser never holds the full table.
- Search, filters and rankings execute in SQL against indexed columns.
- Résumé files live in their own table, so listing/searching candidates
  never transfers PDF data.
- Stage changes write one row plus one history row.

Comfortable well into tens of thousands of candidates. If volumes grow
far beyond that, the natural next step is moving résumé blobs to
S3-compatible object storage — only the `resume_files` reads/writes in
`server.js` would change.

## Known gaps before production use

- **One shared login.** No individual accounts, roles, or permissions.
- **No audit trail.** Deletions are permanent and unattributed.
- **Data residency.** If KACST is subject to PDPL restrictions on
  transferring personal data abroad, verify the hosting region before
  real CVs are entered.
- **Backups.** Configure them on the database — none are automatic.

## Testing status

Verified: KPI query logic against a real SQL engine with known
fixtures (interview→offer, offer→join, time-to-hire, vacancy fill,
jobs-filled/approved, rankings, pagination); all five views rendering
from a mocked API; every endpoint the UI calls; pagination and search
wiring.

**Not verified:** the server has never run against a live PostgreSQL
instance — none was available in the build environment. Run it once
against a real database and click through each screen before trusting
it. Expect the possibility of a minor dialect fix.


---

## التشغيل على خوادم الجهة خلف Cloudflare (دليل فريق التقنية)

المنصة تطبيق Node.js قياسي + قاعدة PostgreSQL — تعمل على أي خادم افتراضي أو حاوية، وCloudflare أمامها مدعوم من الكود مباشرة (قراءة `CF-Connecting-IP` لعدّادات الحماية، و`X-Forwarded-Proto` للكوكيز الآمنة).

### المتطلبات
- Node.js 18 أو أحدث
- PostgreSQL 13 أو أحدث (قاعدة فارغة تكفي — الجداول تُنشأ تلقائيًا عند أول تشغيل)
- ذاكرة 512MB فأكثر

### خطوات التشغيل
```bash
npm install
export DATABASE_URL="postgres://USER:PASS@HOST:5432/DBNAME"
export ADMIN_USER="اسم_مستخدم_المشرف_الأول"
export ADMIN_PASSWORD="كلمة_مرور_قوية"
# اختياري — لاستعادة كلمة المرور بالبريد:
# export SMTP_HOST=... SMTP_PORT=587 SMTP_USER=... SMTP_PASS=... SMTP_FROM=...
node server.js        # أو عبر pm2 / systemd للتشغيل الدائم
```
سيطبع السجل `Database schema is ready` ثم يستمع على المنفذ 3000 (قابل للتغيير عبر `PORT`).

### إعداد Cloudflare أمام الخادم
- سجل DNS من نوع Proxied (السحابة البرتقالية) موجهًا للخادم
- وضع التشفير: **Full (strict)** مع شهادة على الخادم الأصلي (أو Cloudflare Origin Certificate)
- لا حاجة لأي تعديل في الكود — الترويسات مقروءة أصلًا
- إن وُجد Nginx وسيطًا بين Cloudflare والتطبيق، مرِّر الترويسات:
  `proxy_set_header X-Forwarded-Proto $scheme;` و `proxy_set_header CF-Connecting-IP $http_cf_connecting_ip;`

### حدود معروفة خلف Cloudflare (كلها ضمن الأمان)
- رفع الملفات عبر الخطة المجانية محدود بـ 100MB للطلب — سقف المنصة 10MB للملف، فلا تعارض
- الاستجابة يجب أن تبدأ خلال ~100 ثانية — تصديرا الإكسل والـ ZIP يبدآن البث فورًا، فلا تعارض
- المنصة لا تستخدم WebSockets — لا شيء يحتاج إعدادًا خاصًا

### ملاحظة تصنيفية مهمة
المنصة **لا** تعمل على Cloudflare Workers/Pages (بيئة دوال لحظية لا تناسب خادم Express دائمًا باتصال PostgreSQL ومكتبات توليد الملفات). المطلوب: أي خادم Node عادي — **خلف** Cloudflare.

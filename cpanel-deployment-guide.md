# BMO 150th Week Celebration — Complete cPanel & Production Deployment Guide

This guide is designed for developers of all experience levels deploying the **BMO React + PHP + MySQL** website onto **cPanel**.

---

## Architecture Overview

```text
cPanel public_html/
│
├── index.html                   (From React "dist" folder)
├── assets/                      (From React "dist/assets" folder)
│   ├── index-xxxxx.js
│   └── index-xxxxx.css
│
├── api/                         (Uploaded from project /api)
│   ├── config/
│   │   └── database.php         (Contains your cPanel MySQL credentials)
│   ├── endpoints/
│   │   ├── event.php
│   │   ├── settings.php
│   │   ├── journey.php
│   │   ├── testimonials.php
│   │   ├── gallery.php
│   │   └── contact.php
│   ├── uploads/
│   │   └── gallery/
│   └── .htaccess
│
└── .htaccess                    (Apache routing for frontend & security)
```

---

## Step 1: Build the React Frontend

On your local machine or build terminal:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the production bundle:
   ```bash
   npm run build
   ```

3. This creates a `dist/` folder containing:
   - `index.html`
   - `assets/` (bundled JS and CSS)

---

## Step 2: Create MySQL Database & User in cPanel

1. Log into your **cPanel** dashboard.
2. In the **Databases** section, click **MySQL® Databases** (or **MySQL® Database Wizard**).
3. **Create New Database**:
   - Enter name: `bmodb` (cPanel will prefix this, e.g., `cpaneluser_bmodb`).
   - Click **Create Database**.
4. **Create New Database User**:
   - Username: `bmouser` (e.g., `cpaneluser_bmouser`).
   - Password: Click **Password Generator** to create a strong password (copy and save it!).
   - Click **Create User**.
5. **Add User to Database**:
   - Select your user (`cpaneluser_bmouser`) and database (`cpaneluser_bmodb`).
   - Click **Add**.
   - Check **ALL PRIVILEGES**.
   - Click **Make Changes**.

---

## Step 3: Import `database.sql` in phpMyAdmin

1. In cPanel, navigate to **Databases** → **phpMyAdmin**.
2. From the left sidebar, click your new database (e.g., `cpaneluser_bmodb`).
3. Click the **Import** tab at the top.
4. Click **Choose File** and select `database.sql` from your project root.
5. Leave format as **SQL** and click **Go** / **Import**.
6. You will see success messages confirming tables created:
   - `event_settings`
   - `testimonials`
   - `gallery`
   - `event_highlights`
   - `contact_messages`
   - `journey_milestones`
   - `social_links`

---

## Step 4: Configure `api/config/database.php`

Open `api/config/database.php` in your code editor or cPanel File Manager and edit these 4 values:

```php
private $host = "localhost";                     // Usually "localhost" on cPanel
private $db_name = "cpaneluser_bmodb";          // Your prefixed cPanel DB name
private $username = "cpaneluser_bmouser";       // Your prefixed cPanel DB user
private $password = "YourStrongGeneratedPassword"; // Your database password
```

> **Security Note:** Never commit this file with production credentials to public GitHub repositories.

---

## Step 5: Upload Files to cPanel `public_html`

1. Open cPanel **File Manager** and enter `public_html/`.
2. Upload the contents of your React **`dist/`** folder:
   - Upload `dist/index.html` directly to `public_html/index.html`.
   - Upload the `dist/assets/` folder to `public_html/assets/`.
3. Upload the **`api/`** folder to `public_html/api/`:
   - `public_html/api/config/database.php`
   - `public_html/api/endpoints/`
   - `public_html/api/uploads/gallery/`
   - `public_html/api/.htaccess`
4. Set folder permissions:
   - Folders: `755`
   - Files: `644`
   - `public_html/api/uploads/`: `755` (or `775` if script upload is used)

---

## Step 6: Create or Verify `public_html/.htaccess`

Create a `.htaccess` file in `public_html/` with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Do NOT rewrite requests to /api/
  RewriteCond %{REQUEST_URI} ^/api/ [NC]
  RewriteRule ^ - [L]

  # Direct file or directory requests are served directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # All other requests are routed to index.html for React SPA
  RewriteRule ^ index.html [L]
</IfModule>

# Force HTTPS
<IfModule mod_rewrite.c>
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

---

## Step 7: Testing the Deployment

### 1. Test the PHP GET APIs
Open in your browser:
- `https://yourdomain.com/api/endpoints/event.php`
  - Expected output: `{"success": true, "data": { ... }}`
- `https://yourdomain.com/api/endpoints/journey.php`
- `https://yourdomain.com/api/endpoints/testimonials.php`
- `https://yourdomain.com/api/endpoints/gallery.php`

### 2. Test the Contact Form
1. Open `https://yourdomain.com/#contact`.
2. Enter test data:
   - Full Name: `Test Member`
   - Business Name: `Delta Tech`
   - Phone: `+91 98400 12345`
   - Email: `test@domain.com`
   - Message: `Excited for the 150th Week Celebration!`
3. Click **SEND MESSAGE**.
4. You should see:
   > *"Thank you! Your message has been received by BMO desk."*
5. In phpMyAdmin, check the `contact_messages` table to see your record!

---

## Step 8: Troubleshooting

| Issue | Likely Cause | Solution |
|---|---|---|
| **500 Internal Server Error** on API | Wrong DB credentials | Check `api/config/database.php` host, user, password, and DB name in cPanel. |
| **API returns 404** | Folder placed incorrectly | Ensure endpoints are at `public_html/api/endpoints/event.php`. |
| **CORS errors** | Running frontend on separate port | Both React and PHP live on the same domain in cPanel, eliminating CORS issues. |
| **Images not loading** | Remote URLs or upload path | Check `src/config/images.js` or uploads path `public_html/api/uploads/gallery/`. |
| **Blank white screen** | Base path mismatch | Ensure `vite.config.ts` has `base: './'` or `/` matching your domain root. |
| **Check PHP error logs** | In cPanel | Open **File Manager** → `public_html/api/error_log` to read actual PHP exceptions. |

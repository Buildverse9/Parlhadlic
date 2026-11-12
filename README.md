# Pralhad LIC Official Advisory Website

A modern, high-converting, mobile-responsive Life Insurance Corporation of India (LIC) advisory website for **Pralhad** (Chief Life Insurance Advisor).

Featuring:
- **Full Active LIC Plans Catalog (Categorized)**: Endowment, Whole Life, Money Back, Term Assurance, Pension/Annuity, Child Education, and ULIPs.
- **Interactive "Money & Maturity" Calculator**: Live calculation answering *"How much money will I get in how many years"*, with 1st year/renewal premiums, daily equivalent cost, bonus accruals, milestone payouts, lump-sum maturity, and visual cashflow charts.
- **Agent Sales Playbook**: Embedded psychological buying triggers, comparison of LIC vs Bank FDs vs Mutual Funds, Section 37 Sovereign Guarantee details, and human life value arguments.
- **1-Click WhatsApp Lead & Quote Generator**: Pre-formatted quotation messages sent directly to Advisor Pralhad's WhatsApp.
- **Official Benefit Illustration Generator**: Printable quotation slip for clients.
- **Zero-Dependency Architecture**: Built for instant hosting on **GitHub Pages** with zero build errors.

---

## 🚀 How to Upload & Publish on GitHub Pages (In 2 Minutes)

Because this website is built with pure, modern web standards and relative links, it requires **zero build steps** or Node.js server setup on GitHub Pages.

### Method 1: Using Git Terminal (Recommended)

1. Open PowerShell or Command Prompt in this folder (`D:\Users Profiles\Yesh\Downloads\Pralhadlic\Parlhadlic`):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of Pralhad LIC website"
   ```

2. Create a new public (or private) repository on GitHub named `Pralhadlic` (or `username.github.io`).

3. Link your remote and push:
   ```powershell
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/Pralhadlic.git
   git push -u origin main
   ```

4. **Activate GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** (top navigation tab) -> **Pages** (in the left sidebar).
   - Under **Build and deployment**:
     - Source: Select **Deploy from a branch**.
     - Branch: Select **`main`** and folder **`/(root)`**.
     - Click **Save**.
   - In 30 to 60 seconds, your site will be live at:
     ```
     https://<YOUR_GITHUB_USERNAME>.github.io/Pralhadlic/
     ```

---

### Method 2: Via GitHub Web Interface (No Command Line Required)

1. Go to [github.com](https://github.com) and click **New Repository**.
2. Name it `Pralhadlic` and make it **Public**.
3. Click **Upload an existing file**.
4. Drag and drop all files from this directory (`index.html`, `config.js`, `.nojekyll`, folders `css`, `js`, `data`, `assets`) into GitHub and click **Commit changes**.
5. Go to **Settings** -> **Pages** -> choose branch `main` -> click **Save**.

---

## 🛠️ How to Customize Advisor Details

To change Pralhad's phone number, WhatsApp number, branch name, or agency code across the **entire website and all WhatsApp links**, simply edit the `config.js` file:

```javascript
// config.js
const SITE_CONFIG = {
  advisorName: "Pralhad",
  advisorFullName: "Pralhad - Senior Life Insurance Advisor",
  agencyCode: "03458921",
  branchName: "Branch Office 883, Division I",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // No + or spaces (for WhatsApp wa.me links)
  email: "pralhad.licadvisor@gmail.com",
  officeAddress: "Office No. 104, LIC Advisory Center, Main Market Road",
  city: "City Center",
  experienceYears: "15+",
  satisfiedFamilies: "2,500+",
  claimsSettledPercent: "98.5%"
};
```
Save `config.js`, and the whole site updates automatically!

---

## 💻 How to Preview Locally

Simply double-click `index.html` in Windows Explorer to open it in Google Chrome, Microsoft Edge, or any modern browser.

Or run a lightweight local server if you have Node.js installed:
```powershell
npx serve .
```

---

## 📁 Project Structure

```
Pralhadlic/
│
├── index.html                  # Main Single-Page Application (SEO, Hero, Catalog, Calculator, FAQs)
├── config.js                   # Centralized Advisor Configuration (Phone, WhatsApp, Branch, etc.)
├── .nojekyll                   # GitHub Pages configuration to bypass Jekyll
├── README.md                   # This documentation & deployment guide
│
├── css/
│   └── styles.css              # Custom styling, animations, print stylesheet for quotations
│
├── js/
│   ├── app.js                  # Application orchestrator, dynamic branding, search/filters, modals
│   ├── calculator.js           # LIC math engine (premiums, GST, SRB bonus, FAB, survival schedules)
│   └── quotation.js            # Printable official illustration generator & WhatsApp lead links
│
├── data/
│   └── plans.js                # Database of active LIC plans with table numbers & sales pitches
│
└── assets/
    └── images/
        ├── emblem.svg          # Official Section 37 Sovereign Guarantee Gold Seal
        ├── hero-family.svg     # Family financial protection vector illustration
        ├── child-education.svg # Child education graduation illustration
        ├── retirement.svg      # Peaceful retirement illustration
        ├── wealth-growth.svg   # Compounding wealth growth illustration
        └── favicon.svg         # Browser tab icon
```

---

## ⚖️ Statutory Note
*Life Insurance Corporation of India (LIC) is backed by the Government of India under Section 37 of the LIC Act, 1956. This website is tailored for licensed Life Insurance Advisors to present official plan information and calculate benefit illustrations.*

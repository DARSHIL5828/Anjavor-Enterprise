# Anjavor Enterprise – Marketing Website

A modern, high-performance, dark-glassmorphism marketing website for **Anjavor Enterprise**, showcasing our two flagship software platforms:
1. **Anjavor VAPT**: Vulnerability Assessment & Penetration Testing Platform.
2. **Anjavor One**: Unified IT Asset, Device & Log Management Platform.

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v3 (custom glassmorphism design system)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **SEO & Meta**: `react-helmet-async`, automated JSON-LD schemas, automated sitemap generation, build-time route prerendering
- **Deployment Target**: Netlify (includes `netlify.toml` security headers and `public/_redirects` SPA fallback)

---

## Getting Started

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (version 18 or higher) and `npm` are installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Development Server)
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
This runs:
1. `vite build` (compiles and bundles optimized React assets to `dist/`)
2. `node scripts/generate-sitemap.mjs` (automatically generates `sitemap.xml` from configured routes)
3. `node scripts/prerender.mjs` (prerenders static HTML files for every route with SEO tags, Open Graph tags, and JSON-LD schemas)

To preview the production build locally:
```bash
npm run preview
```

---

## How to Customize

### 1. How to Change `siteUrl`
All canonical tags, Open Graph URLs, and `sitemap.xml` pull directly from `src/config/site.js`.

Open `src/config/site.js`:
```javascript
const siteConfig = {
  siteUrl: 'https://your-custom-domain.com', // Change this URL
  // ...
};
```
Whenever you update `siteUrl`, run `npm run build` to regenerate `sitemap.xml` and prerendered HTML tags.

### 2. How to Change the Contact Email
Open `src/config/site.js`:
```javascript
const siteConfig = {
  email: 'your-new-email@example.com', // Update contact email
  // ...
};
```
This updates the contact email across the entire website, including the Footer, Contact page, Privacy Policy, Terms of Service, and JSON-LD metadata.

### 3. How to Replace the Logo
- **Main SVG Logo**: Replace or update `src/assets/logo.svg`.
- **Favicon & Web App Icon**: Replace `public/favicon.svg` with your SVG logo or favicon assets.
- Both files are standard SVGs and can be edited directly with any vector editor or text editor.

---

## Deployment to Netlify

### Continuous Deployment (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Link your repository in the [Netlify Dashboard](https://app.netlify.com/).
3. Netlify will automatically detect `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploys will automatically include security headers (`X-Frame-Options`, `Content-Security-Policy`, etc.) and the SPA redirect rule from `_redirects`.

### Netlify CLI Deployment
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

---

## Project Structure

```
├── public/
│   ├── _redirects              # Netlify SPA redirect rule (/* /index.html 200)
│   ├── favicon.svg             # Shield favicon
│   ├── robots.txt              # Search crawler rules pointing to sitemap
│   └── site.webmanifest        # PWA / web application manifest
├── scripts/
│   ├── generate-sitemap.mjs    # Generates sitemap.xml from siteConfig
│   └── prerender.mjs           # Prerenders static HTML per route
├── src/
│   ├── assets/
│   │   └── logo.svg            # Primary SVG shield logo
│   ├── components/
│   │   ├── AnimatedCounter.jsx # Animated number counter
│   │   ├── AnimatedSection.jsx # Framer Motion scroll entrance triggers
│   │   ├── CTASection.jsx      # Reusable call-to-action banner
│   │   ├── DashboardPreview.jsx# Animated mock dashboards with sample data
│   │   ├── FAQAccordion.jsx    # Accessible expandable accordion
│   │   ├── FeatureGrid.jsx     # Glassmorphic feature grid
│   │   ├── Footer.jsx          # Comprehensive footer with links & email
│   │   ├── GlassCard.jsx       # Reusable dark glassmorphism card
│   │   ├── HowItWorks.jsx      # Interactive numbered step flow
│   │   ├── Navbar.jsx          # Responsive sticky navigation & mobile drawer
│   │   ├── SEO.jsx             # React Helmet Async meta tag manager
│   │   ├── ScrollToTop.jsx     # Scrolls window to top on route navigation
│   │   └── SectionHeader.jsx   # Consistent typography headers & badges
│   ├── config/
│   │   └── site.js             # Central configuration (siteUrl, email, routes)
│   ├── data/
│   │   ├── faq.js              # 15+ grouped questions and answers
│   │   ├── one.js              # Anjavor One module details and workflows
│   │   ├── services.js         # Professional service details and processes
│   │   └── vapt.js             # Anjavor VAPT module details and workflows
│   ├── hooks/
│   │   ├── useCountUp.js       # Smooth numerical counter hook
│   │   └── useScroll.js        # Window scroll position hook
│   ├── pages/
│   │   ├── Home.jsx            # Animated homepage with product highlights
│   │   ├── Products.jsx        # Product overview & comparison matrix
│   │   ├── VAPTProduct.jsx     # Full 18-module VAPT product deep dive
│   │   ├── OneProduct.jsx      # Full 8-module Anjavor One deep dive
│   │   ├── Services.jsx        # Professional cybersecurity & IT services
│   │   ├── Security.jsx        # Trust, RBAC, tenant isolation & safeguards
│   │   ├── About.jsx           # Mission, vision, core values & beliefs
│   │   ├── FAQ.jsx             # Categorized FAQ with search & FAQPage schema
│   │   ├── Contact.jsx         # Netlify demo request form & validation
│   │   ├── Privacy.jsx         # Software company Privacy Policy
│   │   ├── Terms.jsx           # Terms of Service with authorized testing mandate
│   │   └── NotFound.jsx        # Styled 404 page with navigation fallbacks
│   ├── App.jsx                 # Top-level route switchboard and layout
│   ├── index.css               # Design tokens, gradients, glass utilities
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML entry point with typography preconnects
├── netlify.toml                # Netlify build configuration & security headers
├── package.json                # Project dependencies and build scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom colors, fonts, and dark tokens
└── vite.config.js              # Vite configuration
```

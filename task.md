Build a complete, professional, fully animated, multi-page marketing website for "Anjavor Enterprise", a cybersecurity and IT software company with two products. Output a full working project, not snippets.

## TECH STACK
- Vite + React 18 + React Router, Tailwind CSS, Framer Motion for animation, react-helmet-async for SEO tags, lucide-react for icons.
- Deploy target: Netlify. Include netlify.toml and public/_redirects (/* /index.html 200) so page refresh never gives a 404.
- Every route must be prerendered to static HTML at build time (use vite-react-ssg or an equivalent prerender approach) so each page has real HTML for SEO.
- One config file src/config/site.js holding: siteUrl (default "https://anjavor.netlify.app", I will change it later when I add my domain), company name, email "anjavor.technologies@gmail.com", route list. Canonical tags, Open Graph URLs, and sitemap.xml must all read siteUrl from this file. Generate sitemap.xml automatically from the route list at build time.
- No login, logout, signup, or user accounts anywhere on the site. Public pages only.

## COMPANY AND PRODUCTS
Company: Anjavor Enterprise. Tagline: "Discover. Assess. Remediate. Secure."
Both products are live and built. Present them as available now. Use only the capabilities listed below. Do NOT invent extra features, statistics, customer names, logos, testimonials, awards, certifications (no ISO/SOC claims), team members, founding year, address, or phone number.

### Product 1: Anjavor VAPT
A Vulnerability Assessment and Penetration Testing platform that helps organizations discover, assess, prioritize, validate, and remediate security vulnerabilities.
Modules:
1. Executive Dashboard: security posture, risk scores, vulnerability trends, critical findings, scan activity
2. Organization Management: multi-tenant organizations, teams, projects, users, roles, RBAC
3. Asset Discovery: IP addresses, domains, subdomains, servers, cloud assets, APIs, web applications
4. Vulnerability Scanning: network scanning, service detection, CVE identification, misconfiguration checks
5. Web Application Security: OWASP Top 10 checks, authentication testing, security headers, TLS analysis
6. API Security Testing: REST/GraphQL discovery, authentication checks, API misconfiguration detection
7. Network VAPT: port scanning, protocol analysis, exposed services, network security assessment
8. Cloud Security Assessment: AWS, Azure, GCP configuration assessments, IAM reviews, exposed resources
9. Vulnerability Management: CVSS scoring, CVE mapping, severity classification, deduplication, prioritization
10. Penetration Testing Workspace: authorized testing workflows, evidence collection, manual findings, validation
11. Scan Management: scheduled scans, templates, history, progress tracking, retry controls
12. Remediation Management: assign findings, track fixes, SLA monitoring, retesting, exception management
13. Compliance Assessment: OWASP, CIS Controls, ISO 27001, PCI DSS, NIST mapping (describe as "mapping", never as certification)
14. Reporting Engine: executive PDF reports, technical reports, evidence, CSV/JSON exports
15. Integrations and API: Jira, ServiceNow, Slack, Microsoft Teams, SIEM, REST API
16. Audit and Activity Logs: user actions, scan events, configuration changes, export history
17. AI Security Assistant: finding explanations, remediation suggestions, report drafting, risk summaries
18. Platform Administration: licensing, subscriptions, scan quotas, worker health, tenant settings

### Product 2: Anjavor One
A unified IT asset management, device management, and log management platform.
Modules:
1. Asset Inventory: laptops, desktops, servers, software, hardware
2. MDM / UEM: Windows, macOS, Linux, Android, iOS device management
3. Log Management: centralized logs, search, retention, alerts
4. Organization Management: multiple companies, departments, users, RBAC
5. Endpoint Security: compliance, encryption status, antivirus, patch visibility
6. Remote Management: device commands, scripts, remote actions
7. Identity Management: Microsoft Entra ID and Google Workspace integration
8. Reporting: IT inventory, compliance, audit reports

## PAGES AND ROUTES (each with its own unique title, meta description, canonical, Open Graph, Twitter card)
- / Home: animated hero with tagline and two CTAs ("Request a Demo", "Explore Products"); animated floating dashboard previews; two product cards; "What we do" overview; problems we solve; headline features (6 to 8 per product, not all modules); how the two products work together; benefits by audience (security teams, IT teams, management); use cases; why Anjavor; short FAQ; final CTA band.
- /products: overview and a side-by-side comparison table of the two products.
- /products/anjavor-vapt: hero, overview, full 18-module grid, "How it works" (add assets, scan, review and prioritize findings, assign and fix, retest, report), animated dashboard preview (sample data), benefits, use cases, integrations, authorized-testing statement, FAQ, demo CTA.
- /products/anjavor-one: same structure with its 8 modules and its own how-it-works flow (enroll devices, inventory, collect logs, monitor compliance, alert, report).
- /services: penetration testing, vulnerability assessments, security audits, log monitoring setup, asset tracking setup, device management setup, consulting and support. Describe each in 2 to 3 sentences plus a clear process.
- /security: trust and security page covering RBAC, multi-tenant isolation, audit logs, data handling principles. Describe only design principles, no certification claims.
- /about: mission, vision, values, what we believe. No invented history or team.
- /faq: 15 or more questions grouped by topic (general, VAPT, Anjavor One, pricing and demo, security).
- /contact: Request a Demo and Contact form (name, work email, company, product of interest dropdown [Anjavor VAPT, Anjavor One, Both, Services], message) with JavaScript validation, Netlify Forms compatible (data-netlify="true", honeypot field, success message). Show email anjavor.technologies@gmail.com. NO phone, NO address, NO WhatsApp. Pricing text: "Contact us for pricing."
- /privacy and /terms: sensible generic pages written for a software company, using the email above.
- 404 page, styled, with links home.

## DESIGN: PREMIUM DARK GLASSMORPHISM
- Deep navy/black base. Glass cards: semi-transparent white (5 to 12%), backdrop-filter blur, 1px light border, soft shadows, rounded corners, subtle glowing gradient blobs behind the glass.
- Accents: shared navy base; Anjavor VAPT uses cyan; Anjavor One uses blue/emerald. Define all colors, radii, and blur as CSS variables/Tailwind tokens.
- Use solid, high-contrast cards (not glass) for long text sections so reading stays easy. Text contrast must meet WCAG AA.
- Typography: Google Fonts (e.g., Inter or Plus Jakarta Sans for body, Space Grotesk or Sora for headings), with fallbacks.
- Sticky glass navbar with a Products dropdown, mobile hamburger menu, active-link styling, and a "Request a Demo" button.
- Rich footer on every page: quick links, products, services, legal links, email, copyright.
- Looks credible to enterprise buyers: no hacker clichés (no hooded figures, no green code rain, no terminal gimmicks).

## ANIMATION: FULLY ANIMATED, BUT CONTROLLED
Every section, card, and component animates. Specifically:
- Scroll-triggered entrance animations on every section and card (fade, slide, scale) with staggered children.
- Hover effects on every card and button: lift, glow, border light-up, subtle tilt on key cards.
- Hero: animated gradient blobs, floating dashboard mockups with parallax, animated headline text reveal, typing or rotating keywords.
- Dashboard previews: charts that draw themselves, bars that grow, donut charts that fill, numbers that count up, live-looking scan progress bars, pulsing status dots. Label them "Sample data".
- "How it works" steps animate in sequence with a connecting line that draws as you scroll.
- Animated page transitions between routes, animated navbar on scroll, animated accordion for FAQ, animated tab switches, animated mobile menu.
- Smooth scroll, scroll progress bar, animated section dividers, button ripple or shine effect.
- Rules: animate only transform and opacity for performance; keep motion smooth at 60fps on mid-range phones; respect prefers-reduced-motion by disabling or simplifying animations; never let animation hide content from users or crawlers.

## IMAGES AND LOGO
- Logo: create an SVG shield icon with the wordmark "Anjavor" (temporary logo, in src/assets/logo.svg so I can replace it easily). Also generate favicon files and a web app manifest from it.
- Generate all visuals in code: SVG illustrations, icon sets (lucide-react), CSS gradient backgrounds, grid patterns, and fully coded dashboard mockups in React with sample data. Do not leave empty image slots or broken images.
- If photos are ever needed and you can download files, use only free-license sources (Unsplash or Pexels), save them locally in public/images as compressed WebP, and never hotlink. Otherwise use generated SVG visuals instead.
- Add alt text to every meaningful image and aria-hidden to decorative ones.

## SEO AND SITE FILES
- sitemap.xml (auto-generated), robots.txt (allow all, point to sitemap), favicon set, site.webmanifest, 404.html behavior, public/_redirects, netlify.toml with security headers (CSP-friendly, X-Frame-Options, X-Content-Type-Options, Referrer-Policy) and long-term caching for hashed assets.
- JSON-LD structured data: Organization (home), SoftwareApplication (each product page), FAQPage (FAQ page), BreadcrumbList.
- Semantic HTML (header, nav, main, section, article, footer), one H1 per page, logical heading order.
- Keyword-aware but natural copy targeting phrases like vulnerability assessment platform, penetration testing software, IT asset management, log management, device management.

## COPYWRITING
Write all the website copy yourself: persuasive, clear, enterprise-grade English. Explain what we do, how each product works, the advantages, who it is for, and why choose Anjavor, in plain language that a manager and an engineer can both understand. Every page needs enough substance that a visitor fully understands the offering without contacting us first. Keep claims truthful and limited to the module lists above.
- VAPT pages must include a clear statement: Anjavor VAPT is for authorized security testing only, on assets the customer owns or has written permission to test.

## QUALITY BAR
- Fully responsive (mobile first, tablet, desktop), tested at 360px, 768px, 1280px+.
- Lighthouse targets: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100. Use route-based code splitting and lazy loading.
- Keyboard accessible, visible focus states, ARIA labels, skip-to-content link.
- Clean, well-organized project structure (components, pages, data, hooks, assets, config), reusable components (GlassCard, SectionHeader, AnimatedCounter, DashboardPreview, FeatureGrid, FAQAccordion, CTASection, etc.), content stored in data files rather than hardcoded in JSX.
- Include a README with: how to run locally, how to build, how to deploy to Netlify, and how to change siteUrl, the email, and the logo.
- Finish by running the build and fixing every error and warning.
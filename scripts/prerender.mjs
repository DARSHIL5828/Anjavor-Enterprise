import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import siteConfig from '../src/config/site.js';
import { faqData } from '../src/data/faq.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

if (!fs.existsSync(distDir)) {
  console.log('Dist directory does not exist yet. Run `vite build` first.');
  process.exit(0);
}

const baseIndexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseIndexHtmlPath)) {
  console.error('dist/index.html not found.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(baseIndexHtmlPath, 'utf-8');

function getJsonLd(route) {
  if (route.path === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
      description: route.description,
      sameAs: [],
    };
  }

  if (route.path === '/products/anjavor-vapt') {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Anjavor VAPT',
      applicationCategory: 'SecurityApplication',
      description: route.description,
      url: `${siteConfig.siteUrl}/products/anjavor-vapt`,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Contact us for pricing' },
      provider: { '@type': 'Organization', name: siteConfig.companyName },
    };
  }

  if (route.path === '/products/anjavor-one') {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Anjavor One',
      applicationCategory: 'BusinessApplication',
      description: route.description,
      url: `${siteConfig.siteUrl}/products/anjavor-one`,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Contact us for pricing' },
      provider: { '@type': 'Organization', name: siteConfig.companyName },
    };
  }

  if (route.path === '/faq') {
    const allQuestions = faqData.flatMap((cat) => cat.questions);
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allQuestions.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    };
  }

  return null;
}

function generatePrerenderedHtml(route) {
  const isHome = route.path === '/';
  const fullTitle = isHome
    ? `${siteConfig.companyName} – Cybersecurity & IT Software Solutions`
    : `${route.title} | ${siteConfig.companyName}`;
  const canonicalUrl = `${siteConfig.siteUrl}${isHome ? '' : route.path}`;
  const jsonLd = getJsonLd(route);

  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${fullTitle}</title>`);

  // Construct head tags to inject
  const metaTags = [
    `<meta name="description" content="${route.description}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${fullTitle}" />`,
    `<meta property="og:description" content="${route.description}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:site_name" content="${siteConfig.companyName}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${fullTitle}" />`,
    `<meta name="twitter:description" content="${route.description}" />`,
  ];

  if (jsonLd) {
    metaTags.push(
      `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`
    );
  }

  // Inject right before </head>
  html = html.replace('</head>', `  ${metaTags.join('\n  ')}\n</head>`);

  return html;
}

// Prerender all routes in siteConfig
for (const route of siteConfig.routes) {
  const html = generatePrerenderedHtml(route);

  if (route.path === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
  } else {
    const routeRelative = route.path.replace(/^\//, '');
    const targetDir = path.join(distDir, routeRelative);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  }
}

// Also create 404.html in dist
const notFoundRoute = {
  path: '/404',
  title: '404 Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
};
const notFoundHtml = generatePrerenderedHtml(notFoundRoute);
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');

console.log(`✓ Successfully prerendered ${siteConfig.routes.length} routes + 404.html to static HTML in dist/`);

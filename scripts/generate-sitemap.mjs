import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import siteConfig from '../src/config/site.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const publicDir = path.join(projectRoot, 'public');
const distDir = path.join(projectRoot, 'dist');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const today = new Date().toISOString().split('T')[0];

const urlEntries = siteConfig.routes.map((route) => {
  const loc = `${siteConfig.siteUrl}${route.path === '/' ? '' : route.path}`;
  const priority = route.path === '/' ? '1.0' : route.path.startsWith('/products') ? '0.9' : '0.8';
  const changefreq = route.path === '/' ? 'weekly' : 'monthly';

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`✓ Generated public/sitemap.xml with ${siteConfig.routes.length} routes.`);

if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`✓ Copied sitemap.xml to dist/sitemap.xml.`);
}

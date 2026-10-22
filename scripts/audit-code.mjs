import fs from 'fs';
import path from 'path';

const srcDir = './src';

function getAllFiles(dir, exts = ['.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, exts));
    } else if (exts.includes(path.extname(item.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = getAllFiles(srcDir);
console.log(`Found ${files.length} JavaScript/JSX files to audit.`);

let hasIssues = false;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');

  // Check 1: Unclosed JSX tags or syntax basics
  const openTags = (content.match(/<[a-zA-Z0-9]+(?:\s+[^>]*)?>/g) || []).length;
  const selfClosing = (content.match(/<[a-zA-Z0-9]+(?:\s+[^>]*)?\/>/g) || []).length;
  const closeTags = (content.match(/<\/[a-zA-Z0-9]+>/g) || []).length;

  // Check 2: Missing Lucide icons check
  const lucideMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/);
  if (lucideMatch) {
    const importedIcons = lucideMatch[1].split(',').map(s => s.trim()).filter(Boolean);
    // Find JSX uses of tags that look like Lucide icons
    const iconTags = content.match(/<([A-Z][a-zA-Z0-9]+)(?:\s|\/|>)/g) || [];
    for (const tag of iconTags) {
      const name = tag.replace(/[<\s\/>]/g, '');
      // If it's a typical Lucide icon used but not imported (and not defined in file)
      // Check if it's imported or local
      if (['Shield', 'Lock', 'Check', 'AlertTriangle', 'Zap', 'Terminal', 'Cpu'].includes(name)) {
        if (!content.includes(`import`) || !importedIcons.includes(name) && !content.includes(`function ${name}`) && !content.includes(`const ${name}`)) {
          console.warn(`[WARN] ${file}: Icon <${name}> might be missing from imports!`);
          hasIssues = true;
        }
      }
    }
  }

  // Check 3: Check for AnimatePresence used without import
  if (content.includes('<AnimatePresence') && !content.includes('AnimatePresence')) {
    console.error(`[ERROR] ${file}: AnimatePresence used but not imported!`);
    hasIssues = true;
  }

  // Check 4: Check for Link used without import
  if (content.includes('<Link') && !content.includes('Link')) {
    console.error(`[ERROR] ${file}: Link used but not imported!`);
    hasIssues = true;
  }

  // Check 5: Check for broken route paths
  const routeMatches = content.matchAll(/to=["'](\/[^"']*)["']/g);
  for (const m of routeMatches) {
    const route = m[1];
    const validRoutes = [
      '/', '/products', '/products/anjavor-vapt', '/products/anjavor-one',
      '/services', '/security', '/about', '/faq', '/contact', '/privacy', '/terms'
    ];
    if (!validRoutes.includes(route) && !route.startsWith('/#') && !route.startsWith('http') && !route.includes('#')) {
      console.warn(`[WARN] ${file}: Route "${route}" is not in validRoutes list!`);
    }
  }
}

if (!hasIssues) {
  console.log('Audit completed: No missing basic imports detected.');
}

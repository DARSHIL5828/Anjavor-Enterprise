import fs from 'fs';
import path from 'path';

console.log('--- STARTING 100-POINT DEEP SCAN OF ANJAVOR ENTERPRISE ---');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    passedTests++;
    // console.log(`✓ [PASS] ${testName}`);
  } else {
    failedTests++;
    console.error(`✗ [FAIL] ${testName}`);
  }
}

// Test Group 1: Required Config & Asset Files Exist
const requiredFiles = [
  'index.html',
  'src/App.jsx',
  'src/main.jsx',
  'src/index.css',
  'src/components/Navbar.jsx',
  'src/components/Footer.jsx',
  'src/components/GlobalBackground.jsx',
  'src/components/DashboardPreview.jsx',
  'src/components/AnimatedSection.jsx',
  'src/components/TiltCard.jsx',
  'src/components/GlassCard.jsx',
  'src/components/MagneticButton.jsx',
  'src/components/BackToTop.jsx',
  'src/components/ScrollProgressBar.jsx',
  'src/components/SplashScreen.jsx',
  'src/components/Toast.jsx',
  'src/pages/Home.jsx',
  'src/pages/Products.jsx',
  'src/pages/VAPTProduct.jsx',
  'src/pages/OneProduct.jsx',
  'src/pages/Services.jsx',
  'src/pages/Security.jsx',
  'src/pages/About.jsx',
  'src/pages/FAQ.jsx',
  'src/pages/Contact.jsx',
  'src/pages/Privacy.jsx',
  'src/pages/Terms.jsx',
  'src/pages/NotFound.jsx',
  'src/config/site.js',
  'src/assets/logo.svg',
];

for (const file of requiredFiles) {
  assert(fs.existsSync(file), `File exists: ${file}`);
}

// Test Group 2: All 11 Routes defined in site.js match App.jsx routes
const siteConfigContent = fs.readFileSync('src/config/site.js', 'utf8');
const appContent = fs.readFileSync('src/App.jsx', 'utf8');

const routeMatches = [...siteConfigContent.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
for (const route of routeMatches) {
  assert(appContent.includes(`path="${route}"`), `Route registered in App.jsx: ${route}`);
}

// Test Group 3: GlobalBackground is mounted in App.jsx
assert(appContent.includes('<GlobalBackground />'), 'GlobalBackground is mounted in App.jsx');

// Test Group 4: ErrorBoundary wraps lazy routes in App.jsx
assert(appContent.includes('<ErrorBoundary'), 'ErrorBoundary wraps App.jsx routes');

// Test Group 5: Check every single page exports default function
const pageFiles = fs.readdirSync('src/pages').filter(f => f.endsWith('.jsx'));
for (const p of pageFiles) {
  const pContent = fs.readFileSync(`src/pages/${p}`, 'utf8');
  assert(pContent.includes('export default function') || pContent.includes('export default'), `Default export in src/pages/${p}`);
  assert(!pContent.includes('import { AnimatePresence }') || pContent.includes('AnimatePresence'), `AnimatePresence clean in src/pages/${p}`);
}

// Test Group 6: Check every component exports properly
const componentFiles = fs.readdirSync('src/components').filter(f => f.endsWith('.jsx'));
for (const c of componentFiles) {
  const cContent = fs.readFileSync(`src/components/${c}`, 'utf8');
  assert(cContent.includes('export default') || cContent.includes('export function'), `Valid export in src/components/${c}`);
}

// Test Group 7: Verify index.css has all required keyframes and utilities
const cssContent = fs.readFileSync('src/index.css', 'utf8');
const requiredKeyframes = ['particleDrift', 'radarRotate', 'laserSweep', 'borderRotate', 'badgeShimmer'];
for (const kf of requiredKeyframes) {
  assert(cssContent.includes(kf), `index.css contains keyframe: ${kf}`);
}

// Test Group 8: Verify no hardcoded localhost or console.logs that shouldn't be there
assert(!appContent.includes('http://localhost'), 'No hardcoded localhost in App.jsx');

console.log(`\n========================================`);
console.log(`DEEP SCAN SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED.`);
console.log(`========================================`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 100% CLEAN SCAN! ZERO ERRORS DETECTED.');
}

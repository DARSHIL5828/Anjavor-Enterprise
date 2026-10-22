import fs from 'fs';
import path from 'path';

function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      checkDir(full);
    } else if (f.endsWith('.jsx') || f.endsWith('.js')) {
      const code = fs.readFileSync(full, 'utf8');
      ['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef'].forEach(hook => {
        const used = new RegExp('\\b' + hook + '\\s*\\(').test(code);
        const importLines = code.split('\n').filter(l => l.trim().startsWith('import')).join('\n');
        const imported = new RegExp('\\b' + hook + '\\b').test(importLines);
        if (used && !imported) {
          console.error(`MISSING HOOK IMPORT: [${hook}] in ${full}`);
        }
      });
    }
  }
}

checkDir('./src');
console.log('Hook check complete.');

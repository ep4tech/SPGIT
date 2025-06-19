const fs = require('fs');
const path = require('path');

// Directory to scan
const SRC_DIR = path.join(__dirname, '..', 'src');
// Regex to match React component function or arrow function
const COMPONENT_REGEX = /^(export\s+)?(default\s+)?(function\s+([A-Z][A-Za-z0-9_]*)\s*\(|const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*\([^)]*\)\s*=>\s*\{)/m;
// Regex to avoid duplicate log insertions
const LOG_PATTERN = /^\s*console\.log\('======>> We ae in /;

function getRelativeComponentPath(filePath) {
  const rel = path.relative(SRC_DIR, filePath);
  return rel.replace(/\\/g, '/');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (LOG_PATTERN.test(content)) return;

  let lines = content.split('\n');
  let inComponent = false;
  let arrowFound = false;
  let braceLine = -1;
  let openBraceIdx = -1;

  // Find the start of a component (function or arrow function)
  for (let i = 0; i < lines.length; i++) {
    if (!inComponent && COMPONENT_REGEX.test(lines[i])) {
      inComponent = true;
      // For arrow functions, scan for the arrow (=>) after the parameters
      let j = i;
      let foundBody = false;
      while (j < lines.length && !foundBody) {
        let line = lines[j];
        if (!arrowFound) {
          if (line.includes('=>')) {
            arrowFound = true;
            // If { is on the same line as =>
            let idx = line.indexOf('{', line.indexOf('=>'));
            if (idx !== -1) {
              braceLine = j;
              openBraceIdx = idx;
              foundBody = true;
              break;
            }
          }
        } else {
          // After =>, look for the first {
          let idx = line.indexOf('{');
          if (idx !== -1) {
            braceLine = j;
            openBraceIdx = idx;
            foundBody = true;
            break;
          }
        }
        j++;
      }
      // For normal function declarations, the first { after the signature is the body
      if (!arrowFound) {
        for (let k = i; k < lines.length; k++) {
          let idx = lines[k].indexOf('{');
          if (idx !== -1) {
            braceLine = k;
            openBraceIdx = idx;
            break;
          }
        }
      }
      break;
    }
  }
  if (braceLine !== -1 && openBraceIdx !== -1) {
    const logLine = `  console.log('======>> We ae in ${getRelativeComponentPath(filePath)}');`;
    // Insert log right after the opening brace
    lines[braceLine] = lines[braceLine].slice(0, openBraceIdx + 1) + '\n' + logLine + lines[braceLine].slice(openBraceIdx + 1);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`Inserted log in: ${filePath}`);
  }
}


function walkDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(dirent.name)) {
      processFile(fullPath);
    }
  });
}

walkDir(SRC_DIR);
console.log('Done adding render logs.');

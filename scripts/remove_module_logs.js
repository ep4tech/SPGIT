const fs = require('fs');
const path = require('path');

// Removes lines starting with console.log('======>> We ae in from all code files under ../src/
const SRC_DIR = path.join(__dirname, '..', 'src');
const LOG_PATTERN = /^.*console\.log\('======>> We ae in.*\);.*$/;

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = content
    .split('\n')
    .filter(line => !LOG_PATTERN.test(line))
    .join('\n');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Cleaned: ${filePath}`);
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
console.log('Done cleaning log lines.');
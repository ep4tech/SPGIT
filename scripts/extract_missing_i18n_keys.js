// Node.js script to extract all t('...') keys from codebase and compare with translation keys
// Usage: node extract_missing_i18n_keys.js

const fs = require('fs');
const path = require('path');

// Recursively get all .js and .jsx files in a directory
function getAllJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllJsFiles(fullPath, fileList);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

// Extract t('...') keys from a file with line numbers
function extractTKeysWithLines(fileContent) {
  const regex = /t\(['"`]([a-zA-Z0-9_.]+)['"`]\)/g;
  const keys = [];
  const lines = fileContent.split('\n');
  lines.forEach((line, idx) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
      keys.push({ key: match[1], line: idx + 1 });
    }
  });
  return keys;
}

// Flatten translation object to get all possible key paths
function flatten(obj, prefix = '', result = {}) {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flatten(obj[key], prefix ? prefix + '.' + key : key, result);
    } else {
      result[prefix ? prefix + '.' + key : key] = obj[key];
    }
  }
  return result;
}

// Main script
const SRC_DIR = path.resolve(__dirname, '../src');
const TRANSLATION_FILE = path.resolve(__dirname, '../src', 'translations.json');
const OUTPUT_FILE = path.resolve(__dirname, 'missing_translation_keys_report.txt');

// 1. Get all code files
const codeFiles = getAllJsFiles(SRC_DIR);

// 2. Extract all used keys by file (with line numbers)
const usedKeysByFile = {};
codeFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const keys = extractTKeysWithLines(content);
  if (keys.length > 0) {
    usedKeysByFile[path.relative(SRC_DIR, file)] = keys;
  }
});

// 3. Load and flatten translation keys
let translations;
let flatTranslations;
try {
  const translationModule = fs.readFileSync(TRANSLATION_FILE, 'utf8');
  translations = JSON.parse(translationModule);
  flatTranslations = flatten(translations.en);
} catch (err) {
  console.error('Failed to parse translation file:', err);
  process.exit(1);
}

// 4. Compare and collect missing keys (with line numbers)
let report = '';
const seenMissing = new Set();
Object.entries(usedKeysByFile).forEach(([file, keys]) => {
  const missing = keys.filter(k => !flatTranslations.hasOwnProperty(k.key));
  const firstMissing = {};
  missing.forEach(({key, line}) => {
    if (!(key in firstMissing)) {
      firstMissing[key] = line;
    }
  });
  const missingKeys = Object.keys(firstMissing).filter(key => !seenMissing.has(key));
  if (missingKeys.length > 0) {
    report += `File: ${file}\n`;
    missingKeys.forEach(key => {
      report += `  MISSING [Line ${firstMissing[key]}]: ${key}\n`;
      seenMissing.add(key);
    });
    report += '\n';
  }
});

if (!report) {
  report = 'No missing translation keys found!';
}

fs.writeFileSync(OUTPUT_FILE, report, 'utf8');
console.log('Missing translation keys report written to', OUTPUT_FILE);

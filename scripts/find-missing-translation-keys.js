// Script to find missing translation keys in the project
// Usage: node find-missing-translation-keys.js

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src/');
const TRANSLATION_JS_FILE = path.resolve(__dirname, '../src/translations.js');
const OUTPUT_FILE = path.resolve(__dirname, './missing-translation-keys.txt');

// Recursively get all .js files in directory
function getAllJsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllJsFiles(filePath));
    } else if (file.endsWith('.js')) {
      results.push(filePath);
    }
  });
  return results;
}

// Extract all t('key') and t("key") usages with line numbers and full lines
function extractTranslationKeyLines(fileContent) {
  const result = [];
  const regex = /\bt\(["']([\w.-]+)["']\)/g;
  const lines = fileContent.split(/\r?\n/);
  lines.forEach((line, idx) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
      result.push({
        key: match[1],
        lineNumber: idx + 1,
        lineContent: line
      });
    }
  });
  return result;
}

// Flatten nested translation object to dot notation
function flattenObject(obj, prefix = '', result = {}) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        flattenObject(value, newKey, result);
      } else {
        result[newKey] = value;
      }
    }
  }
  return result;
}

function main() {
  // 1. Get all JS files
  const jsFiles = getAllJsFiles(SRC_DIR);

  // 2. Read and flatten translation keys
  let translations = {};
  try {
    // Use require to import the translations.js file
    // If using ES module, use dynamic import instead
    const translationsModule = require(TRANSLATION_JS_FILE);
    // Support both default and named export
    translations = translationsModule.translations || translationsModule.default || {};
    translations = translations.en || translations; // Use .en if present
  } catch (e) {
    console.error('Error reading translation file:', e);
    process.exit(1);
  }
  const flatTranslations = flattenObject(translations);
  const availableKeys = new Set(Object.keys(flatTranslations));

  // 3. Scan files and collect missing keys with context
  const missingByFile = {};
  jsFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(path.resolve(__dirname, '../'), file);
    const parentFolder = path.basename(path.dirname(file));
    const keyLines = extractTranslationKeyLines(content);
    // Only add the first occurrence of each missing key per file
    const seenKeys = new Set();
    keyLines.forEach(({ key, lineNumber, lineContent }) => {
      if (!availableKeys.has(key) && !seenKeys.has(key)) {
        seenKeys.add(key);
        if (!missingByFile[parentFolder]) missingByFile[parentFolder] = {};
        if (!missingByFile[parentFolder][relPath]) missingByFile[parentFolder][relPath] = [];
        missingByFile[parentFolder][relPath].push({
          key,
          lineNumber,
          lineContent
        });
      }
    });
  });

  // 4. Output grouped by parent folder and file
  let out = '';
  Object.keys(missingByFile).sort().forEach(folder => {
    out += `# Folder: ${folder}\n`;
    Object.keys(missingByFile[folder]).sort().forEach(file => {
      out += `  ## File: ${file}\n`;
      missingByFile[folder][file].forEach(({ lineNumber, lineContent }) => {
        out += `    [Line ${lineNumber}]: ${lineContent}\n`;
      });
      out += '\n';
    });
    out += '\n';
  });
  fs.writeFileSync(OUTPUT_FILE, out, 'utf8');
  console.log('Missing translation keys (with lines) written to', OUTPUT_FILE);
}

main();

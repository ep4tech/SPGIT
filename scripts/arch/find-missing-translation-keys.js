// Script to find missing translation keys in the project
// Usage: node find-missing-translation-keys.js

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../');
const TRANSLATION_FILE = path.resolve(__dirname, '../translations.json');
const OUTPUT_FILE = path.resolve(__dirname, './missing-translation-keys.txt');

// Recursively get all .js files in directoryunction getAllJsFiles(dir) {
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

// Extract all t('key') and t("key") usages
function extractTranslationKeys(fileContent) {
  const regex = /\bt\(["']([\w.-]+)["']\)/g;
  let match;
  const keys = new Set();
  while ((match = regex.exec(fileContent)) !== null) {
    keys.add(match[1]);
  }
  return keys;
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

  // 2. Extract all used translation keys
  const usedKeys = new Set();
  jsFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    extractTranslationKeys(content).forEach(key => usedKeys.add(key));
  });

  // 3. Read and flatten translation keys
  let translations = {};
  try {
    translations = JSON.parse(fs.readFileSync(TRANSLATION_FILE, 'utf8'));
  } catch (e) {
    console.error('Error reading translation file:', e);
    process.exit(1);
  }
  const flatTranslations = flattenObject(translations);
  const availableKeys = new Set(Object.keys(flatTranslations));

  // 4. Find missing keys
  const missingKeys = Array.from(usedKeys).filter(key => !availableKeys.has(key));

  // 5. Output
  fs.writeFileSync(OUTPUT_FILE, missingKeys.join('\n'), 'utf8');
  console.log(`Found ${missingKeys.length} missing translation keys. Output written to ${OUTPUT_FILE}`);
}

main();

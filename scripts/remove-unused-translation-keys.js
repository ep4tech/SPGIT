// Script to remove unused translation keys from translations.js
// Usage: node remove-unused-translation-keys.js

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src/');
const TRANSLATION_JS_FILE = path.resolve(__dirname, '../src/translations.js');
const OUTPUT_FILE = path.resolve(__dirname, '../src/translations.cleaned.js');

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

// Unflatten dot notation keys to nested object
function unflattenObject(flatObj) {
  const result = {};
  for (const flatKey in flatObj) {
    const keys = flatKey.split('.');
    let cur = result;
    keys.forEach((k, i) => {
      if (i === keys.length - 1) {
        cur[k] = flatObj[flatKey];
      } else {
        if (!cur[k]) cur[k] = {};
        cur = cur[k];
      }
    });
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

  // 3. Import translations.js
  let translations = {};
  try {
    const translationsModule = require(TRANSLATION_JS_FILE);
    translations = translationsModule.translations || translationsModule.default || {};
    translations = translations.en || translations;
  } catch (e) {
    console.error('Error reading translation file:', e);
    process.exit(1);
  }

  // 4. Flatten translations
  const flatTranslations = flattenObject(translations);

  // 5. Keep only used keys
  const cleanedFlat = {};
  for (const key in flatTranslations) {
    if (usedKeys.has(key)) {
      cleanedFlat[key] = flatTranslations[key];
    }
  }

  // 6. Unflatten to nested object
  const cleanedTranslations = unflattenObject(cleanedFlat);

  // 7. Write cleaned translations to new file
  const output = `// Cleaned translations (only used keys)\nexport const translations = {\n  en: ${JSON.stringify(cleanedTranslations, null, 2)}\n}\n`;
  fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
  console.log(`Cleaned translations written to ${OUTPUT_FILE}`);
}

main();

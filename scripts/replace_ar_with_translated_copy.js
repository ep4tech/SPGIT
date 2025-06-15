// Script to replace the 'ar' section in translations.js with a translated copy of 'en', translating values to Arabic using an external API or placeholder.
// Usage: node scripts/replace_ar_with_translated_copy.js
// NOTE: You must implement your translation logic or API key in the translateText function.

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_PATH = path.join(__dirname, '../src/translations.js');
const OUTPUT_PATH = path.join(__dirname, '../src/translations.modified.js');

// Placeholder translation function (replace with real API call if needed)
function translateText(text) {
  // TODO: Replace with actual translation logic or API call
  // For demo, just prefix with [AR]
  return '[AR] ' + text;
}

// Recursively translate all values in an object
function translateObject(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map(translateObject);
  const result = {};
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    const val = obj[key];
    if (typeof val === 'object' && val !== null) {
      result[key] = translateObject(val);
    } else if (typeof val === 'string') {
      result[key] = translateText(val);
    } else {
      result[key] = val;
    }
  }
  return result;
}

// Read and parse translations.js
let translations;
try {
  let content = fs.readFileSync(TRANSLATIONS_PATH, 'utf8');
  content = content.replace(/export const translations\s*=\s*/, '');
  translations = eval('(' + content + ')');
} catch (e) {
  console.error('Failed to load translations.js:', e);
  process.exit(1);
}

// Remove old 'ar' section
if (translations.ar) delete translations.ar;

// Copy and translate 'en' section
if (translations.en) {
  translations.ar = translateObject(translations.en);
}

// Write new file with export statement
const output = 'export const translations = ' + JSON.stringify(translations, null, 2) + ';\n';
fs.writeFileSync(OUTPUT_PATH, output, 'utf8');
console.log(`Modified translations written to ${OUTPUT_PATH}`);

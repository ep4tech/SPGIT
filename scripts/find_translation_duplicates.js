// Script to flatten translation keys and find duplicates in translations.js
// Usage: node scripts/find_translation_duplicates.js

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_PATH = path.join(__dirname, '../src/translations.js');
const OUTPUT_PATH = path.join(__dirname, 'translation_duplicates.txt');

// Helper to flatten nested objects (dot notation)
function flatten(obj, prefix = '') {
  let result = {};
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    const val = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(result, flatten(val, newKey));
    } else {
      result[newKey] = val;
    }
  }
  return result;
}

// Read and eval translations.js (removes export)
let translations;
try {
  let content = fs.readFileSync(TRANSLATIONS_PATH, 'utf8');
  content = content.replace(/export const translations\s*=\s*/, '');
  translations = eval('(' + content + ')');
} catch (e) {
  console.error('Failed to load translations.js:', e);
  process.exit(1);
}

const langs = Object.keys(translations);
const outputLines = [];
let foundAny = false;

langs.forEach(lang => {
  const flat = flatten(translations[lang]);
  const seen = {};
  const dups = [];
  for (const k in flat) {
    if (seen[k]) {
      dups.push(k);
    } else {
      seen[k] = true;
    }
  }
  if (dups.length > 0) {
    foundAny = true;
    outputLines.push(`Duplicate keys in language '${lang}':`);
    dups.forEach(key => outputLines.push(`  ${key}`));
    outputLines.push('');
  }
});

if (!foundAny) {
  outputLines.push('No duplicate keys found within any language.');
}

// --- Extract keys in ar not in en and vice versa ---
if (translations.en && translations.ar) {
  const flatEn = Object.keys(flatten(translations.en));
  const flatAr = Object.keys(flatten(translations.ar));
  const enSet = new Set(flatEn);
  const arSet = new Set(flatAr);

  const inArNotEn = flatAr.filter(k => !enSet.has(k));
  const inEnNotAr = flatEn.filter(k => !arSet.has(k));

  outputLines.push('\nKeys present in AR but NOT in EN:');
  if (inArNotEn.length === 0) {
    outputLines.push('  None');
  } else {
    inArNotEn.forEach(k => outputLines.push('  ' + k));
  }

  outputLines.push('\nKeys present in EN but NOT in AR:');
  if (inEnNotAr.length === 0) {
    outputLines.push('  None');
  } else {
    inEnNotAr.forEach(k => outputLines.push('  ' + k));
  }
}

fs.writeFileSync(OUTPUT_PATH, outputLines.join('\n'), 'utf8');
console.log(`Duplicate keys written to ${OUTPUT_PATH}`);

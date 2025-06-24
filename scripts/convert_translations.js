// Node.js script to read translations.js, remove double quotes from keys, and convert double quotes in values to single quotes
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../src/translations.js');
const outputPath = path.join(__dirname, '../src/translations_modified.js');

let content = fs.readFileSync(inputPath, 'utf8');

// Remove comments
content = content.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');

// Find the object start (after "export const translations = ")
const match = content.match(/export const translations\s*=\s*({[\s\S]*);?$/);
if (!match) {
  console.error('Could not find export const translations = ...');
  process.exit(1);
}
let objStr = match[1];

// Remove double quotes from keys: "key": => key:
objStr = objStr.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
// Convert all double quotes in values to single quotes (but only inside values)
objStr = objStr.replace(/: "([^"]*)"/g, ": '$1'");

// Compose final output
const output = 'export const translations = ' + objStr + ';\n';

fs.writeFileSync(outputPath, output, 'utf8');
console.log('Modified translations written to', outputPath);

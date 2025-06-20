// Node.js script to check syntax errors in all .js and .json files recursively in ./src
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function checkJsSyntax(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    new vm.Script(code, { filename: filePath });
    return null;
  } catch (err) {
    return err.message;
  }
}

function checkJsonSyntax(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    JSON.parse(code);
    return null;
  } catch (err) {
    return err.message;
  }
}

function walk(dir, exts, results = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, exts, results);
    } else if (exts.includes(path.extname(fullPath))) {
      results.push(fullPath);
    }
  });
  return results;
}

const exts = ['.js', '.json'];
const rootDir = path.join(__dirname, 'src');
const files = walk(rootDir, exts);

let errorCount = 0;
files.forEach(f => {
  let error = null;
  if (f.endsWith('.js')) {
    error = checkJsSyntax(f);
  } else if (f.endsWith('.json')) {
    error = checkJsonSyntax(f);
  }
  if (error) {
    errorCount++;
    console.log(`Syntax error in ${f}:\n  ${error}\n`);
  }
});

if (errorCount === 0) {
  console.log('No syntax errors found!');
} else {
  console.log(`Total syntax errors found: ${errorCount}`);
}

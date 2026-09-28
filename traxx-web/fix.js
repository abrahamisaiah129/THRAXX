const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // replace \` with ` and \$ with $
      let newContent = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log('Fixed ' + fullPath);
      }
    }
  });
}

walk('src');

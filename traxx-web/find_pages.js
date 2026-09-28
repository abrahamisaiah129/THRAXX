const fs = require('fs');
const content = fs.readFileSync('C:/Users/USER/.gemini/antigravity/brain/265025ff-43c7-43ff-afbf-dfd94f082e71/.system_generated/steps/135/content.md', 'utf8');

// The class might be before or after the id. Let's parse HTML better or just use a generic regex for `<div ... class="... page ..."`
const pages = [];
const regex = /<div\s+([^>]*class="[^"]*\bpage\b[^"]*"[^>]*)>/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  const attrs = match[1];
  const idMatch = attrs.match(/id="([^"]+)"/);
  if (idMatch) {
    pages.push(idMatch[1]);
  }
}
console.log('Pages found:', pages);

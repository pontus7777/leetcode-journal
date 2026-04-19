const fs = require('fs');
const path = require('path');

const problemSlug = process.argv[2];

if (!problemSlug) {
  console.log('Usage: node tools/new-solution.js <leetcode-slug>');
  console.log('Example: node tools/new-solution.js two-sum');
  process.exit(1);
}

// Convert slug to readable name
const problemName = problemSlug
  .split('-')
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(' ');

// Pattern detection rules
function detectCategory(slug) {
  if (slug.includes('sum')) return 'hash-map';
  if (slug.includes('running-sum')) return 'arrays';
  if (slug.includes('anagram')) return 'strings';
  if (slug.includes('palindrome')) return 'two-pointers';
  if (slug.includes('subarray')) return 'sliding-window';
  if (slug.includes('tree')) return 'trees';
  if (slug.includes('search')) return 'binary-search';
  if (slug.includes('dp') || slug.includes('rob') || slug.includes('climb'))
    return 'dynamic-programming';

  return 'misc'; // fallback
}

const category = detectCategory(problemSlug);
const folderPath = path.join('solutions', category);
const filePath = path.join(folderPath, `${problemSlug}.js`);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

const template = `// Problem: ${problemName}
// Link: https://leetcode.com/problems/${problemSlug}/
// Pattern: ${category.replace('-', ' ')}
// Time: 
// Space: 

// Explanation:
// - Describe your approach here.

function solution(input) {
    // Write your solution here
}

module.exports = solution;
`;

fs.writeFileSync(filePath, template);
console.log('Created:', filePath);
console.log('Category:', category);

const fs = require('fs');
const axios = require('axios');

const USERNAME = 'pontus777'; // <-- Replace this
const README_PATH = './README.md';

async function fetchStats() {
  const url = `https://leetcode-stats-api.herokuapp.com/${USERNAME}`;
  const res = await axios.get(url);
  return res.data;
}

function updateReadme(stats) {
  const readme = fs.readFileSync(README_PATH, 'utf8');

  const start = '<!-- LEETCODE_STATS_START -->';
  const end = '<!-- LEETCODE_STATS_END -->';

  const newStats = `
**Total Solved:** ${stats.totalSolved}  
**Easy:** ${stats.easySolved}  
**Medium:** ${stats.mediumSolved}  
**Hard:** ${stats.hardSolved}  
**Ranking:** ${stats.ranking}
`;

  const updated = readme.replace(
    new RegExp(`${start}[\\s\\S]*?${end}`),
    `${start}\n${newStats}\n${end}`,
  );

  fs.writeFileSync(README_PATH, updated);
}

(async () => {
  try {
    const stats = await fetchStats();
    updateReadme(stats);
    console.log('LeetCode stats updated.');
  } catch (err) {
    console.error('Failed to update LeetCode stats:', err);
  }
})();

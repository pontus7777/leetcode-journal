// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum/
// Pattern: Hash Map
// Time: O(n)
// Space: O(n)

// Explanation:
// - Use a hash map to store numbers we've seen and their indices.
// - For each number, compute complement = target - num.
// - If complement exists in the map, return the pair of indices.
// - Otherwise, store the current number in the map.

function solution(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}
module.exports = solution;

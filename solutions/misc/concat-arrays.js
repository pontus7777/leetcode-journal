/* Problem: Concat Arrays.js
// Link: https://leetcode.com/problems/concat-arrays.js/
// Pattern: misc
// Time: 
// Space: 

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
*/
const nums = [1, 2, 1];
/*
var solution = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }
  return ans;
};

// more efficient
var solution = function (nums) {
  let n = nums.length;
  let ans = new Array(2 * n);
  for (let i = 0; i < 2 * n; i++) {
    ans[i] = nums[i % n];
  }
  return ans;
};

var solution = function (nums) {
  return [...nums, ...nums];
};
*/
var solution = function (nums) {
  const ans = [];
  // Loop through the original array twice
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < nums.length; i++) {
      ans.push(nums[i]);
    }
  }
  return ans;
};

console.log(solution(nums));

module.exports = solution;

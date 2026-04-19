// Problem: Running Sum of 1D Array
// Link: https://leetcode.com/problems/running-sum-of-1d-array/
// Pattern: Prefix Sum
// Time: O(n)
// Space: O(1) (modifies output array in place)

// Explanation:
// - The running sum at index i is: nums[i] + nums[i - 1] (after modification).
// - Iterate through the array and accumulate the sum in place.

function solution(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}

module.exports = solution;

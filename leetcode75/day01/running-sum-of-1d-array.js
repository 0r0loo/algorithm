// https://leetcode.com/problems/running-sum-of-1d-array/
// 내 풀이
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [];
  result.push(nums[0]);

  for (let i = 0; i < nums.length - 1; i++) {
    result.push(result[i] + nums[i + 1]);
  }
  return result;
};

// 다른 사람 풀이

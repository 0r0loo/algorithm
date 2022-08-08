// https://leetcode.com/problems/find-pivot-index/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const leftSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0);
    const rightSum =
      nums.slice(i, nums.length).reduce((acc, cur) => acc + cur, 0) - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

// 다른사람풀이

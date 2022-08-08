/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((_, idx) => !(idx % 2))
    .reduce((acc, cur) => acc + cur, 0);
};

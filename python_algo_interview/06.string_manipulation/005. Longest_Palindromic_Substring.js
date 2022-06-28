/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2 || s === s.split('').reverse().join('')) {
    return s;
  }

  let maxStr = '';

  for (let i = 0; i < s.length - 1; i++) {
    expand(i, i + 1, s);
    expand(i, i + 2, s);
    maxStr = [maxStr, expand(i, i + 1, s), expand(i, i + 2, s)].sort(
      (a, b) => b.length - a.length
    )[0];
  }
  return maxStr;
};

function expand(left, right, s) {
  while (left >= 0 && right <= s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

console.log(longestPalindrome('babad'));

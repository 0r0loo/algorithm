/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]+/g, '').toUpperCase();
  return s === s.split('').reverse().join('');
};

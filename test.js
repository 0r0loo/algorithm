/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = t[i];
    }
    if (obj[s[i]] !== t[i]) return false;
    if (Object.values(obj).includes(t[i])) return false;
  }
  return true;
};

let result = isIsomorphic("paper", "title");
console.log(result); // true

result = isIsomorphic("badc", "baba");

console.log(result);

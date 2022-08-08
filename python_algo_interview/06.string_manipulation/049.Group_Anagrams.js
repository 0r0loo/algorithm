/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anaMap = new Map();

  strs.forEach((str) => {
    const newStr = str.split('').sort().join('');
    if (anaMap.has(newStr)) {
      anaMap.get(newStr).push(str);
    } else {
      const array = [str];
      anaMap.set(newStr, array);
    }
  });
  console.log(anaMap);
  const result = [];

  for (let [_, val] of anaMap) {
    result.push(val.sort());
  }
  return result;
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));

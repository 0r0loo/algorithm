let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

let [n, m] = input;
[n, m] = [+n, +m];
const arr = Array(n)
  .fill()
  .map((_, idx) => idx + 1);
let result = '';

const combiList = combination(arr, m);
combiList.map((arr) => (result += arr.join(' ') + '\n'));

console.log(result.trim());

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

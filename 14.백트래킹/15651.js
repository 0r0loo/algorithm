// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ');

let input = `4 2`.split(' ');

let [n, m] = input;
[n, m] = [+n, +m];
const arr = Array(n)
  .fill()
  .map((_, idx) => idx + 1);
let result = '';

const permuList = permutation(arr, m);
permuList.map((arr) => (result += arr.join(' ') + '\n'));

console.log(result.trim());

function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

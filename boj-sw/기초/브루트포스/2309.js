// let input = `20
// 7
// 23
// 19
// 10
// 15
// 25
// 8
// 13`.split('\n');

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input = input.map(Number);
const sum = input.reduce((acc, cur) => acc + cur, 0);
let aIdx;
let bIdx;

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - input[i] - input[j] === 100) {
      aIdx = i;
      bIdx = j;
      break;
    }
  }
}

const result = input.filter(
  (num) => num !== input[aIdx] && num !== input[bIdx]
);

console.log(
  result
    .sort((a, b) => a - b)
    .join('\n')
    .trim()
);

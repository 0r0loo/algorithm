let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const [n, m] = input;
const arr = [];
let result = '';

for (let i = 1; i <= +n; i++) {
  arr.push(i);
}

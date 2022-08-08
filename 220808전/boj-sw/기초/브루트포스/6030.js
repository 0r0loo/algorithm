let input = `7 1 2 3 4 5 6 7
0`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();
input = input.map((str) => str.split(' ').map(Number));
const result = [];

console.log(result);

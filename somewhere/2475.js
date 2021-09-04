let input = `0 4 2 5 6`.trim().split(' ');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const sum = input
  .map((str) => Number(str) ** 2)
  .reduce((acc, cur) => acc + cur, 0);
console.log(sum % 10);

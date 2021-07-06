let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [n, scoreStr] = input;
n = +n;
scoreList = scoreStr.split(' ').map((str) => +str);

const max = Math.max(...scoreList);

const sum = scoreList
  .map((num) => (num / max) * 100)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sum / n);

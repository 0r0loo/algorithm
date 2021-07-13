// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `3
6
34
38`
  .trim()
  .split('\n');

let [n, ...numList] = input;

numList.sort((a, b) => a - b);

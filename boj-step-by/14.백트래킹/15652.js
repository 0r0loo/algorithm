// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ');

let input = `3 3`.split(' ');

let [n, m] = input;
[n, m] = [+n, +m];
const arr = Array(n)
  .fill()
  .map((_, idx) => idx + 1);
let result = '';

// const comList = combination(arr, m);
// comList.map((arr) => (result += arr.join(' ') + '\n'));

// console.log(result.trim());

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

let input = `6 2 10 3`.trim().split(' ');

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

console.log(Math.min(x, y, w - x, h - y));

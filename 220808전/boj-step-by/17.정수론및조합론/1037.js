let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [n, yaksooStr] = input;
const yaksooList = yaksooStr.split(' ');

yaksooList.sort((a, b) => a - b);

console.log(yaksooList[0] * yaksooList[+n - 1]);

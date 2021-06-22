// 숫자의 합
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = Number(input[0]);
const sum = input[1]
  .split('')
  .map((num) => Number(num))
  .reduce((acc, cur) => acc + cur, 0);
console.log(sum);

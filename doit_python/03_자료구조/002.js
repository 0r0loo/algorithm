// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = +input[0];
const numbers = input[1].split(' ').map(Number);

const maxNum = Math.max(...numbers);

console.log(
  numbers
    .map((num) => (num / maxNum) * 100)
    .reduce((acc, cur) => acc + cur, 0) / num
);

// 최소, 최대
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = input[0];
const numbers = input[1].split(' ').map((num) => Number(num));

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);

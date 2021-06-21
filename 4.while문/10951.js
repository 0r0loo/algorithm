// A+B - 4

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(' ');
  console.log(Number(numbers[0]) + Number(numbers[1]));
}

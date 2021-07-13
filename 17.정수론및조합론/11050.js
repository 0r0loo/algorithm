let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');
// let input = `5 2`.split(' ');

let [n, k] = input;
n = +n;
k = +k;

console.log(factorial(n) / factorial(k) / factorial(n - k));

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function factorial2(num) {
  if (num === 0) return 1;
  return num * factorial2(num - 1);
}

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');
// let input = `5 2`.split(' ');

let [n, k] = input;
n = +n;
k = +k;

function binomial(n, k) {
  // n + k =  n-1 k-1   +  n - 1 k
  // (A + B) % C === ((A % C) + (B % C)) % C;
}

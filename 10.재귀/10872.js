let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const N = input[0];

const factory = (n) => {
  if (n <= 0) {
    return 1;
  }
  return n * factory(n - 1);
};

console.log(factory(N));

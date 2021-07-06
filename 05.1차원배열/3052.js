let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input = input.map((str) => +str % 42);

const set = new Set(input);
console.log(set.size);

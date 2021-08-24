let input = `4 5 1
1 2
1 3
1 4
2 4
3 4`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [str, ...ts] = input;

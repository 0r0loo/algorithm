let input = `3
4 10 20 30 40
3 7 5 12
3 125 15 25`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input[0]; i++) {
  let [n, ...arr] = input[i];
}

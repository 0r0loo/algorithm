let input = `8`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()
input = +input;

const list = [0, 1, 3];

for (let i = 3; i <= input; i++) {
  list[i] = (list[i - 1] + list[i - 2] * 2) % 10007;
}

console.log(list[input]);

let input = `9`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
input = +input;
const list = [0, 1, 2];

for (let i = 3; i <= input; i++) {
  list[i] = list[i - 2] + list[i - 1];
}

console.log(list[input] % 10007);

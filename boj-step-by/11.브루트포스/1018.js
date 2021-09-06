let input = `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [nmStr, ...tsList] = input;
const [n, m] = nmStr.split(' ').map(Number);
const board = tsList.map((str) => str.split(''));

let min = n * m;

for (let i = 0; i < n - 8; i++) {
  for (let j = 0; j < m - 8; j++) {}
}

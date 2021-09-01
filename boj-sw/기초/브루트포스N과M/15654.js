let input = `4 2
9 8 7 1`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [nmStr, tsStr] = input;
const [n, m] = nmStr.split(' ').map(Number);
const tsList = tsStr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const visited = Array(n).fill(0);

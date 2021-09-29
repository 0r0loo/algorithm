let input = `6
20 1 15 8 4 10`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, str] = input;
n = +n;
const tsList = str.split(' ').map(Number);

function dfs(l) {}

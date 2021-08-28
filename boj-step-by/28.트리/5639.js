let input = `50
30
24
5
28
45
98
52
60`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = input.map(Number);

console.log(input);

function dfs(v) {}

let input = `3
4
7
10`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...list] = input.map(Number);
let result = '';
const dp = [0, 1, 2, 4, 7];

for (let i = 4; i <= Math.max(...list); i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < list.length; i++) {
  result += dp[list[i]] + '\n';
}

console.log(result.trim());

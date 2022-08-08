let input = `3
4
7
10`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...ts] = input.map(Number);

let result = '';
const dp = [0, 1, 2, 4, 7];

for (let i = 4; i <= Math.max(...ts); i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}

ts.forEach((num) => {
  result += dp[num] + '\n';
});
console.log(result.trim());

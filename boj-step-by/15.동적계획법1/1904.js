let input = `4
`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()
input = +input;

const dp = [0, 1, 2, 3];

for (let i = 4; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[input]);

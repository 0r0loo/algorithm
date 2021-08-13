let input = `5`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()
input = +input;

const dp = [0, 3, 7];

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}
console.log(dp[input]);

/*


const dp = [
  [0, 0],
  [1, 0],
  [1, 2],
];
const result = [0, 3, 7];

for (let i = 3; i <= input; i++) {
  let threeCnt = 0;
  let twoCnt = 0;

  threeCnt += dp[i - 1][0] * 1 + dp[i - 1][1] * 1;
  twoCnt += dp[i - 1][0] * 2 + dp[i - 1][1] * 1;

  dp.push([threeCnt, twoCnt]);
  result.push((dp[i][0] * 3 + dp[i][1] * 2) % 9901);
}


console.log(result[input]);
*/

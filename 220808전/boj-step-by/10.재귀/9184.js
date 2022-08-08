let input = `1 1 1
2 2 2
10 4 6
50 50 50
-1 7 18
-1 -1 -1`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
input = input.map((str) => str.split(' ').map(Number));
const dp = Array(21);
for (let i = 0; i < dp.length; i++) {
  dp[i] = Array(21);
  for (let j = 0; j < dp.length; j++) {
    dp[i][j] = Array(21).fill(0);
  }
}

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }
  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  }

  if (dp[a][b][c]) {
    return dp[a][b][c];
  }

  if (a < b && b < c) {
    return (dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c));
  } else {
    return (dp[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1));
  }
}
let result = '';
for (let i of input) {
  const [a, b, c] = i;
  result += `w(${a}, ${b}, ${c}) = ${w(a, b, c)}\n`;
}

console.log(result.trim());

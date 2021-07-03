// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `1
10
13
100
1000
10000
100000
0`
  .trim()
  .split('\n');

let result = '';

for (let i = 0; i < input.length - 1; i++) {
  result += isPrime(2 * input[i]);
  result += '\n';
}

console.log(result.trim());

function isPrime(n) {
  const primeList = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (primeList[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeList[j] = false;
      }
    }
  }

  let cnt = 0;
  for (let i = n / 2 + 1; i <= n; i++) {
    if (primeList[i]) {
      cnt++;
    }
  }
  return cnt;
}

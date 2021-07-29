let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const m = +input[0];
const n = +input[1];

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

for (let i = m; i <= n; i++) {
  if (primeList[i]) {
    console.log(i);
  }
}

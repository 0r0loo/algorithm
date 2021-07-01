// 소수
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

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

let sum = 0;
const primeNum = [];
for (let i = m; i <= n; i++) {
  if (primeList[i]) {
    sum += i;
    primeNum.push(i);
  }
}

if (primeNum.length === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(Math.min(...primeNum));
}

let input = `5
6
8
10
12
100`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...tc] = input.map(Number);
let result = '';
for (let i = 0; i < tc.length; i++) {
  result += getGoldCnt(tc[i]) + '\n';
}

console.log(result.trim());

function getGoldCnt(num) {
  let cnt = 0;
  const primeList = isPrime(num);
  for (let i = 0; i < primeList.length / 2; i++) {
    if (!primeList[i]) continue;
    primeList[num - i] && cnt++;
  }
  return cnt;
}

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
  return primeList;
  // .map((is, idx) => (is === true ? idx : is))
  // .filter((num) => num);
}

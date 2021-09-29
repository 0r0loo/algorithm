let input = `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [str, ...tsList] = input;
const [n, m] = str.split(' ').map(Number);

const nList = tsList.slice(0, n);
const mList = tsList.slice(n);

const mMap = new Map();

mList.forEach((m) => {
  if (mMap.has(m)) {
    mMap.set(m, mMap.get(m) + 1);
  } else {
    mMap.set(m, 1);
  }
});

let cnt = 0;

nList.forEach((n) => {
  if (mMap.has(n)) {
    cnt += mMap.get(n);
  }
});

console.log(cnt);

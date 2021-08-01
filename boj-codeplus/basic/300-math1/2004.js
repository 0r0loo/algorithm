let input = `100 2`.trim().split(' ');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [n, m] = input;
n = +n;
m = +m;
let fiveCnt = 0;
let twoCnt = 0;

fiveCnt = getFiveCnt(n);
twoCnt = getTwoCnt(n);

fiveCnt -= getFiveCnt(n - m);
twoCnt -= getTwoCnt(n - m);

fiveCnt -= getFiveCnt(m);
twoCnt -= getTwoCnt(m);

console.log(Math.min(fiveCnt, twoCnt));

function getFiveCnt(n) {
  let fiveCnt = 0;
  while (n >= 5) {
    fiveCnt += Math.floor(n / 5);
    n /= 5;
  }
  return fiveCnt;
}

function getTwoCnt(n) {
  let twoCnt = 0;
  while (n >= 2) {
    twoCnt += Math.floor(n / 2);
    n /= 2;
  }
  return twoCnt;
}

/*
시간초과
for (let i = n; i > n - m; i--) {
  let temp = i;
  while (temp % 5 === 0 && temp !== 0) {
    fiveCnt++;
    temp /= 5;
  }
}

for (let i = 0; i <= m; i++) {
  let temp = i;
  while (temp % 5 === 0 && temp !== 0) {
    fiveCnt--;
    temp /= 5;
  }
}

console.log(fiveCnt);
 */

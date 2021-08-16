let input = `5 17`.trim().split(' ');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [n, k] = input;

n = +n;
k = +k;
let cnt = 0;
while (true) {
  if (k + 1 === n || k - 1 === n) {
    cnt++;
    break;
  }
  if (k % 2 === 0) {
    k /= 2;
  } else {
    k--;
  }
  cnt++;
}
console.log(cnt);

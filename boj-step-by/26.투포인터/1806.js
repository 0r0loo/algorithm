let input = `10 15
5 1 3 5 10 7 4 9 2 8`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [nstStr, str] = input;
const [n, s] = nstStr.split(' ').map(Number);
const tsList = str.split(' ').map(Number);

let left = 0;
let right = 0;
let sum = 0;
let leng = tsList.length;

while (left <= right && right <= tsList.length) {
  if (sum > s) {
    leng = Math.min(leng, right - left + 1);
  }
}
console.log(leng);

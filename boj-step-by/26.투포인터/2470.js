let input = `5
-2 -99 -1`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, str] = input;
const ts = str
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let results;

let left = 0;
let right = ts.length - 1;
let min = 2000000000;
while (left < right) {
  let sum = ts[left] + ts[right];
  if (Math.abs(sum) < Math.abs(min)) {
    min = sum;
    results = [ts[left], ts[right]];
  }
  if (sum > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(results.join(' '));

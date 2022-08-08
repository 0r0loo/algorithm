let input = `4 11
802
743
457
539`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [str, ...ropeList] = input;
let [n, k] = str.split(' ');
ropeList = ropeList.map(Number);

let start = 1;
let end = Math.max(...ropeList);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let ropeCnt = 0;
  for (let rope of ropeList) {
    ropeCnt += Math.floor(rope / mid);
  }

  if (ropeCnt < n) {
    end = mid - 1;
  } else {
    if (result < mid) {
      result = mid;
    }
    start = mid + 1;
  }
}

console.log(result);

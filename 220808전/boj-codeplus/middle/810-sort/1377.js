let input = `5
10
1
5
2
3`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const arr = input.slice(1).map((item, index) => [item, index]);
  arr.sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    if (idx < arr[idx][1]) max = Math.max(Math.abs(arr[idx][1] - idx), max);
  }

  console.log(max + 1);
}

solution(input);

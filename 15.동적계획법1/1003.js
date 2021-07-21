// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `3
0
1
3`.split('\n');

let [n, ...testList] = input;
let result = '';
let zeroCnt = 0;
let oneCnt = 0;
for (let i = 0; i < +n; i++) {
  fibonacci(+testList[i]);
  result += `${zeroCnt} ${oneCnt}\n`;
  zeroCnt = 0;
  oneCnt = 0;
}
console.log(result.trim());

function fibonacci(n) {
  if (n === 0) {
    zeroCnt++;
    return 0;
  } else if (n === 1) {
    oneCnt++;
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

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
for (let i = 0; i < +n; i++) {
  result += fibonacci(+testList[i]).join(' ') + '\n';
}
console.log(result.trim());

function fibonacci(n) {
  const fiboList = [
    [1, 0],
    [0, 1],
  ];

  for (let i = 2; i <= n; i++) {
    fiboList[i] = [
      fiboList[i - 1][0] + fiboList[i - 2][0],
      fiboList[i - 1][1] + fiboList[i - 2][1],
    ];
  }
  return fiboList[n];
}

// function fibonacci(n) {
//   if (n === 0) {
//     zeroCnt++;
//     return 0;
//   } else if (n === 1) {
//     oneCnt++;
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

let input = require('fs').readFileSync('/dev/stdin').toString().trim();

input = +input;
let num = 666;
let cnt = 1;

while (cnt !== input) {
  num++;
  if (String(num).includes('666')) {
    cnt++;
  }
}

console.log(num);

// 문제를 이해 못해서

// let input = 4;
// input = +input;

// if (input === 1) {
//   console.log('666');
// } else {
//   console.log(input - 1 + '666');
// }

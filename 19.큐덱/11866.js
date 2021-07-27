// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ');

let input = `11 10`.split(' ');

const arr = Array.from(Array(+input[0]).fill(1), (x, idx) => x + idx);

const result = [];
let ouputIdx = 1;

while (arr.length > 0) {
  for (let i = 0; i < +input[1] - 1; i++) {
    arr.push(arr.shift());
  }
  result.push(arr.shift());
}
console.log(`<${result.join(', ')}>`);

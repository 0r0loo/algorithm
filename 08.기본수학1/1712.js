// 손익 분기점

let input = '2100000000 9 10'.split(' ');

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = input[0];
const b = input[1];
const c = input[2];

if (c - b <= 0) {
  console.log(-1);
  return;
}
const n = Math.floor(a / (c - b));

console.log(n + 1);

/*
 단순 생각 이렇게하면 시간초과
while (a / (c - b) >= n) {
  n++;
}
console.log(n)

*/

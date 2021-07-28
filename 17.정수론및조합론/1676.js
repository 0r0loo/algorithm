// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let input = `25`;

input = +input;
let zeroCnt = 0;

while (input >= 5) {
  zeroCnt += Math.floor(input / 5);
  input /= 5;
}

console.log(zeroCnt);

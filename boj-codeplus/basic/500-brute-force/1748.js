let input = `100000000`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()

input = +input;

let digit = 1;
let ten = 10;
let result = 0;
for (let i = 1; i <= input; i++) {
  if (i % ten === 0) {
    digit++;
    ten *= 10;
  }
  result += digit;
}
console.log(result);

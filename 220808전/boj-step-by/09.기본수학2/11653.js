// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let n = 72; //input[0];

let div = 2;

while (n !== 1) {
  if (n % div === 0) {
    console.log(div);
    n /= div;
  } else {
    div++;
  }
}

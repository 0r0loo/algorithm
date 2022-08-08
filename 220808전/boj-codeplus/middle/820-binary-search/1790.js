let input = `20 23`.trim().split(' ');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [n, k] = input;
n = +n;
k = +k;

/* 
let [n, k] = input;
n = +n;
k = +k;
let digitSum = 0;

for (let i = 0; i <= 8; i++) {
  const base = 10 ** i;

  for (let num = base; num < base * 10 && num <= n; num++) {
    if (k <= digitSum + i + 1) {
      console.log(num.toString().charAt(k - digitSum - 1));
      process.exit();
    }

    digitSum += i + 1;
  }
}

console.log(-1);
*/

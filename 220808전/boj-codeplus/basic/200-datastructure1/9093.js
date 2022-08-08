let input = `2
I am happy today
We want to win the first prize`
  .trim()
  .split('\n');
// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let [n, ...arr] = input;
n = +n;
let result = '';
for (let i = 0; i < arr.length; i++) {
  result +=
    arr[i]
      .split(' ')
      .map((str) => str.split('').reverse().join(''))
      .join(' ') + '\n';
}

console.log(result.trim());

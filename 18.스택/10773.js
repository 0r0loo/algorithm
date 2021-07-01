let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((str) => +str);

const [n, ...arr] = input;
const result = [];
for (let i = 0; i < n; i++) {
  if (arr[i] === 0) {
    result.pop();
  } else {
    result.push(arr[i]);
  }
}

console.log(result.reduce((acc, cur) => acc + cur, 0));

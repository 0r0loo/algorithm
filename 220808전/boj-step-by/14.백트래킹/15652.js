// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ');

let input = `3 3`.split(' ');

let [n, m] = input;
[n, m] = [+n, +m];
const arr = Array(n)
  .fill()
  .map((_, idx) => idx + 1);
let result = '';
let output = [];

function dfs(idx, cnt) {
  if (cnt === m) {
    result += output.join(' ') + '\n';
    return;
  } else {
    for (let i = idx; i < n; i++) {
      output.push(i + 1);
      dfs(i, output.length);
      output.pop();
    }
  }
}

dfs(0, 0);
console.log(result);

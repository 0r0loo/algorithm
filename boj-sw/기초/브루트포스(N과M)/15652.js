let input = `4 2`.trim().split(' ');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [n, m] = input;
n = +n;
m = +m;

const list = Array.from(Array(n).fill(1), (num, idx) => num + idx);

// const result = getList(list, m);
// console.log(result);

// function getList(list, n) {
//   if (list.length === 0) {
//     return list[0];
//   }

//   for () {

//   }

// }

const output = [];
let result = '';

function dfs(idx, cnt) {
  if (cnt === m) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    output.push(i + 1);
    dfs(i, output.length);
    output.pop();
  }
}

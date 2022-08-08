let input = `4 2
9 8 7 1`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [nmStr, tsStr] = input;
const [n, m] = nmStr.split(' ').map(Number);
const tsList = tsStr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const visited = Array(n).fill(0);
const temp = Array(m).fill(0);
const result = [];

function dfs(level) {
  if (level === m) {
    result.push(temp.join(' '));
  } else {
    for (let i = 0; i < tsList.length; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        temp[level] = tsList[i];
        dfs(level + 1);
        visited[i] = 0;
      }
    }
  }
}
dfs(0);
console.log(result.join('\n'));

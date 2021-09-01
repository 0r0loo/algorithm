let input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...arr] = input;

const mapList = arr.map((str) => str.split('').map(Number));
let result = 0;
const resultList = [];
n = +n;
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let cnt = 0;

function dfs(x, y) {
  cnt++;
  mapList[x][y] = 0;
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && mapList[nx][ny] === 1) {
      dfs(nx, ny);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (mapList[i][j] === 1) {
      result++;
      dfs(i, j);
      resultList.push(cnt);
      cnt = 0;
    }
  }
}

console.log(result);
console.log(resultList.sort((a, b) => a - b).join('\n'));

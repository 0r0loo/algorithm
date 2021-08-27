let input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m, ...str] = input;

const edge = str.map((arr) => arr.split(' ').map(Number));

const graph = Array.from(Array(+n + 1), () => Array(+n + 1).fill(0));
const visited = Array.from({ length: +n + 1 }, () => 0);

for (let i = 0; i < edge.length; i++) {
  const [a, b] = edge[i];
  graph[a][b] = 1;
  graph[b][a] = 1;
}

let result = 0;
function dfs(v) {
  if (v > n) {
    return;
  } else {
    visited[v] = 1;
    result++;
    for (let i = 0; i < graph[v].length; i++) {
      if (graph[v][i] && !visited[i]) {
        dfs(i);
      }
    }
  }
}
dfs(1);
console.log(result - 1);

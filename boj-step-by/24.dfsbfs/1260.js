let input = `1000 1 1000
999 1000`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [str, ...strList] = input;
let [n, m, v] = str.split(' ').map(Number);
strList = strList.map((str) => str.split(' ').map(Number));

const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 0; i < strList.length; i++) {
  const [a, b] = strList[i];
  graph[a][b] = 1;
  graph[b][a] = 1;
}

function getDfs(n, graph, v) {
  const visited = Array(n + 1).fill(0);
  const dfsList = [];
  function dfs(v) {
    visited[v] = 1;
    dfsList.push(v);

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[i] && graph[v][i]) {
        dfs(i);
      }
    }
  }
  dfs(v);
  return dfsList.join(' ');
}

function getBfs(n, graph, v) {
  const bfsList = [];
  const visited = Array(n + 1).fill(0);

  function bfs(v) {
    const queue = [v];
    visited[v] = true;
    bfsList.push(v);

    while (queue.length > 0) {
      const head = queue.shift();
      for (let i = 0; i < graph[head].length; i++) {
        if (!visited[i] && graph[head][i]) {
          queue.push(i);
          visited[i] = 1;
          bfsList.push(i);
        }
      }
    }
  }
  bfs(v);
  return bfsList.join(' ');
}

console.log(getDfs(n, graph, v));
console.log(getBfs(n, graph, v));

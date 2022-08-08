let input = `5 17`.trim().split(' ').map(Number);
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [N, K] = input;
const visit = Array.from({ length: 100100 }, () => 0);

function bfs(N) {
  const queue = [];
  queue.push([N, 0]);
  visit[N] = 1;
  while (queue.length) {
    const [cur, time] = queue.shift();
    if (cur === K) return time;
    for (next of [cur - 1, cur + 1, cur * 2]) {
      if (!visit[next] && next >= 0 && next <= 100000) {
        visit[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(N));

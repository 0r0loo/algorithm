let input = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...tri] = input;
const triList = tri.map((str) => str.split(' ').map(Number));

for (let i = 1; i < triList.length; i++) {
  triList[i][0] = triList[i - 1][0] + triList[i][0];
  triList[i][triList[i].length - 1] =
    triList[i - 1][triList[i - 1].length - 1] +
    triList[i][triList[i].length - 1];
  for (let j = 1; j < triList[i].length - 1; j++) {
    triList[i][j] =
      triList[i][j] + Math.max(triList[i - 1][j - 1], triList[i - 1][j]);
  }
}

console.log(Math.max(...triList[triList.length - 1]));

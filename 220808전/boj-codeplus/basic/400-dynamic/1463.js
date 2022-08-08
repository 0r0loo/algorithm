let input = `11`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
input = +input;

let cntList = [0, 0, 1, 1];

for (let i = 4; i <= input; i++) {
  cntList[i] = cntList[i - 1] + 1;
  if (i % 3 === 0) {
    cntList[i] = Math.min(cntList[i / 3] + 1, cntList[i]);
  }
  if (i % 2 === 0) {
    cntList[i] = Math.min(cntList[i / 2] + 1, cntList[i]);
  }
}

console.log(cntList[input]);

/*
1 2 3 4 5 6 7 8 9 
0 1 1 2 3 2 3 ....
 */

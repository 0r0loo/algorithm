// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `10 500
93 181 245 214 315 36 185 138 216 295`
  .trim()
  .split('\n');

const [line1, numStr] = input;
const [n, m] = line1.split(' ').map((str) => +str);
const numList = numStr.split(' ').map((str) => +str);
let max = 0;

for (let i = 0; i < numList.length - 2; i++) {
  for (let j = i + 1; j < numList.length - 1; j++) {
    for (let k = j + 1; k < numList.length; k++) {
      if (
        numList[i] + numList[j] + numList[k] <= m &&
        max < numList[i] + numList[j] + numList[k]
      ) {
        max = numList[i] + numList[j] + numList[k];
      }
    }
  }
}
console.log(max);

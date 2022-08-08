let input = `1000000000`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()
// 첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.
input = +input;
let range = 1;
let block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);

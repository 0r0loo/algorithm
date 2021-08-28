let input = `4`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()

input = +input;

const divideFive = Math.floor(input / 5);
const fiveArr = Array.from({ length: divideFive + 1 }, (_, idx) => idx);
const result = [];
for (let num of fiveArr) {
  const restInput = input - num * 5;
  if (restInput % 3 === 0) {
    const divideThree = restInput / 3;
    result.push(num + divideThree);
  }
}

console.log(result.length === 0 ? -1 : Math.min(...result));

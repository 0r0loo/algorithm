let input = `55-50+40`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()

let minusIndx;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '-') {
    minusIndx = i;
    break;
  }
}

if (minusIndx !== undefined) {
  const a = input
    .slice(0, minusIndx)
    .split('+')
    .reduce((acc, cur) => +acc + +cur, 0);
  const b = input
    .slice(minusIndx + 1)
    .replace(/-/gi, '+')
    .split('+')
    .reduce((acc, cur) => +acc + +cur, 0);
  console.log(a - b);
} else {
  console.log(input.split('+').reduce((acc, cur) => +acc + +cur, 0));
}

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let result = '';

for (let i = 0; i < input.length - 1; i++) {
  const sideList = input[i].split(' ').sort((a, b) => a - b);
  if (sideList[0] ** 2 + sideList[1] ** 2 === sideList[2] ** 2) {
    result += 'right';
    result += '\n';
  } else {
    result += 'wrong';
    result += '\n';
  }
}

console.log(result.trim());

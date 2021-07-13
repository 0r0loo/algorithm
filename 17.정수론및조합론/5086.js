let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input = input.slice(0, input.length - 1);

let result = '';

input.forEach((str) => {
  const [a, b] = str.split(' ');
  if (b % a === 0) {
    result += 'factor\n';
  } else if (a % b === 0) {
    result += 'multiple\n';
  } else {
    result += 'neither\n';
  }
});

console.log(result.trim());

let input = `8 1 7 2 6 3 5 4`.trim().split(' ');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

input = input.join('');

if (input === '12345678') {
  console.log('ascending');
} else if (input === '87654321') {
  console.log('descending');
} else {
  console.log('mixed');
}

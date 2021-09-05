let input = `121
1231
12421
0`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

for (let i = 0; i < input.length; i++) {
  const str = input[i];
  const reverseStr = str.split('').reverse().join('');
  if (str === reverseStr) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

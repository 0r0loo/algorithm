let input = `baekjoon`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const result = [];
for (let i = 0; i < input.length; i++) {
  result.push(input.slice(i));
}
result.sort();
console.log(result.join('\n'));

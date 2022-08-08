// 수 정렬하기 2
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = `5
5
2
3
4
1`.split('\n');

input.shift();
let result = '';
input.sort((a, b) => a - b);

input.forEach((item) => (result += `${item}\n`));

console.log(result.trim());

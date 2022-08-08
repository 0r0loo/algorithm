// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = `5
5
2
3
4
1`.split('\n');

input.shift();

input.sort((a, b) => a - b);

input.forEach((item) => console.log(item));

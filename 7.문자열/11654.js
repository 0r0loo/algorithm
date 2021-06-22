// 아스키 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(input.charCodeAt());

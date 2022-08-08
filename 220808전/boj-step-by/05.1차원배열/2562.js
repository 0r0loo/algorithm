// 최댓값
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input.map((num) => Number(num));

const max = Math.max(...numbers);

const index = numbers.indexOf(max);

console.log(max);
console.log(index + 1);

// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let input = `2143`;

const result = input.split('').sort((a, b) => b - a);
console.log(result.join(''));

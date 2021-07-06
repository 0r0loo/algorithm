let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const a = input ** 2 * Math.PI;
const b = input ** 2 * 2;
console.log(a.toFixed(6));
console.log(b.toFixed(6));

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((str) => +str);

const [a, b] = input;

function gcd(a, b) {
  if (b === 0) return a;
  if (a > b) {
    const r = a % b;
    return gcd(b, r);
  } else {
    const r = b % a;
    return gcd(a, r);
  }
}

console.log(gcd(a, b));
console.log((a * b) / gcd(a, b));

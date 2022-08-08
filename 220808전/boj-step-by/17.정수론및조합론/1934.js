let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [n, ...strList] = input;
let result = '';
for (let i = 0; i < +n; i++) {
  const [a, b] = strList[i].split(' ');
  result += (+a * +b) / gcd(+a, +b);
  result += '\n';
}
console.log(result.trim());

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

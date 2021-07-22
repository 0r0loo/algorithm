// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ');

let input = `10 11 12`.split(' ');

let [a, b, c] = input.map((str) => BigInt(str));

const pow = (a, b, c) => {
  if (b === BigInt(0)) return BigInt(1);
  else {
    const num = pow(a, BigInt(parseInt(b / BigInt(2))), c);

    if (b % BigInt(2)) return (((num * num) % c) * a) % c;
    else return (num * num) % c;
  }
};

console.log(Number(pow(a, b, c)));

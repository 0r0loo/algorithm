// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let input = `9223372036854775807 9223372036854775808`.split(' ');

console.log(String(BigInt(input[0]) + BigInt(input[1])).split('n')[0]);

// BigInt를 쓰면 큰 수를 계산할수있음

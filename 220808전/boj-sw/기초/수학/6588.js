// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `8
20
42
0`.split('\n');

input.pop();

input = input.map(Number);
let result = '';
let isEnd = false;

for (let i = 0; i < input.length; i++) {
  const primeList = isPrime(input[i]);
  for (let j = 0; j < primeList.length - 1; j++) {
    for (let k = j + 1; k < primeList.length; k++) {
      if (input[i] === primeList[j] + primeList[k]) {
        result += `${input[i]} = ${primeList[j]} + ${primeList[k]}\n`;
        isEnd = true;
        break;
      }
    }
    if (isEnd) {
      isEnd = false;
      break;
    }
  }
}
console.log(result.trim());
function isPrime(n) {
  const primeList = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (primeList[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeList[j] = false;
      }
    }
  }
  primeList[2] = false;
  return primeList.map((is, idx) => is && idx).filter((num) => num);
}

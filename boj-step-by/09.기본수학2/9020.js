// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

input = `3
8
10
16`
  .trim()
  .split('\n');

let [n, ...evenList] = input.map((str) => +str);
let result = '';

for (let i = 0; i < n; i++) {
  const primeList = isPrime(evenList[i]);
  const tempList = [];
  for (let j = 2; j <= evenList[i] / 2; j++) {
    if (primeList[j]) {
      const rest = evenList[i] - j;
      if (primeList[rest]) {
        tempList.push(`${j} ${rest}`);
      }
    }
  }
  if (tempList.length === 1) {
    result += tempList[0];
  } else {
    const [a, b] = tempList[0].split(' ');
    let min = Math.abs(+b - +a);
    let minStr = '';
    tempList.forEach((str) => {
      const [c, d] = str.split(' ');
      const range = Math.abs(+d - +c);
      if (range < min) {
        min = range;
        minStr = str;
      }
    });
    result += minStr;
  }
  result += '\n';
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
  return primeList;
}

/*

지존 for 문 남발로 시간초과

let [n, ...evenList] = input.map((str) => +str);
const max = Math.max(...evenList);
const primeList = isPrime(max);
let result = '';

for (let i = 0; i < evenList.length; i++) {
  const prime = [];
  for (let j = 2; j < evenList[i]; j++) {
    for (let k = 2; k < evenList[i]; k++) {
      if (k < j) {
        continue;
      }
      if (primeList[j] && primeList[k] && j + k === evenList[i]) {
        prime.push(`${j} ${k}`);
      }
    }
  }
  if (prime.length === 1) {
    result += prime[0];
  } else {
    const [a, b] = prime[0].split(' ');
    let min = Math.abs(+b - +a);
    let minStr = '';
    prime.forEach((str) => {
      const [c, d] = str.split(' ');
      const range = Math.abs(+d - +c);
      if (range < min) {
        min = range;
        minStr = str;
      }
    });
    result += minStr;
  }
  result += '\n';
}

console.log(result);

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
  return primeList;
}
 */

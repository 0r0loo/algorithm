let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = input[0];
const nList = input[1].split(' ').map((str) => +str);

const max = Math.max(...nList);

const primeList = Array(max + 1)
  .fill(true)
  .fill(false, 0, 2);

for (let i = 2; i * i <= max; i++) {
  if (primeList[i]) {
    for (let j = i * i; j <= max; j += i) {
      primeList[j] = false;
    }
  }
}

console.log(nList.filter((num) => primeList[num]).length);

let input = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`.split('\n');

let [n, k] = input[0].split(' ').map(Number);
input.shift();
input = input.map(Number);
let result = 0;
for (let i = input.length - 1; i >= 0; i--) {
  let quotient = Math.floor(k / input[i]);

  if (quotient !== 0) {
    result += quotient;
    k -= quotient * input[i];
  }
  if (k === 0) break;
}

console.log(result);

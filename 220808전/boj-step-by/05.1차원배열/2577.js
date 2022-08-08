// 숫자의 개수
// 최댓값
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b, c] = input.map((num) => Number(num));

const result = a * b * c;
const str = String(result);

for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (Number(str[j]) === i) {
      count++;
    }
  }
  console.log(count);
}

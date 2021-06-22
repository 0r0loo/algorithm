// 문자열 반복
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = `2
3 ABC
5 /HTP`.split('\n');

const testCase = input[0];

for (let i = 1; i <= testCase; i++) {
  const [num, str] = input[i].split(' ');
  let result = '';
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < num; k++) {
      result += str[j];
    }
  }
  console.log(result);
}

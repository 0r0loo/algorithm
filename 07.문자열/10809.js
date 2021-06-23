// 알파벳 찾기
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();

const input = 'baekjoon';

// 97 a
// 122 z
// String.fromCharCode(97) -> a

let result = '';

for (let i = 97; i <= 122; i++) {
  const alpa = String.fromCharCode(i);
  const idx = input.indexOf(alpa);
  if (idx === -1) {
    result += '-1 ';
  } else {
    result += String(idx) + ' ';
  }
}

console.log(result.slice(0, result.length - 1));

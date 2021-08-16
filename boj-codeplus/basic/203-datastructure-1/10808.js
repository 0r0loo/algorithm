let input = `baekjoon`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()

const map1 = new Map();

for (let char of input) {
  if (map1.has(char)) {
    map1.set(char, map1.get(char) + 1);
  } else {
    map1.set(char, 1);
  }
}

let result = '';
for (let i = 97; i <= 122; i++) {
  result += map1.get(String.fromCharCode(i)) || 0;
  result += ' ';
}

console.log(result.trim());

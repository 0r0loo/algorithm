// 그룹 단어 체커

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let input = `4
aba
abab
abcabc
a`
  .trim()
  .split('\n');

const [n, ...strList] = input;
let cnt = 0;

for (let i = 0; i < +n; i++) {
  const tempList = [];
  let isCheck = false;
  tempList.push(strList[i][0]);
  for (let j = 0; j < strList[i].length - 1; j++) {
    if (strList[i][j] === strList[i][j + 1]) {
      continue;
    } else {
      isCheck = tempList.includes(strList[i][j + 1]);
      if (isCheck) {
        break;
      } else {
        tempList.push(strList[i][j + 1]);
      }
    }
  }
  if (!isCheck) {
    cnt++;
  }
}

console.log(cnt);

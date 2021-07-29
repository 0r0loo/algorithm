// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `4
9 5 4 8`
  .trim()
  .split('\n');

const [n, str] = input;
const aList = str.split(' ').map((str) => +str);
const ohBig = new Array(+n).fill(-1);
let stack = [[]];
for (let i = 0; i < aList.length; i++) {
  while (stack[stack.length - 1][0] < aList[i]) {
    const [tmp, idx] = stack.pop();
    ohBig[idx] = aList[i];
  }
  stack.push([aList[i], i]);
}

console.log(ohBig.join(' '));

/*
  풀이

  https://hooongs.tistory.com/329
*/
/*
시간초과

  let rightList = [...aList];
rightList.shift();

for (let i = 0; i < aList.length; i++) {
  while (true) {
    if (aList[i] < rightList[0]) {
      result += `${rightList[0]} `;
      break;
    } else if (rightList.length === 0) {
      result += '-1 ';
      rightList = aList.slice(i + 1);
      break;
    } else {
      rightList.shift();
    }
  }
}
*/

/*
  메모리 초과
  for (let i = 0; i < aList.length; i++) {
  const rightList = aList.slice(i + 1);
  while (true) {
    if (aList[i] < rightList[0]) {
      result += `${rightList[0]} `;
      break;
    } else if (rightList.length === 0) {
      result += '-1 ';
      break;
    } else {
      rightList.shift();
    }
  }
}


*/

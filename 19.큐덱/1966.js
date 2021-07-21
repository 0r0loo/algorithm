// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`
  .trim()
  .split('\n');

let [n, ...testList] = input;

let result = '';
for (let i = 0; i < testList.length; i += 2) {
  result +=
    solution(
      testList[i + 1].split(' ').map((str) => +str),
      +testList[i].split(' ')[1]
    ) + '\n';
}

console.log(result.trim());
function solution(priorities, location) {
  var answer = 0;
  let myLoc = location;

  while (priorities.length > 0) {
    const head = priorities.shift();
    if (priorities.filter((num) => head < num).length === 0) {
      answer++;
      if (myLoc === 0) {
        return answer;
      }
    } else {
      priorities.push(head);
    }
    myLoc--;
    if (myLoc === -1) {
      myLoc = priorities.length - 1;
    }
  }

  return answer;
}

// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `4
0 3
1 5
45 50
1 38`
  .trim()
  .split('\n');

let [n, ...caseList] = input;
let result = '';

for (let i = 0; i < caseList.length; i++) {
  let [x, y] = caseList[i].split(' ');
  const distance = y - x;
  const sqrtDistance = Math.sqrt(distance);
  const floorSqrtDistance = Math.floor(sqrtDistance);

  console.log(distance, floorSqrtDistance);

  if (floorSqrtDistance === Math.sqrt(distance)) {
    result += floorSqrtDistance * 2 - 1 + '\n';
  } else if (distance <= floorSqrtDistance ** 2 + floorSqrtDistance) {
    result += floorSqrtDistance * 2 + '\n';
  } else {
    result += floorSqrtDistance * 2 + 1 + '\n';
  }
}

console.log(result.trim());

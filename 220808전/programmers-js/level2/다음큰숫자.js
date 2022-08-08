function solution(n) {
  let oneCnt = 0;
  const biNum = String(n.toString(2));

  for (let i of biNum) {
    if (i === '1') oneCnt++;
  }

  let i = n;
  while (true) {
    i++;
    if (oneCnt === oneCount(i)) return i;
  }
}

function oneCount(n) {
  let oneCnt = 0;
  for (let i of String(n.toString(2))) {
    if (i === '1') oneCnt++;
  }
  return oneCnt;
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23

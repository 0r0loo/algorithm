function solution(s) {
  let biCnt = 0;
  let deleteZeroCnt = 0;

  while (s !== '1') {
    const result = transBinary(s);
    s = result[0];
    deleteZeroCnt += result[1];
    biCnt++;
  }
  return [biCnt, deleteZeroCnt];
}

function transBinary(s) {
  const len = s.length;
  const newSLen = s
    .split('')
    .filter((str) => str === '1')
    .join('').length;
  const deleteZeroCnt = len - newSLen;
  return [newSLen.toString(2), deleteZeroCnt];
}

// 이진변환 횟수 제거된 0의 갯수
console.log(solution('110010101001')); // [3, 8]

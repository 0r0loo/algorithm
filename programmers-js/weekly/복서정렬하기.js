function solution(weights, head2head) {
  const n = weights.length;

  const table = [];

  // 승률, 이긴횟수, 몸무게, 번호

  for (let i = 0; i < n; i++) {
    const boxerInfo = [];

    // 승률
    const winCnt = head2head[i].replace(/[^W]/g, '').length;
    const loswCnt = head2head[i].replace(/[^L]/g, '').length;
    let winRate = (winCnt / (winCnt + loswCnt)) * 1000000;
    if (isNaN(winRate)) {
      winRate = 0;
    }
    boxerInfo.push(winRate);
    // 이긴 횟수
    let upperWinCnt = 0;
    for (let j = 0; j < head2head[i].length; j++) {
      if (head2head[i][j] === 'W') {
        if (weights[i] < weights[j]) {
          upperWinCnt++;
        }
      }
    }
    boxerInfo.push(upperWinCnt);
    // 몸무게
    boxerInfo.push(weights[i]);
    // 번호
    boxerInfo.push(i + 1);

    table.push(boxerInfo);
  }

  const result = table
    .sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[1] === b[1]) {
          if (a[2] === b[2]) {
            return a[3] - b[3];
          } else {
            return b[2] - a[2];
          }
        } else {
          return b[1] - a[1];
        }
      } else {
        return b[0] - a[0];
      }
    })
    .map((boxerInfo) => boxerInfo[3]);
  return result;
}
// 승률 높은게 앞
// 무거운복서 이긴 횟수 높은게 앞
// 몸무게가 무거운 앞
// 작은 번호가 앞

console.log(solution([50, 82, 75, 120], ['NLWL', 'WNLL', 'LWNW', 'WWLN']));
console.log(solution([60, 70, 60], ['NNN', 'NNN', 'NNN']));

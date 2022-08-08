function solution(N, stages) {
  let list = [];

  for (let i = 1; i <= N; i++) {
    let sucCnt = 0;
    let failCnt = 0;
    stages.forEach((num) => {
      if (num > i) {
        sucCnt++;
      } else if (num === i) {
        sucCnt++;
        failCnt++;
      }
    });
    // console.log(`fail : ${failCnt} suc : ${sucCnt}`);
    list.push([failCnt / sucCnt, i]);
  }

  list.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  return list.map((arr) => arr[1]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));

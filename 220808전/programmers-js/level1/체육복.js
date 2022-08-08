function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = lost.length - 1; i >= 0; i--) {
    const index = reserve.indexOf(lost[i]);
    if (index !== -1) {
      lost.splice(i, 1);
      reserve.splice(index, 1);
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    let indexLf = lost.indexOf(reserve[i] - 1);
    let indexRt = lost.indexOf(reserve[i] + 1);
    if (indexLf !== -1) {
      lost.splice(indexLf, 1);
    } else if (indexRt !== -1) {
      lost.splice(indexRt, 1);
    }
  }
  return n - lost.length;
}

// console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [3], [1]));
console.log(solution(7, [2, 4, 5, 6, 7], [1, 3, 4, 5, 6, 7])); // 7

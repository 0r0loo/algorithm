function solution(citations) {
  citations.sort((a, b) => a - b);

  let i = 0;
  let idx = 0;

  while (i !== citations.slice(idx).length) {
    if (i < citations[idx]) {
      i++;
    } else {
      idx++;
    }
  }
  return i;
}

// 문제를 이해 못해서 개오래걸렸다...

console.log(solution([1, 3, 5, 7, 9, 11])); // 4
console.log(solution([88, 89])); // 2

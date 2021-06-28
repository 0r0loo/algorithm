function solution(numbers) {
  var answer = '';

  const result = numbers
    .map((item) => '' + item)
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      if (a === b) return 0;
    });

  return result.reduce((acc, cur) => acc + cur, '');
}

console.log(solution([3, 30, 34, 5, 9]));

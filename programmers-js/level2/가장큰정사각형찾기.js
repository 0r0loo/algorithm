function solution(board) {
  const leng = board.length;

  const arr2 = Array.from(Array(leng + 2), () => Array(leng + 2).fill(0));

  for (let i = 1; i < arr2.length - 1; i++) {
    for (let j = 1; j < arr2.length - 1; j++) {
      arr2[i][j] = board[i - 1][j - 1];
    }
  }

  let max = 0;
  for (let i = 1; i < arr2.length - 1; i++) {
    for (let j = 1; j < arr2.length - 1; j++) {
      if (arr2[i][j] !== 0) {
        arr2[i][j] =
          Math.min(arr2[i - 1][j], arr2[i][j - 1], arr2[i - 1][j - 1]) + 1;
        if (max < arr2[i][j]) {
          max = arr2[i][j];
        }
      }
    }
  }
  return max ** 2;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
); // 9

console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
); // 4

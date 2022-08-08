function solution(board, skill) {
  const tempArr = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(0)
  );

  skill.forEach(([type, r1, c1, r2, c2, degree]) => {});

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] += tempArr[i][j];
    }
  }
  let result = 0;
  board.forEach((list) => {
    result += list.filter((item) => item > 0).length;
  });
  return result;
}

// type 1 공격 2 회복
// 시작 r1 c1 행 열
// 끝 r2 c2   행 열
// 정도

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
); // 10

// console.log(
//   solution(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     [
//       [1, 1, 1, 2, 2, 4],
//       [1, 0, 0, 1, 1, 2],
//       [2, 2, 0, 2, 0, 100],
//     ]
//   )
// ); // 6

/*
시간초과
function solution(board, skill) {
  for (let i = 0; i < skill.length; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];
    for (let row = r1; row <= r2; row++) {
      for (let col = c1; col <= c2; col++) {
        if (type === 1) {
          board[row][col] -= degree;
        } else {
          board[row][col] += degree;
        }
      }
    }
  }
  let result = 0;
  board.forEach((list) => {
    result += list.filter((building) => building > 0).length;
  });
  return result;
}
*/

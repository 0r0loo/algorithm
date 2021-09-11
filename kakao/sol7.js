function solution(board, aloc, bloc) {
  board = makeGameBoard(board);
  const findPaths = (ai, aj, bi, bj) => {};
  findPaths();
}

console.log(
  solution(
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    [1, 0],
    [1, 2]
  )
);

function makeGameBoard(board) {
  board = board;
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };

  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };

  return board;
}

function makeBoard(n) {
  let board = [];

  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }

  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };

  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };

  return board;
}

function robotPaths(n, board, i, j) {
  let paths = 0;
  board = makeBoard(n);

  // 재귀를 쓸 함수입니다.
  const findPaths = (i, j) => {
    // 목적지에 도달했을때 재귀를 멈추기 위한 조건입니다.
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }

    // 배열 범위를 나갔을때 나가지말라고 해주는 조건입니다.
    if (i < 0 || j < 0) return;
    if (i >= n || j >= n) return;

    // 방문 여부를 확인합니다. 방문 했으면 끝냅니다.
    if (board.hasBeenVisited(i, j)) {
      return;
    } else {
      // 일단 이 위치는 방문했다라고 하고 그다음 그 사방향 위 아래 오른쪽 왼쪽 으로 나아갑니다.
      board.togglePiece(i, j);
      findPaths(i, j + 1); // 오른쪽
      findPaths(i + 1, j); // 아래
      findPaths(i, j - 1); // 왼쪽
      findPaths(i - 1, j); // 위
      board.togglePiece(i, j); // 다시 되돌려 줘서 다른 경우랑 부딪히는걸 피합니다.
    }
  };
  findPaths(0, 0); // 0, 0 에서 출발합니다.

  return paths;
}

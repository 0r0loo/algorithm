function solution(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Array(i).fill(0));
  }

  let count = 0;
  let x = -1;
  let y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) arr[++x][y] = ++count;
    for (let i = 0; i < n - 1; i++) arr[x][++y] = ++count;
    for (let i = 0; i < n - 2; i++) arr[--x][--y] = ++count;
    n -= 3;
  }
  return arr.reduce((acc, cur) => [...acc, ...cur]);
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));

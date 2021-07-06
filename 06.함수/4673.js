// 셀프 넘버
// 이거어케푸냐

const arr = new Array(10001).fill(true);

for (let i = 0; i < 10001; i++) {
  const sum = String(i)
    .split('')
    .reduce((acc, cur) => acc + +cur, 0);
  arr[sum + i] = false;
}
let result = '';
arr.forEach((isTrue, idx) => {
  if (isTrue) {
    result += idx + '\n';
  }
});

console.log(result.trim());

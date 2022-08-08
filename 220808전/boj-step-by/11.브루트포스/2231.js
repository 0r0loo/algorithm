let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

const result = [];

for (let i = 0; i < input; i++) {
  const m =
    i +
    String(i)
      .split('')
      .reduce((acc, cur) => acc + +cur, 0);
  if (m === input) {
    result.push(i);
  }
}
if (result.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...result));
}

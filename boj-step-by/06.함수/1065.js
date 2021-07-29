let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

const n = +input;

const arr = new Array(n + 1).fill(true);

for (let i = 0; i < n + 1; i++) {
  const numList = String(i).split('');
  if (numList.length < 3) {
    continue;
  } else {
    const d = numList[1] - numList[0];
    for (let j = 1; j < numList.length - 1; j++) {
      if (d !== numList[j + 1] - numList[j]) {
        arr[i] = false;
        break;
      }
    }
  }
}
console.log(arr.filter((is) => is).length - 1);

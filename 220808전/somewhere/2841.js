let input = `5 15
2 8
2 10
2 12
2 10
2 5`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((str) => str.split(' '));
const [first, ...melodyList] = input;
const [tone, _] = first;
const guitar = Array.from(Array(+tone + 1), () => Array(0));
let result = 0;
melodyList.forEach((arr) => {
  const [idx, val] = arr.map(Number);

  if (guitar[idx].length === 0) {
    guitar[idx].push(val);
    result++;
  } else if (guitar[idx][guitar[idx].length - 1] < val) {
    guitar[idx].push(val);
    result++;
  } else if (guitar[idx][guitar[idx].length - 1] > val) {
    while (guitar[idx][guitar[idx].length - 1] > val) {
      guitar[idx].pop();
      result++;
    }
    if (guitar[idx][guitar[idx].length - 1] !== val) {
      guitar[idx].push(val);
      result++;
    }
  } else if (guitar[idx][guitar[idx].length - 1] === val) {
  }
});
console.log(result);

let input = `2
6 12 10
6 12 6
30 50 72`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [_, ...tsList] = input;

for (let ts of tsList) {
  const [h, w, n] = ts.split(' ').map(Number);
  let rest = n % h;
  if (rest === 0) rest = h;
  const 몫 = n / h;
  if (Math.ceil(몫) < 10) {
    console.log(`${rest}0${Math.ceil(몫)}`);
  } else {
    console.log(`${rest}${Math.ceil(몫)}`);
  }
}

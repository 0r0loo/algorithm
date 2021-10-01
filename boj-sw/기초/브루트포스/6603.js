let input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();
let result = '';
input.forEach((str) => {
  let [n, ...tsList] = str.split(' ').map(Number);
  const results = getCombinations(tsList, 6).map((arr) => arr.join(' '));
  result += results.join('\n');
  result += '\n\n';
});
console.log(result.trim());

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}

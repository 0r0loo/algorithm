let input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split('\n');

let [n, nStr, m, mStr] = input;
const nList = nStr.split(' ').map(Number);

const mList = mStr.split(' ').map(Number);
let result = '';
const map1 = new Map();

nList.forEach((num) => {
  if (map1.has(num)) {
    map1.set(num, map1.get(num) + 1);
  } else {
    map1.set(num, 1);
  }
});

mList.forEach((num) => {
  if (map1.has(num)) {
    result += map1.get(num);
  } else {
    result += 0;
  }
  result += ' ';
});
console.log(result.trim());

let input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, ...tss] = input;

const map1 = new Map();
const result = [];

tss.forEach((name) => {
  if (map1.has(name)) {
    map1.set(name, map1.get(name) + 1);
  } else {
    map1.set(name, 1);
  }
});

for (let [key, value] of map1) {
  if (value === 2) {
    result.push(key);
  }
}

console.log(result.length + '\n' + result.sort().join('\n'));

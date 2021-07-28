let input = `9
5 12 7 10 9 1 2 3 11
13`.split('\n');

let [n, str, x] = input;
[n, x] = [+n, +x];
let list = str.split(' ').map(Number);

list.sort((a, b) => a - b);

let cnt = 0;
for (let i = 0; i < list.length - 1; i++) {
  for (let j = i + 1; j < list.length; j++) {
    if (list[i] + list[j] === x) {
      cnt++;
      break;
    } else if (list[i] + list[j] > x) {
      break;
    }
  }
}

console.log(cnt);

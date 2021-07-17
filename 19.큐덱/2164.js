let input = 6;
input = +input;

const queue = [];

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

let head = 0;

while (queue.length - head !== 1) {
  head++;
  queue.push(queue[head]);
  head++;
}
console.log(queue[head]);

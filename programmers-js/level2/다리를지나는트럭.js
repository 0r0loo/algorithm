function solution(bridge_length, weight, truck_weights) {
  const result = [];
  const bridge = Array(bridge_length).fill(0);
  let time = 0;
  let leng = truck_weights.length;

  while (result.length !== leng) {
    const head = bridge.shift();
    if (head !== 0) {
      result.push(head);
    }
    const sum =
      bridge.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] || 0;
    if (sum <= weight) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
    time++;
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110

function solution(progresses, speeds) {
  var answer = [];

  let pointer = 0;

  while (pointer !== progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[pointer] >= 100) {
      pointer++;
      let cnt = 1;
      while (progresses[pointer] >= 100) {
        pointer++;
        cnt++;
      }
      answer.push(cnt);
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]

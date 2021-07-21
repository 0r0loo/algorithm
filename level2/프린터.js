function solution(priorities, location) {
  var answer = 0;
  let myLoc = location;

  while (priorities.length > 0) {
    const head = priorities.shift();
    if (priorities.filter((num) => head < num).length === 0) {
      answer++;
      if (myLoc === 0) {
        return answer;
      }
    } else {
      priorities.push(head);
    }
    myLoc--;
    if (myLoc === -1) {
      myLoc = priorities.length - 1;
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));

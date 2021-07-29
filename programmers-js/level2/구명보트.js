function solution(people, limit) {
  let result = 0;
  let lIdx = 0;
  let rIdx = people.length - 1;
  people.sort((a, b) => a - b);

  while (lIdx <= rIdx) {
    if (people[lIdx] + people[rIdx] <= limit) {
      lIdx++;
      rIdx--;
    } else {
      rIdx--;
    }
    result++;
  }
  return result;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3

/**
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let result = 0;
  while (people.length > 0) {
    if (people.length === 1) {
      result++;
      break;
    } else if (people[0] + people[people.length - 1] > limit) {
      people.shift();
      result++;
    } else {
      for (let i = 1; i < people.length; i++) {
        if (people[0] + people[i] <= limit) {
          people.splice(i, 1);
          people.shift();
          result++;
          break;
        }
      }
    }
  }
  return result;
}

 */

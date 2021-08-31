function solution(A) {
  const map1 = new Map();

  A.forEach((num) => {
    if (map1.has(num)) {
      map1.set(num, map1.get(num) + 1);
    } else {
      map1.set(num, 1);
    }
  });

  for (let [key, val] of map1) {
    if (val % 2 !== 0) {
      return key;
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));

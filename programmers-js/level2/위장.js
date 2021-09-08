function solution(clothes) {
  const clothesMap = new Map();

  clothes.forEach((cloth) => {
    if (clothesMap.has(cloth[1])) {
      clothesMap.get(cloth[1]).push(cloth[0]);
    } else {
      clothesMap.set(cloth[1], [cloth[0]]);
    }
  });

  let result = 1;

  for (let [key, val] of clothesMap) {
    result *= clothesMap.get(key).length + 1;
  }
  return result - 1;
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
);

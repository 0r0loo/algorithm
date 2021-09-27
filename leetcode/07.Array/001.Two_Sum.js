/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 풀이 2
var twoSum = function (nums, target) {
  const numsMap = new Map();
  nums.forEach((num, idx) => {
    numsMap.set(num, idx);
  });

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numsMap.has(target - num) && numsMap.get(target - num) !== i) {
      return [i, numsMap.get(target - num)].sort((a, b) => a - b);
    }
  }
};

let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
/*
풀이 1
브루트 포스 : for 문 2번 써서 다 더해보기

풀이 2
첫 번째 수를 뺀 결과 키 조회

풀이 3 조회 구조 개선 => for문 2개를 -> 1개로 근데 성능별차이없음

풀이 4 투 포인터 이용
정렬이 되어있지 않아서 풀 수 없음 -> 정렬을 해버리면 기존 인덱스가 망가짐
(정렬만 되어있으면 쌉가능)

*/

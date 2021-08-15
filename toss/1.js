function solution(codeOwnersMap, directory) {
  const directoryList = directory.split('/');

  let obj = codeOwnersMap;

  for (let item of directoryList) {
    obj = obj[item];
  }
  return obj;
}

const codeOwnersMap = {
  scripts: ['배수진'],
  services: {
    'business-ledger': ['고찬균', '배수진'],
    'toss-card': ['채주민', '유재섭'],
    payments: ['유재섭'],
  },
};

/* 예시 실행 결과 */
// ['배수진']
console.log(solution(codeOwnersMap, 'scripts'));

// ['고찬균', '배수진']
console.log(solution(codeOwnersMap, 'services/business-ledger'));

// ['유재섭']
console.log(solution(codeOwnersMap, 'services/payments'));

function solution(dartResult) {
  var answer = 0;

  const scoreList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const bonusList = ['S', 'D', 'T'];
  const optionList = ['*', '#'];

  const result = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === '1') {
      if (dartResult[i + 1] === '0') {
        result.push(10);
        continue;
      }
    }

    if (dartResult[i] === '0') {
      if (dartResult[i - 1] === '1') {
        continue;
      }
    }

    if (scoreList.indexOf(dartResult[i]) !== -1) {
      result.push(+dartResult[i]);
    } else if (bonusList.indexOf(dartResult[i]) !== -1) {
      const bonus = dartResult[i];

      if (bonus === 'S') {
      } else if (bonus === 'D') {
        result[result.length - 1] = result[result.length - 1] ** 2;
      } else {
        // 'T'
        result[result.length - 1] = result[result.length - 1] ** 3;
      }
    } else {
      // option
      const leng = result.length;
      if (leng === 1) {
        if (dartResult[i] === '*') {
          result[leng - 1] = result[leng - 1] * 2;
        } else {
          result[leng - 1] = result[leng - 1] * -1;
        }
      } else {
        if (dartResult[i] === '*') {
          result[leng - 1] = result[leng - 1] * 2;
          result[leng - 2] = result[leng - 2] * 2;
        } else {
          result[leng - 1] = result[leng - 1] * -1;
        }
      }
    }
  }

  console.log(result);
  return result.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('1D2S#10S'));

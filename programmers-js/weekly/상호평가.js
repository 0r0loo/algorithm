// 21. 08. 09
function solution(scores) {
  let result = '';

  for (let i = 0; i < scores.length; i++) {
    const myScore = scores[i][i];
    const myScoreList = [];
    for (let j = 0; j < scores[i].length; j++) {
      myScoreList.push(scores[j][i]);
    }
    const exceptList = myScoreList.filter((_, idx) => i !== idx);
    const maxScore = Math.max(...exceptList);
    const minScore = Math.min(...exceptList);
    let isExcept = false;
    if (myScore > maxScore || myScore < minScore) {
      isExcept = true;
    }

    if (isExcept) {
      const sum = exceptList.reduce((acc, cur) => acc + cur, 0);
      result += getGrade(sum / exceptList.length);
    } else {
      const sum = myScoreList.reduce((acc, cur) => acc + cur, 0);
      result += getGrade(sum / myScoreList.length);
    }
  }

  return result;
}

function getGrade(num) {
  if (num >= 90) {
    return 'A';
  } else if (num >= 80) {
    return 'B';
  } else if (num >= 70) {
    return 'C';
  } else if (num >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

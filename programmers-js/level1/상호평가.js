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

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
); // "FBABD"

console.log(
  solution([
    [50, 90],
    [50, 87],
  ])
); // "DA"

console.log(
  solution([
    [70, 49, 90],
    [68, 50, 38],
    [73, 31, 100],
  ])
); // CFD

/*
행과열이 반대로됨
    const myScore = scores[i][i];
    const exceptList = scores[i].filter((_, idx) => idx !== i);
    const maxScore = Math.max(...exceptList);
    const minScore = Math.min(...exceptList);
    let isExcept = false;
    if (myScore > maxScore || myScore < minScore) {
      isExcept = true;
    }

    if (isExcept) {
      const sum = exceptList.reduce((acc, cur) => acc + cur, 0);
      result += getGrade(sum / exceptList.length);
      console.log(i, sum / exceptList.length);
    } else {
      const sum = scores[i].reduce((acc, cur) => acc + cur, 0);
      result += getGrade(sum / scores[i].length);
      console.log(i, sum / scores[i].length);
    }
*/

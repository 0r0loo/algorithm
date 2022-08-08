function solution(a, b) {
  // 금, 토, 일, 월, 화, 수, 목
  const dayList = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  /*
        1 : 31
        2 : 29 60
            31 91
            30 121
            31 152
            31 182
            30 213
            31 244
            30 274
            31 305
            30 335
            31 366
    */
  let day = 0;
  day += b;

  switch (a) {
    case 1:
      return dayList[(day % 7 || 7) - 1];
    case 2:
      day += 31;
      return dayList[(day % 7 || 7) - 1];
    case 3:
      day += 60;
      return dayList[(day % 7 || 7) - 1];
    case 4:
      day += 91;
      return dayList[(day % 7 || 7) - 1];
    case 5:
      day += 121;
      return dayList[(day % 7 || 7) - 1];
    case 6:
      day += 152;
      return dayList[(day % 7 || 7) - 1];
    case 7:
      day += 182;
      return dayList[(day % 7 || 7) - 1];
    case 8:
      day += 213;
      return dayList[(day % 7 || 7) - 1];
    case 9:
      day += 244;
      return dayList[(day % 7 || 7) - 1];
    case 10:
      day += 274;
      return dayList[(day % 7 || 7) - 1];
    case 11:
      day += 305;
      return dayList[(day % 7 || 7) - 1];
    case 12:
      day += 335;
      return dayList[(day % 7 || 7) - 1];
  }
}

console.log(solution(1, 7));

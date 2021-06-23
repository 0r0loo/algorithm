/*

    1 : 2초   
    2 : 3초   abc 65~67
    3 : 4초   def 68
    4 : 5초   ghi 71
    5 : 6초   jkl 74
    6 : 7초   mno 77
    7 : 8초   pqrs 80
    8 : 9초   tuv 84~86
    9 : 10초  wxyz 87~90
    0 : 11초  
 */

// const input = 'UNUCIC';

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const asciList = [];

for (let i = 0; i < input.length; i++) {
  asciList.push(input.charCodeAt(i));
}

let sum = 0;

asciList.forEach((item) => {
  if (item >= 87) {
    sum += 10;
  } else if (item >= 84) {
    sum += 9;
  } else if (item >= 80) {
    sum += 8;
  } else if (item >= 77) {
    sum += 7;
  } else if (item >= 74) {
    sum += 6;
  } else if (item >= 71) {
    sum += 5;
  } else if (item >= 68) {
    sum += 4;
  } else if (item >= 65) {
    sum += 3;
  }
});
console.log(sum);

/*

    1 : 2초   
    2 : 3초   abc 65~67
    3 : 4초   def 68
    4 : 5초   ghi 71
    5 : 6초   jkl 74
    6 : 7초   mno 77
    7 : 8초   pqrs 80
    8 : 9초   tuv 84~86
    9 : 10초  wxyz 87~90
    0 : 11초  
 */

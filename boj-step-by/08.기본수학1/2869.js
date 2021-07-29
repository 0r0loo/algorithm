// 달팽이는 올라가고싶다.
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// 등차 수열
input = '100 99 1000000000'.split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const v = Number(input[2]);

if ((v - b) % (a - b) === 0) {
  console.log((v - b) / (a - b));
} else {
  console.log(Math.floor((v - b) / (a - b)) + 1);
}

// if (v % (a - b) === 0) {
//   console.log((v - b) / (a - b));
// } else {
//   const share = Math.floor(v / (a - b));
//   const temp = (a - b) * share;
//   if (temp + b >= v) {
//     console.log(share);
//   } else {
//     console.log(share + 1);
//   }
// }

/*
    시간 초과
    let day = 1;
    let climb = 0;
    
    while (climb < v) {
      climb += a;
      if (climb < v) {
        climb -= b;
        day++;
      } else {
        break;
      }
    }
    console.log(day);
*/

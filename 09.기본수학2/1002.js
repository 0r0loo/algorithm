// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5`.split('\n');

let [n, ...locList] = input;
let result = '';
for (let i = 0; i < +n; i++) {
  const [x1, y1, r1, x2, y2, r2] = locList[i].split(' ').map((str) => +str);
  const d = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);

  if (d === 0 && r1 === r2) {
    result += '-1\n';
  } else if (d > Math.abs(r2 - r1) && d < r1 + r2) {
    result += '2\n';
  } else if (Math.abs(r2 - r1) === d || r2 + r1 === d) {
    result += '1\n';
  } else if (r1 + r2 < d || Math.abs(r2 - r1) > d || d === 0) {
    result += '0\n';
  }
}

console.log(result.trim());

/*
  두점에서 교차하는 두 원
한점에서 만나는 두 원
교차 하지 않는 두 원
무한히 교차하는 두 원
 

1. 두점에서 교차하는 두 원
(1) 그림 참고

조건식이 r' - r < d < r + r'이 성립하면 된다. r2 > r1 인 조건이 없기 때문에 r2-r1를 절대값으로 계산해주었다.

if(d > Math.abs(r2 - r1) && d < r1 + r2) {
	bw.write("2");
}
 

2. 한점에서 만나는 두 원
(2) 그림 : 두원이 외접하는 경우이므로, 조건식이 r + r' == d 가 된다.

(3) 그림 : 두원이 내접하는 경우이므로, 조건식이 r - r' == d 가 된다.

else if(Math.abs(r1 - r2) == d || r1 + r2 == d) {
	bw.write("1");
}
 

3. 교차하지 않는 두 원
(4) 그림 : 두 원의 거리(d)가 r + r'보다 크면 된다. 조건식은 r + r' < d 

(5) 그림 : 두 원의 거리(d)가 r' - r 보다 작으면 된다. 조건식은 Math.abs(r - r') > d

(6) 그림 : 동심원일 경우, 그리고 두 원의 거리(d) == 0 이 되는 경우이다. 조건식은 d == 0

else if (r1 + r2 < d || Math.abs(r2 - r1) > d || d == 0) {
	bw.write("0");
}
 

4. 무한히 교차하는 두 원
두 원 사이의 거리(d) == 0 이고, r == r' 인 경우이다. 조건식은 r == r' && d == 0

if(d == 0 && r1 == r2) {
	bw.write("-1");
}


*/

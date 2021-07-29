// 크로아티아 알파벳

/*
č	c=
ć	c-
dž	dz=
đ	d-
lj	lj
nj	nj
š	s=
ž	z=
*/

// let input = 'ljes=njak';

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

String.prototype.replaceAll = function (org, dest) {
  return this.split(org).join(dest);
};
const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
for (let i = 0; i < croatia.length; i++) {
  input = input.replaceAll(croatia[i], '0'); // input.split(alphabet).join("Q");
}
console.log(input.length);

function strLength(arr) {
  if (arr.length === 0) return 0;
  return strLength(arr.slice(0, -1)) + 1;
}

const str = "abcde";
const len = strLength(str);
console.log(len);

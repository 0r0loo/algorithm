function sumOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return sumOfArray(arr.slice(0, -1)) + arr[arr.length - 1];
}

const arr = [1, 2, 3, 4, 5];
const sum = sumOfArray(arr);
console.log(sum);

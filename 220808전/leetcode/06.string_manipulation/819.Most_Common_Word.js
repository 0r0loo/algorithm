/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const paragraphs = paragraph
    .replace(/[^\w]+/g, ' ')
    .toLowerCase()
    .split(' ')
    .filter((word) => !banned.includes(word));

  const wordMap = new Map();

  paragraphs.forEach((word) => {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  });
  let max = 0;
  let result = '';
  for (let [key, val] of wordMap) {
    if (val > max) {
      max = val;
      result = key;
    }
  }
  return result;
};

let paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
let banned = ['hit'];
console.log(mostCommonWord(paragraph, banned));

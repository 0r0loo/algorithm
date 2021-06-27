// 21. 06. 25
function solution(s) {
  const wordList = s.split(' ');

  return wordList
    .map((word) => {
      let newWord = '';
      for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
          newWord += word[i].toUpperCase();
        } else {
          newWord += word[i].toLowerCase();
        }
      }
      return newWord;
    })
    .join(' ');
}

console.log(solution('try hello world'));

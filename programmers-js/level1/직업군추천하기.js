function solution(table, languages, preference) {
  table.sort();
  const jobs = ['CONTENTS', 'GAME', 'HARDWARE', 'PORTAL', 'SI'];
  const temps = [0, 0, 0, 0, 0];
  for (let i = 0; i < languages.length; i++) {
    for (let j = 0; j < table.length; j++) {
      const idx = table[j].split(' ').indexOf(languages[i]);
      if (idx !== -1) {
        temps[j] += (6 - idx) * preference[i];
      }
    }
  }
  const max = Math.max(...temps);
  const resultIdx = temps.findIndex((item) => item === max);
  return jobs[resultIdx];
}

const table = [
  'SI JAVA JAVASCRIPT SQL PYTHON C#',
  'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
  'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
  'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
  'GAME C++ C# JAVASCRIPT C JAVA',
];
const lang = ['PYTHON', 'C++', 'SQL'];
const preference = [7, 5, 5];

console.log(solution(table, lang, preference));

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letters = [];
  const digits = [];

  logs.forEach((log) => {
    const [_, content1] = log.split(' ');
    if (isNaN(+content1)) {
      letters.push(log);
    } else {
      digits.push(log);
    }
  });

  letters.sort((a, b) => {
    const [idA, ...contentsA] = a.split(' ');
    const [idB, ...contentsB] = b.split(' ');
    const contentsStrA = contentsA.join(' ');
    const contentsStrB = contentsB.join(' ');

    if (contentsStrA < contentsStrB) {
      return -1;
    }
    if (contentsStrA > contentsStrB) {
      return 1;
    }
    if (idA < idB) {
      return -1;
    }
    if (idB > idB) {
      return 1;
    }
    return 0;
  });
  return [...letters, ...digits];
};

let logs = ['j mo', '5 m w', 'g 07', 'o 2 0', 't q h'];

console.log(reorderLogFiles(logs));

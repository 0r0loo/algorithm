function solution(id_list, report, k) {
  const set = new Set(report);
  report = [...set];

  const reportCntMap = new Map();
  const reporterMap = new Map();
  report.forEach((str) => {
    const [reporter, reported] = str.split(' ');
    if (reportCntMap.has(reported)) {
      reportCntMap.set(reported, reportCntMap.get(reported) + 1);
    } else {
      reportCntMap.set(reported, 1);
    }

    if (reporterMap.has(reporter)) {
      reporterMap.set(reporter, [...reporterMap.get(reporter), reported]);
    } else {
      reporterMap.set(reporter, Array(reported));
    }
  });

  const result = [];
  id_list.forEach((user) => {
    if (reporterMap.has(user)) {
      const reporteredList = reporterMap.get(user);
      let cnt = 0;
      reporteredList.forEach((reported) => {
        reportCntMap.get(reported) >= k && cnt++;
      });
      result.push(cnt);
    } else {
      result.push(0);
    }
  });
  return result;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
);

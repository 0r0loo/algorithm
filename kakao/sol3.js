function solution(fees, records) {
  const [basicTime, basicFee, addTime, addFee] = fees;
  const recordMap = new Map();
  // [총 시간, 들어온시간];

  records.forEach((record) => {
    let [time, number, inout] = record.split(' ');
    let [hour, min] = time.split(':').map(Number);
    hour *= 60;
    time = hour + min;
    if (inout === 'IN') {
      if (recordMap.has(number)) {
        const sumMin = recordMap.get(number);
        sumMin.push(time);
        recordMap.set(number, sumMin);
      } else {
        const newReco = [0, time];
        recordMap.set(number, newReco);
      }
    } else {
      const [sumMin, inTime] = recordMap.get(number);
      const newReco = [sumMin + time - inTime];
      recordMap.set(number, newReco);
    }
  });

  for (let [key, val] of recordMap) {
    if (val.length === 2) {
      const [sumMin, inTime] = val;
      const newVal = [sumMin + 1439 - inTime];
      recordMap.set(key, newVal);
    }
  }
  const result = [];
  for (let [key, val] of recordMap) {
    let fee;
    if (val > basicTime) {
      fee = basicFee + Math.ceil((val - basicTime) / addTime) * addFee;
    } else {
      fee = basicFee;
    }
    result.push([key, fee]);
  }
  result.sort((a, b) => a[0] - b[0]);
  return result.map((list) => list[1]);
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
); // [14600, 34400, 5000]

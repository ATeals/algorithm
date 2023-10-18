const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

function mode(arr) {
  const map = new Map();
  for (let i in arr) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  let maxValue = 0;
  let arr2 = [];
  map.forEach((ele, key) => {
    if (maxValue < ele) {
      maxValue = ele;
      arr2 = [];
      arr2.push(key);
    } else if (maxValue === map.get(key)) {
      arr2.push(key);
    }
  });
  return arr2.length !== 1 ? arr2[1] : arr2[0];
}

const solution = (arg) => {
  const avg = Math.round(arg.reduce((a, c) => a + c, 0) / arg.length);
  const mid = [...arg.sort((a, b) => a - b)][(arg.length - 1) / 2];

  const modeValue = mode(arg);

  const range = Math.max(...arg) - Math.min(...arg);

  return [avg, mid, modeValue, range];
};

console.log(solution(input.slice(1).map((i) => Number(i))).join("\n"));

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  const time = arg.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let count = 0;
  let prevEnd = -1;

  for (let [start, end] of time) {
    if (prevEnd <= start) {
      count++;
      prevEnd = end;
    }
  }

  return count;
};

console.log(solution(input.slice(1).map((i) => i.split(" ").map((i) => Number(i)))));

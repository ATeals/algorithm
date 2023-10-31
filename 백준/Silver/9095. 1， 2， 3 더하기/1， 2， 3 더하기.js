const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  const max = Math.max(...arg);
  const d = Array(max + 1).fill(0);
  d[1] = 1;
  d[2] = 2;
  d[3] = 4;

  for (let i = 4; i <= max; i++) {
    d[i] = d[i - 1] + d[i - 2] + d[i - 3];
  }

  return arg.map((i) => d[i]);
};

console.log(solution(input.slice(1).map((i) => Number(i))).join("\n"));

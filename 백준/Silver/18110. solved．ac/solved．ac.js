const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arr) => {
  if (!arr.length) return 0;

  arr = arr.sort((a, b) => a - b);

  const num = Math.round((arr.length / 100) * 15);

  return Math.round(arr.slice(num, arr.length - num).reduce((a, c) => a + c, 0) / (arr.length - num * 2));
};

console.log(solution(input.slice(1).map((i) => Number(i))));

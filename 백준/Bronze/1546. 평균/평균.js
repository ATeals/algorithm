const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

function solution(arg) {
  const max = Math.max(...arg);
  return arg.reduce((a, c) => a + (c / max) * 100, 0) / arg.length;
}

console.log(solution(input[1].split(" ").map((i) => Number(i))));

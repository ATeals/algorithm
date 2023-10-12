const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

function solution(arg) {
  return arg.sort((a, b) => a - b);
}

console.log(solution(input.slice(1).map((i) => Number(i))).join("\n"));

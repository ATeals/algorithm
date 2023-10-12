const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => [...new Set(arg.sort((a, b) => (a.length === b.length ? a.localeCompare(b) : a.length - b.length)))];

console.log(solution(input.slice(1)).join("\n"));

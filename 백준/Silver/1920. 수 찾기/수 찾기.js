const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (match, arr) => {
  const map = {};
  match.map((i) => (map[i] = true));
  return arr.map((i) => (map[i] ? 1 : 0));
};

console.log(solution(input[1].split(" "), input[3].split(" ")).join("\n"));

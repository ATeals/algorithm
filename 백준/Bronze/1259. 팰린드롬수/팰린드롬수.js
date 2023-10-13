const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  return arg.map((str) => (str === [...str].reverse().join("") ? "yes" : "no"));
};

console.log(solution(input.slice(0, input.length - 1)).join("\n"));

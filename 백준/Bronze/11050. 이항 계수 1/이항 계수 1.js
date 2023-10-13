const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const f = (n) => Array.from({ length: n }).reduce((a, _, i) => a * (i + 1), 1);

const solution = ([n, k]) => {
  return f(n) / f(k) / f(n - k);
};

console.log(solution(input[0].split(" ").map((i) => Number(i))));

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  const d = [0, 1, 2];

  for (let i = 3; i <= arg; i++) {
    d[i] = (d[i - 1] + d[i - 2]) % 10007;
  }

  return d[arg];
};

console.log(solution(Number(input[0])));

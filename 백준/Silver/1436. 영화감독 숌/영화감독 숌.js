const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  let count = 0;
  let six_n = 666;

  while (1) {
    if (String(six_n).includes("666")) count++;
    if (count === arg) return six_n;
    six_n += 1;
  }
};

console.log(solution(Number(input[0])));

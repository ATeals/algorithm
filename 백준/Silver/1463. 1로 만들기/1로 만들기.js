const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (num) => {
  if (num === 1) return 0;

  const d = Array(num + 1).fill(0);

  for (let i = 2; i <= num; i++) {
    d[i] = d[i - 1] + 1;

    if (i % 2 === 0) {
      d[i] = Math.min(d[Math.floor(i / 2)] + 1, d[i]);
    }
    if (i % 3 === 0) {
      d[i] = Math.min(d[Math.floor(i / 3)] + 1, d[i]);
    }
  }

  return d[num];
};

console.log(solution(Number(input[0])));

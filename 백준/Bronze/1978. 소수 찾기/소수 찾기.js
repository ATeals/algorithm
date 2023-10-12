const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

function solution(testCase) {
  return testCase
    .map((n) => {
      if (n === 1) return 0;
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return 0;
      }

      return 1;
    })
    .filter((i) => i === 1).length;
}

console.log(solution(input[1].split(" ").map((i) => Number(i))));

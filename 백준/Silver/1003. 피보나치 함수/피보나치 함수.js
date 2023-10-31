const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  const max = Math.max(...arg) + 1;
  const dp = Array(max);

  dp[0] = [1, 0];
  dp[1] = [0, 1];
  for (var idx = 2; idx < max; idx++) {
    dp[idx] = [dp[idx - 1][0] + dp[idx - 2][0], dp[idx - 1][1] + dp[idx - 2][1]];
  }
  return arg.map((i) => dp[i].join(" "));
};

console.log(solution(input.slice(1).map((i) => Number(i))).join("\n"));

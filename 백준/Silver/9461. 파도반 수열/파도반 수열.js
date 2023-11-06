const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input.map(Number);

const dp = [0, 1, 1, 1, 2];

for (let i = 4; i <= Math.max(...arr); i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

arr.slice(1).map((i) => console.log(dp[i]));

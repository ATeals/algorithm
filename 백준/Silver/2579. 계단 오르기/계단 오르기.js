const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input.map(Number);

const dp = [0];

dp[1] = arr[1];
dp[2] = arr[1] + arr[2];
dp[3] = Math.max(arr[1], arr[2]) + arr[3];

for (let i = 4; i < arr.length; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + arr[i - 1]) + arr[i];
}

console.log(dp[arr[0]]);

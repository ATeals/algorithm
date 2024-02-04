const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const arr = input.map((i) => i.split(" ").map(Number));

for (let i = 1; i < N; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (j === 0) arr[i][j] += arr[i - 1][j];
    else if (j === arr[i].length - 1) arr[i][j] += arr[i - 1][j - 1];
    else {
      arr[i][j] += Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
    }
  }
}

console.log(Math.max(...arr[N - 1]));

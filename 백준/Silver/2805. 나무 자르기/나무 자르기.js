const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = trees[trees.length - 1];
let answer = Number.MIN_SAFE_INTEGER;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (let x of trees) {
    if (x > mid) sum += x - mid;
  }

  if (sum >= m) {
    if (mid > answer) answer = mid;

    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);

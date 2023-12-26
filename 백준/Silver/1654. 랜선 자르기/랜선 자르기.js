const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);

const lines = input.map(Number).sort();
let max = Math.max(...lines);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let howManyPieces = lines.map((line) => parseInt(line / mid)).reduce((a, b) => a + b, 0);
  if (howManyPieces >= k) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);

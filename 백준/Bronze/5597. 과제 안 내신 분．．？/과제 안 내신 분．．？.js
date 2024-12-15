const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const arr = Array.from({ length: 31 }, (_, i) => i);

for (const num of input) {
  arr[+num] = 0;
}

console.log(arr.filter((num) => num !== 0).join("\n"));

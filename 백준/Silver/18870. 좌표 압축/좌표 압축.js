const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input.slice(1)[0].split(" ").map(Number);

const set = new Set(arr);
const map = new Map();

[...set].sort((a, b) => a - b).forEach((item, index) => map.set(item, index));

const result = arr.map((item, index) => map.get(+item));

console.log(result.join(" "));

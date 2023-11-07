const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const noHear = input.slice(1, n + 1);
const noLook = input.slice(n + 1, n + m + 1);

const set = new Set(noHear, noLook);

let arr = [];
for (x of noLook) {
  if (set.has(x)) arr.push(x);
}

console.log(arr.length + "\n" + arr.sort().join("\n"));

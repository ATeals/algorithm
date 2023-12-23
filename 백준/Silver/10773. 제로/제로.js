const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const arr = input.map(Number);

const stack = [];

for (let i = 0; i < N; i++) {
  const item = arr[i];
  if (item === 0) stack.pop();
  else stack.push(item);
}

console.log(stack.reduce((a, c) => a + c, 0));

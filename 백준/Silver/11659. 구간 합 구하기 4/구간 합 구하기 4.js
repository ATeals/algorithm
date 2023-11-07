const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const nums = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split(" ").map(Number));

const add = Array(nums.length + 1).fill(0);

nums.forEach((n, i) => {
  add[i + 1] = add[i] + n;
});

const result = [];
for (let [x, y] of arr) {
  result.push(add[y] - add[x - 1]);
}

console.log(result.join("\n"));

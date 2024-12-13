const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [N, ...rest] = input;

const arr = rest[0].split(" ").map((item) => +item);

const M = Number(rest[1]);

const count = Array.from({ length: 201 }, () => 0);

for (const num of arr) {
  count[num + 100]++;
}

console.log(count[M + 100]);

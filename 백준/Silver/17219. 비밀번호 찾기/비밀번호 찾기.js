const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const hash = {};

input.slice(0, N).forEach((i) => {
  const [url, pw] = i.split(" ");
  hash[url] = pw;
});

input.slice(N, M + N).forEach((i) => {
  console.log(hash[i]);
});

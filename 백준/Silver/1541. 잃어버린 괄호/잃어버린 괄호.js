const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const number = input[0]
  .split("-")
  .map((num) => num.split("+").reduce((a, c) => a + Number(c), 0))
  .reduce((a, c, i) => (i === 0 ? c : a - c), 0);

console.log(number);

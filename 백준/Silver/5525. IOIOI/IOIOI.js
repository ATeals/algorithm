const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const str = input[1];

const P = "IO".repeat(N) + "I";

let c = 0;

for (let i = 0; i < str.length - P.length + 1; i++) {
  if (str.slice(i, i + P.length) === P) c++;
}

console.log(c);

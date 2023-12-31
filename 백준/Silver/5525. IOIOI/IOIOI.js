const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const str = input[1];
const M = str.length;

let result = 0;
let count = 0;

for (let i = 0; i < M - 2; i++) {
  if (str.slice(i, i + 3) === "IOI") {
    i += 1;
    count += 1;
    if (count === N) {
      result += 1;
      count -= 1;
    }
  } else {
    count = 0;
  }
}

console.log(result);

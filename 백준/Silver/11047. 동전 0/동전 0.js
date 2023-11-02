const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg, arr) => {
  let count = 0;

  arr.sort((a, b) => b - a);

  while (arg !== 0) {
    for (let i of arr) {
      if (arg >= i) {
        arg -= i;
        count++;
        break;
      }
    }
  }

  return count;
};

console.log(
  solution(
    Number(input[0].split(" ")[1]),
    input.slice(1).map((i) => Number(i))
  )
);

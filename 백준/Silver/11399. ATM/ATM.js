const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  const time = [];
  arg = arg.sort((a, b) => a - b);

  for (let i = 0; i < arg.length + 1; i++) {
    time.push(arg.slice(0, i).reduce((a, c) => a + c, 0));
  }

  return time.reduce((a, c) => a + c, 0);
};

console.log(solution(input[1].split(" ").map((i) => Number(i))));

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  return arg.map((i) => {
    const max = Math.max(...i);
    const num = i.filter((i) => i !== max).reduce((a, c) => a + c ** 2, 0);

    return num === max ** 2 ? "right" : "wrong";
  });
};

console.log(solution(input.slice(0, input.length - 1).map((i) => i.split(" ").map((i) => Number(i)))).join("\n"));

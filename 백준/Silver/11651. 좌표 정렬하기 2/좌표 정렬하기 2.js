const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  return arg.sort(([x1, y1], [x2, y2]) => (y1 === y2 ? x1 - x2 : y1 - y2));
};

console.log(
  solution(input.slice(1).map((i) => i.split(" ").map((i) => Number(i))))
    .join("\n")
    .replaceAll(",", " ")
);

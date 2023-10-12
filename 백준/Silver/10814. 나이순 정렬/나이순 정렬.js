const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  return arg.sort((a, b) => {
    const Aage = Number(a.split(" ")[0]);
    const Bage = Number(b.split(" ")[0]);
    if (Aage === Bage) return a - b;
    return Aage - Bage;
  });
};

console.log(solution(input.slice(1)).join("\n"));

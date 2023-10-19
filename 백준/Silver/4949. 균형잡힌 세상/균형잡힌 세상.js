const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  return arg.map((str) => {
    const stack = [];

    for (i of str) {
      if (i === "[" || i === "(") {
        stack.push(i);
      } else if ((i === "]" && stack[stack.length - 1] === "[") || (i === ")" && stack[stack.length - 1] === "(")) {
        stack.pop();
      } else if (i === "]" || i === ")") {
        return "no";
      }
    }
    return stack.length ? "no" : "yes";
  });
};

console.log(solution(input.slice(0, input.length - 1)).join("\n"));

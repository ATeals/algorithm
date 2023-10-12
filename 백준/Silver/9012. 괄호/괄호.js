const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

function solution(arg) {
  const stack = [arg[0]];

  for (let i = 1; i < arg.length; i++) {
    if (arg[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
    else stack.push(arg[i]);
  }

  return stack.length ? "NO" : "YES";
}

input.slice(1).map((i) => console.log(solution(i)));

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const gcbFn = (num1, num2) => {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }

  return num1;
};

const solution = (arg) => {
  const gcb = gcbFn(arg[0], arg[1]);

  return [gcb, (arg[0] * arg[1]) / gcb];
};

console.log(solution(input[0].split(" ").map((i) => Number(i))).join("\n"));

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [A, B] = input.shift().split(" ").map(Number);

let flag = false;

const cal = (num, count) => {
  if (num < A || flag) return console.log(-1);
  if (num === A) {
    console.log(count);
    flag = true;
    return;
  }

  if (num % 2 === 0) return cal(Number(num / 2), count + 1);
  if (num % 10 === 1) return cal(Math.floor(num / 10), count + 1);

  console.log(-1);
};

cal(B, 1);

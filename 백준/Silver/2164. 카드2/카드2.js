const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

const queue = Array(num)
  .fill(0)
  .map((_, i) => i + 1);

let flag = false;
let head = 0;
let count = (queue.length - 1) * 2;
while (count > 0) {
  if (flag) queue.push(queue[head]);

  head++;
  flag = !flag;
  count--;
}

console.log(queue[queue.length - 1]);

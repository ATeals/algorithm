const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  const queue = [];

  return arg
    .map((i) => {
      const [modify, num] = i.split(" ");
      switch (modify) {
        case "push":
          queue.push(num);
          return;
        case "pop":
          return queue.length ? queue.shift() : -1;
        case "size":
          return queue.length;
        case "empty":
          return queue.length ? 0 : 1;
        case "front":
          return queue.length ? queue[0] : -1;
        case "back":
          return queue.length ? queue[queue.length - 1] : -1;
      }
    })
    .filter((i) => i !== undefined);
};

console.log(solution(input.slice(1)).join("\n"));

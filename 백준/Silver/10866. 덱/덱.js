const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arg) => {
  const Deque = [];
  return arg.map((i) => {
    const [modify, x] = i.split(" ");

    switch (modify) {
      case "push_front":
        Deque.unshift(x);
        return;
      case "push_back":
        Deque.push(x);
        return;
      case "pop_front":
        return Deque.shift() || -1;
      case "pop_back":
        return Deque.pop() || -1;
      case "size":
        return Deque.length;
      case "empty":
        return Deque.length ? 0 : 1;
      case "front":
        return Deque[0] || -1;
      case "back":
        return Deque[Deque.length - 1] || -1;
    }
  });
};

console.log(
  solution(input.slice(1))
    .filter((i) => i !== undefined)
    .join("\n")
);

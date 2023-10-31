const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (num, arr) => {
  const visited = Array(num + 1).fill(false);
  const queue = [1];

  while (queue.length !== 0) {
    const v = queue.shift();
    visited[v] = true;

    for (let x of arr) {
      if (x.includes(v)) {
        const v2 = x.find((i) => i !== v);
        if (!visited[v2]) queue.push(v2);
      }
    }
  }

  return visited.filter((i) => i).length - 1;
};

console.log(
  solution(
    Number(input[0]),
    input.slice(2).map((i) => i.split(" ").map((i) => Number(i)))
  )
);

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [N, ...edges] = input;

const graph = Array.from({ length: +N + 1 }).map(() => []);
const checked = Array.from({ length: +N + 1 }).fill(false);
const parentNodes = Array.from({ length: +N + 1 }).fill(null);

for (const v of edges) {
  const [start, end] = v.split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
}

const queue = [1];

while (queue.length > 0) {
  const vertex = queue.shift();

  checked[vertex] = true;

  for (const child of graph[vertex]) {
    if (!checked[child]) {
      parentNodes[child] = vertex;
      queue.push(child);
    }
  }
}

let answer = "";

for (let i = 2; i < parentNodes.length; i++) {
  answer += parentNodes[i] + "\n";
}

console.log(answer);

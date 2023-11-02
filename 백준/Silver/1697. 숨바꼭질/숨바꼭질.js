const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const d = [-1, 1, 2];

const solution = (n, k) => {
  if (n === k) return 0;

  const queue = [[n, 0]];
  const visited = Array(100001).fill(false);

  while (queue.length) {
    const [cur, depth] = queue.shift();

    if (visited[cur]) {
      continue;
    }

    visited[cur] = true;

    if (cur === k) {
      return depth;
    }

    for (let next of [cur + 1, cur - 1, cur * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        queue.push([next, depth + 1]);
      }
    }
  }
};

console.log(solution(...input[0].split(" ").map((i) => Number(i))));

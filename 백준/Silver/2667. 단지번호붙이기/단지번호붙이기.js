const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const d = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const bfs = ([startx, starty], graph) => {
  let count = 0;
  const queue = [[startx, starty]];

  while (queue.length !== 0) {
    const [x1, y1] = queue.shift();

    for (let [dx, dy] of d) {
      const [x, y] = [x1 + dx, y1 + dy];

      if (x < 0 || y < 0 || x >= graph[0].length || y >= graph.length) continue;

      if (graph[y][x] === 1) {
        graph[y][x] += 1;
        queue.push([x, y]);
        count++;
      }
    }
  }

  return count;
};

const solution = (arg) => {
  const answer = [];

  for (let y = 0; y < arg.length; y++) {
    for (let x = 0; x < arg[0].length; x++) {
      if (arg[y][x] === 1) {
        const count = bfs([x, y], arg);
        answer.push(count || 1);
      }
    }
  }

  answer.sort((a, b) => a - b).unshift(answer.length);

  return answer.join("\n");
};

console.log(solution(input.slice(1).map((i) => i.split("").map(Number))));

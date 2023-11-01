const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const solution = (w, h, graph) => {
  let count = 0;
  const visited = [];

  const bfs = (startx, starty) => {
    const queue = [[startx, starty]];

    while (queue.length !== 0) {
      const [x, y] = queue.shift();
      visited[x][y] = false;

      for (let i = 0; i < 4; i++) {
        const xPos = x + ds[i][0];
        const yPos = y + ds[i][1];

        if (xPos < 0 || yPos < 0 || xPos >= w || yPos >= h) continue;
        if (visited[xPos][yPos]) {
          queue.push([xPos, yPos]);
          visited[xPos][yPos] = false;
        }
      }
    }
  };

  for (let i = 0; i < w; i++) {
    visited[i] = new Array(h).fill(false);
  }

  for (let [x, y] of graph) {
    if (x < w && y < h) visited[x][y] = true;
  }

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (visited[i][j]) {
        bfs(i, j);
        count++;
      }
    }
  }

  return count;
};

const re = Number(input.shift());

for (let i = 0; i < re; i++) {
  const [w, h, k] = input.shift().split(" ").map(Number);
  let graph = [];
  for (let j = 0; j < k; j++) {
    graph.push(
      input
        .shift()
        .split(" ")
        .map((i) => Number(i))
    );
  }
  console.log(solution(w, h, graph));
  graph = [];
}

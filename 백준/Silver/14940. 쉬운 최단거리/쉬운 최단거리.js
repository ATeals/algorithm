const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const [w, h] = input[0].split(" ").map(Number);
const map = input.slice(1).map((i) => i.split(" ").map(Number));

let start;
const visited = Array(w)
  .fill()
  .map((i) => Array(h).fill(false));

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (map[x][y] === 2) {
      start = [x, y];
      map[x][y] = 0;
      visited[x][y] = true;
    }
  }
}

const bfs = ([x, y]) => {
  const queue = [[x, y, 1]];

  while (queue.length !== 0) {
    let [x1, y1, depth] = queue.shift();

    for (const [dx, dy] of d) {
      const [x, y] = [x1 + dx, y1 + dy];

      if (x < 0 || y < 0 || x >= w || y >= h) continue;

      if (!visited[x][y] && map[x][y] !== 0) {
        visited[x][y] = true;
        queue.push([x, y, depth + 1]);
        map[x][y] = depth;
      }
    }
  }
};

bfs(start);

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (!visited[x][y] && map[x][y] !== 0) {
      map[x][y] = -1;
    }
  }
}

console.log(map.map((i) => i.join(" ")).join("\n"));

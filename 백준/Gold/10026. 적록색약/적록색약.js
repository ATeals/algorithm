const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input.slice(1).map((i) => i.split(""));
let v = Array(N)
  .fill()
  .map((i) => Array(N).fill(0));

const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const result = [0, 0];

const bfs = (startx, starty) => {
  const queue = [[startx, starty]];
  v[startx][starty] = 1;

  while (queue.length > 0) {
    const [X, Y] = queue.shift();

    for (const [dx, dy] of d) {
      const [x, y] = [X + dx, Y + dy];
      if (x < 0 || y < 0 || x > N - 1 || y > N - 1) continue;

      if (v[x][y] === 0 && arr[x][y] === arr[startx][starty]) {
        v[x][y] = 1;
        queue.push([x, y]);
      }
    }
  }
};

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (v[x][y] === 0) {
      bfs(x, y);
      result[0] += 1;
    }
  }
}

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (arr[x][y] === "G") {
      arr[x][y] = "R";
    }
  }
}

v = Array(N)
  .fill()
  .map((i) => Array(N).fill(0));

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (v[x][y] === 0) {
      bfs(x, y);
      result[1] += 1;
    }
  }
}

console.log(result.join(" "));

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [W, H] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split(""));

const d = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const v = Array(W)
  .fill()
  .map((i) => Array(H).fill(0));

let meet = 0;

const bfs = (x, y) => {
  const queue = [[x, y]];

  arr[x][y] = "X";

  while (queue.length > 0) {
    const [X, Y] = queue.shift();

    for (let [dx, dy] of d) {
      const [x, y] = [X + dx, Y + dy];

      if (x < 0 || y < 0 || x > W - 1 || y > H - 1) continue;
      if (arr[x][y] === "X" || v[x][y] === 1) continue;

      if (arr[x][y] === "P") meet++;

      v[x][y] = 1;
      queue.push([x, y]);
    }
  }
};

for (let x = 0; x < W; x++) {
  for (let y = 0; y < H; y++) {
    if (arr[x][y] === "I") {
      bfs(x, y);
    }
  }
}

console.log(meet === 0 ? "TT" : meet);

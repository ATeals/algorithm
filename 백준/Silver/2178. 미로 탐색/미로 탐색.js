const { count } = require("console");
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const d = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const solution = ([w, h], map) => {
  const queue = [[0, 0, 1]];
  map[0][0] = 2;

  while (queue.length !== 0) {
    let [x1, y1, depth] = queue.shift();

    for (const [dx, dy] of d) {
      const [x, y] = [x1 + dx, y1 + dy];

      if (x < 0 || y < 0 || x >= h || y >= w) continue;

      if (map[y][x] === 1) {
        map[y][x] += depth;
        queue.push([x, y, depth + 1]);
      }
    }
  }

  return map[w - 1][h - 1];
};

console.log(
  solution(
    input[0].split(" ").map(Number),
    input.slice(1).map((i) => i.split("").map(Number))
  )
);

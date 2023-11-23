const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [N, V] = input.shift().split(" ").map(Number);

const map = Array(N)
  .fill(0)
  .map((_, i) =>
    Array(N)
      .fill(0)
      .map((_, j) => (i === j ? 0 : Infinity))
  );

for (let _ of Array(V)) {
  const [x, y] = input.shift().split(" ").map(Number);
  map[x - 1][y - 1] = 1;
  map[y - 1][x - 1] = 1;
}

const num = Array(N)
  .fill(0)
  .map((_, i) => i);

for (let k of num) {
  for (let x of num) {
    for (let y of num) {
      map[x][y] = Math.min(map[x][y], map[x][k] + map[k][y]);
    }
  }
}

const arr = Object.values(map).map((i) => i.reduce((a, c) => a + c, 0));
const min = Math.min(...arr);

console.log(arr.findIndex((i) => i === min) + 1);

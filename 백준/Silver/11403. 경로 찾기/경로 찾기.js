const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = input.map((i) => i.split(" ").map(Number));

const arr = Array.from({ length: N }, (_, i) => i);

for (let k in arr) {
  for (let x in arr) {
    for (let y in arr) {
      if (map[x][k] && map[k][y]) map[x][y] = 1;
    }
  }
}

console.log(map.map((i) => i.join(" ")).join("\n"));

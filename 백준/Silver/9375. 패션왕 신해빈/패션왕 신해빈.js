const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

let map = {};

for (let _ of Array(N)) {
  const N = Number(input.shift());
  for (let n of Array(N)) {
    const [item, category] = input.shift().split(" ");
    if (!map[category]) map[category] = [item];
    else map[category].push(item);
  }

  const num =
    Object.values(map)
      .map((i) => i.length)
      .reduce((a, c) => a * (c + 1), 1) - 1;

  console.log(num);
  map = {};
}

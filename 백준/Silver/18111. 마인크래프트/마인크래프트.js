const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const solution = ([m, n, block], arr) => {
  let deleteBlock = block;
  let time = 0;
  let result = [];

  for (let h = 0; h <= 256; h++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] > h) {
          time += 2 * (arr[i][j] - h);
          deleteBlock += arr[i][j] - h;
        } else if (arr[i][j] < h) {
          time += h - arr[i][j];
          deleteBlock -= h - arr[i][j];
        }
      }
    }

    if (deleteBlock < 0) break;

    result.push([time, h]);
    deleteBlock = block;
    time = 0;
  }
  return result.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))[0];
};

console.log(
  solution(
    input[0].split(" ").map((i) => Number(i)),
    input.slice(1).map((i) => i.split(" ").map((i) => Number(i)))
  ).join(" ")
);

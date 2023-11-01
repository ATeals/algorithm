const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const dp = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const solution = ([h, w], arr) => {
  let queue = [];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (arr[x][y] === 1) {
        queue.push([x, y]);
      }
    }
  }
  let count = 0;

  let head = 0;
  while (queue.length > head) {
    let tail = queue.length;
    for (let i = head; i < tail; i++) {
      const [x1, y1] = queue[i];

      for (let i = 0; i < 4; i++) {
        const [x, y] = [x1 + dp[i][0], y1 + dp[i][1]];

        if (x < 0 || x >= w || y < 0 || y >= h) continue;

        if (arr[x][y] === 0) {
          arr[x][y] = 1;
          queue.push([x, y]);
        }
      }
    }

    count++;
    head = tail;
  }

  for (let x of arr) {
    if (x.includes(0)) return -1;
  }

  return count - 1;
};

console.log(
  solution(
    input[0].split(" ").map((i) => Number(i)),
    input.slice(1).map((i) => i.split(" ").map((i) => Number(i)))
  )
);

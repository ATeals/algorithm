const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const length = Number(input[0]);
const map = input.slice(1).map((i) => i.split(" ").map(Number));

let white = 0;
let blue = 0;

const divide = (x, y, length) => {
  let count = 0;

  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      count += map[i][j];
    }
  }

  if (count === 0) white++;
  else if (count === length * length) blue++;
  else {
    divide(x + length / 2, y, length / 2);
    divide(x, y + length / 2, length / 2);
    divide(x + length / 2, y + length / 2, length / 2);
    divide(x, y, length / 2);
  }
};

divide(0, 0, length);

console.log(white);
console.log(blue);

// const fs = require("fs");

// const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

// const input = fs
//   .readFileSync(__dirname + filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const length = Number(input[0]);
// const map = input.slice(1).map((i) => i.split("").map(Number));

// let white = 0;
// let blue = 0;

// const divide = (x, y, length) => {
//   let count = 0;

//   for (let i = x; i < x + length; i++) {
//     for (let j = y; j < y + length; j++) {
//       count += map[i][j];
//     }
//   }

//   if (count === 0) white++;
//   else if (count === length * length) blue++;
//   else {
//     divide(x + length / 2, y, length / 2);
//     divide(x, y + length / 2, length / 2);
//     divide(x + length / 2, y + length / 2, length / 2);
//     divide(x, y, length / 2);
//   }
// };

// divide(0, 0, length);

// console.log(white);
// console.log(blue);

// function solution(number, paper) {
//   let white = 0,
//     blue = 0;
//   function divide(x, y, length) {
//     let tempCount = 0;
//     for (let i = x; i < x + length; i += 1) {
//       for (let j = y; j < y + length; j += 1) {
//         if (paper[i][j]) tempCount += 1;
//       }
//     }

//     if (!tempCount) {
//       white += 1;
//     } else if (tempCount === length * length) {
//       blue += 1;
//     } else {
//       divide(x, y, length / 2);
//       divide(x, y + length / 2, length / 2);
//       divide(x + length / 2, y, length / 2);
//       divide(x + length / 2, y + length / 2, length / 2);
//     }
//   }

//   divide(0, 0, number);
//   console.log(white);
//   console.log(blue);
// }

// solution(length, map);

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);

const map = new Map();
const result = [];

for (let i = 0; i < M; i++) {
  const name = input[i];
  map.set(name, String(i + 1));
  map.set(String(i + 1), name);
}

for (let i = M; i < M + N; i++) {
  const q = input[i];
  result.push(map.get(q));
}

console.log(result.join("\n"));

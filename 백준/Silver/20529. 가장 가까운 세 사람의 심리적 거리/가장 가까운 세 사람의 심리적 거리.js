const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const distance = (a, b) => {
  const arra = a.split("");
  const arrb = b.split("");
  let sum = 0;

  for (let i = 0; i < 4; i++) {
    if (arra[i] !== arrb[i]) sum += 1;
  }
  return sum;
};

const MAX_MEMBER = 16 * 2;

for (let n = 0; n < N; n++) {
  const c = Number(input.shift());
  const arr = input.shift().split(" ");

  if (c > MAX_MEMBER) {
    console.log(0);
    continue;
  }

  let min = Infinity;
  for (let x = 0; x < c; x++) {
    for (let y = x + 1; y < c; y++) {
      for (let z = y + 1; z < c; z++) {
        const sum = distance(arr[x], arr[y]) + distance(arr[y], arr[z]) + distance(arr[z], arr[x]);
        min = Math.min(min, sum);
      }
    }
  }

  console.log(min);
}

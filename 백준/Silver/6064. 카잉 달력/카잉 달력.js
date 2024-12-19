const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input.map((v) => v.split(" ").map(Number));

const T = arr.splice(1);
const answer = [];

for (const v of T) {
  const [M, N, X, Y] = v;

  const last = lcm(N, M);

  let x = X;
  let y = Y;

  while (true) {
    if (x > last || y > last) {
      answer.push(-1);
      break;
    } else if (x > y) {
      y += N;
    } else if (x < y) {
      x += M;
    } else {
      answer.push(x);
      break;
    }
  }
}

console.log(answer.join("\n"));

function gcd(a, b) {
  if (b == 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

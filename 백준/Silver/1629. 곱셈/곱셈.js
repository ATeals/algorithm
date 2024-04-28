const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

let [A, B, C] = input[0].split(" ").map(BigInt);

const fn = (B) => {
  if (B === 1n) return A % C;

  const half = fn(B / 2n) % C;

  if (B % 2n) {
    return (half * half * (A % C)) % C;
  }

  return (half * half) % C;
};

console.log(fn(B).toString());

//모듈러 곱셈의 분배법칙을 이용한 풀이
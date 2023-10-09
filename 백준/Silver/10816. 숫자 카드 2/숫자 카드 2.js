const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

function solution(save, arr) {
  const map = {};
  save.map((i) => {
    if (map[i]) return ++map[i];
    return (map[i] = 1);
  });

  return arr.map((i) => (map[i] ? map[i] : 0));
}

console.log(
  solution(
    input[1].split(" ").map((i) => Number(i)),
    input[3].split(" ").map((i) => Number(i))
  ).join(" ")
);
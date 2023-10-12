const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

function solution(num, arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const add = arr[i] + arr[j] + arr[k];
        if (add === num) return add;
        max = max < add && add < num ? add : max;
      }
    }
  }

  return max;
}

const arr = input.map((i) => i.split(" "));

console.log(
  solution(
    Number(arr[0][1]),
    arr[1].map((i) => Number(i))
  )
);

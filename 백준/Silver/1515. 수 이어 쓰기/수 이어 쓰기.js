const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input[0];

let cur = 0;
let idx = 0;

while (idx < num.length) {
  cur++;
  const curStr = cur.toString();
  for (let i = 0; i < curStr.length; i++) {
    if (curStr[i] === num[idx]) idx++;
  }
}

console.log(cur);

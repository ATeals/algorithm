const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

for (let n = 0; n < N; n++) {
  const [arrLength, I] = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").map(Number);

  let location = I;
  let count = 1;

  while (true) {
    const Item = arr.shift();
    if (Math.max(...arr) <= Item && location === 0) {
      console.log(count);
      break;
    } else if (Math.max(...arr) > Item && location === 0) {
      arr.push(Item);
      location = arr.length - 1;
    } else if (Math.max(...arr) > Item) {
      arr.push(Item);
      location -= 1;
    } else if (Math.max(...arr) <= Item) {
      count += 1;
      location -= 1;
    }
  }
}

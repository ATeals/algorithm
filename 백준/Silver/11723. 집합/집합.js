const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

let set = new Set();

set.add(1);
set.delete(1);

set.has(1);

const modifier = ([modify, num]) => {
  switch (modify) {
    case "add":
      return set.add(num);
    case "check":
      return set.has(num) ? 1 : 0;
    case "remove":
      return set.delete(num);
    case "toggle":
      return set.has(num) ? set.delete(num) : set.add(num);
    case "all":
      set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
      return set;
    case "empty":
      set = new Set();
      return set;
  }
};

const arr = input.slice(1);

const result = [];

while (arr.length) {
  const item = arr.shift().split(" ");
  result.push(modifier(item));
}

console.log(result.filter((i) => typeof i === "number").join("\n"));

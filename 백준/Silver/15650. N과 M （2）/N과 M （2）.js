const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const s = [];

const dfs = (start) => {
  if (s.length === M) {
    console.log(s.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    s.push(i);
    dfs(i + 1);
    s.pop();
  }
};

dfs(1);

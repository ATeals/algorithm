const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const Map = new Array(101).fill().map((_, i) => i);

input.map((i) => {
  const [from, to] = i.split(" ").map(Number);
  Map[from] = to;
});

const visited = new Array(101).fill(0);

const queue = [1];
visited[1] = 1;

while (queue.length > 0) {
  const now = queue.shift();

  for (let i = 1; i < 7; i++) {
    let next = now + i;

    if (next > 100) continue;

    next = Map[next];

    if (!visited[next]) {
      visited[next] = visited[now] + 1;
      queue.push(next);
    }
  }
}

console.log(visited[100] - 1);

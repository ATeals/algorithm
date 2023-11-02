const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});
let visited = new Array(n + 1).fill(0);
let answer_dfs = [];
// DFS
function DFS(v) {
  if (visited[v]) return;
  visited[v] = 1;
  answer_dfs.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
}
DFS(v);
console.log(answer_dfs.join(" "));
// BFS
let answer_bfs = [];
visited.fill(0);
function BFS(v) {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    answer_bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}
BFS(v);
console.log(answer_bfs.join(" "));






// 틀린 코드
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const bfs = ([N, M, V], g) => {
  const visited = Array(N + 1).fill(false);
  g = g.sort((a, b) => a[1] - b[1]);

  const queue = [V];
  visited[V] = true;
  const arr = [];

  while (queue.length !== 0) {
    const v = queue.shift();
    arr.push(v);

    for (let [x, y] of g) {
      if (x === v && !visited[y]) {
        visited[y] = true;
        queue.push(y);
      }

      if (y === v && !visited[x]) {
        visited[x] = true;
        queue.push(x);
      }
    }
  }

  return arr.join(" ");
};

const dfs = ([N, M, V], g) => {
  const visited = Array(N + 1).fill(false);
  g = g.sort((a, b) => a[1] - b[1]);
  const arr = [];

  const df = (n, g, visited) => {
    visited[n] = true;
    arr.push(n);
    for (let [x, y] of g) {
      if (x === n && !visited[y]) {
        df(y, g, visited);
      }

      if (y === n && !visited[x]) {
        df(x, g, visited);
      }
    }
  };

  df(V, g, visited, arr);
  return arr.join(" ");
};

console.log(
  dfs(
    input[0].split(" ").map((i) => Number(i)),
    input.slice(1).map((i) => i.split(" ").map((i) => Number(i)))
  )
);
console.log(
  bfs(
    input[0].split(" ").map((i) => Number(i)),
    input.slice(1).map((i) => i.split(" ").map((i) => Number(i)))
  )
);

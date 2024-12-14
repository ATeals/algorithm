const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

let arr1 = [];
for (let i = 1; i < n + 1; i++) {
  arr1.push(input[i].split(" ").map(Number));
}

let arr2 = [];
for (let i = n + 1; i < n * 2 + 1; i++) {
  arr2.push(input[i].split(" ").map(Number));
}

const result = [];
for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < m; j++) {
    row.push(arr1[i][j] + arr2[i][j]);
  }
  result.push(row);
}

for (let i = 0; i < n; i++) {
  console.log(result[i].join(" "));
}

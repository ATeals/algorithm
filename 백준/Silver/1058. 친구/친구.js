const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cnt = Number(input[0]);

let map = [];
for (let i = 1; i <= input.length - 1; ++i) {
  map.push(input[i].split(""));
}

let answer = 0;

for (let i = 0; i < map.length; ++i) {
  let set = new Set();
  for (let j = 0; j < map[0].length; ++j) {
    if (j !== i && map[i][j] === "Y") {
      set.add(j);
    }
  }

  let arr = [...set];
  arr.forEach((p) => {
    for (let z = 0; z < map[0].length; ++z) {
      if (z !== i && map[p][z] === "Y") {
        set.add(z);
      }
    }
  });

  if (set.size === cnt - 1) {
    console.log(set.size);
    return;
  }

  answer = Math.max(answer, set.size);
}

console.log(answer);

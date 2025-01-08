const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => item.split(" ").map(Number));

let [N, M] = input[0];
let prices = input.slice(1);

let minSet = Math.min(...prices.map(([set, _]) => set));
let minPiece = Math.min(...prices.map(([_, piece]) => piece));

let result = Math.min(
    Math.floor(N / 6) * minSet + (N % 6) * minPiece,
    Math.ceil(N / 6) * minSet,
    N * minPiece
);

console.log(result);
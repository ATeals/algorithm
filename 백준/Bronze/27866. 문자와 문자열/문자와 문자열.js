let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n")

const solution = (str, n) => {
  return str[n - 1];
};

console.log(solution(input[0], input[1]));

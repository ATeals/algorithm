const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
				.split('\n').slice(1).map(el => el.split(' ').map(Number)) 

const solution = input.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0] ).map(el => el.join(' ')).join('\n')

console.log(solution)
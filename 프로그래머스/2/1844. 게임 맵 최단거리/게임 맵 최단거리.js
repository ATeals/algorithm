const d = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(maps) {
  const [W, H] = [maps.length - 1, maps[0].length - 1];

  const queue = [[0, 0, 0]];

  while (queue.length > 0) {
    const [X, Y, C] = queue.shift()
        
    if (maps[X][Y] === 1) maps[X][Y] += C;
      


    for (let [dx, dy] of d) {
      const x = X + dx;
      const y = Y + dy;
      if (x < 0 || y < 0 || x > W || y > H) continue;
      
      if(x === W && y === H) return C+2

      if (maps[x][y] !== 0) {
        queue.push([x, y, C + 1]);
        maps[x][y] = 0
      }
    }
  }
    
  return -1
}


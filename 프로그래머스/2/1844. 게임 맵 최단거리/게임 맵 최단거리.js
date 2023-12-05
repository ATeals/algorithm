// const d = [
//   [1, 0],
//   [-1, 0],
//   [0, 1],
//   [0, -1],
// ];

// function solution(maps) {
//   const [W, H] = [maps.length - 1, maps[0].length - 1];

//   const queue = [[0, 0, 0]];

//   while (queue.length > 0) {
//     const [X, Y, C] = queue.shift()

//     if (maps[X][Y] === 1) maps[X][Y] += C;

//     for (let [dx, dy] of d) {
//       const [x, y] = [X + dx, Y + dy];
//       if (x < 0 || y < 0 || x > W || y > H) continue;

//       if (maps[x][y] === 1) {
//         queue.push([x, y, C + 1]);
//       }
//     }
//   }
    
//   const fin = maps[W][H] 

//   return fin=== 1 ? -1 : fin
// }


function solution(maps) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const queue = [[0, 0, 1]];

    while (queue.length) {
        const cur = queue.shift();
        if (cur[0] === maps.length - 1 && cur[1] === maps[0].length - 1) {
            return cur[2];
        }
            
        for (let i = 0; i < 4; i++) {
            const ny = cur[0] + dy[i];
            const nx = cur[1] + dx[i];
            
            if (nx >= 0 && ny >= 0 && nx < maps[0].length && ny < maps.length && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                queue.push([ny, nx, cur[2] + 1]);    
            }
        }
    }
    
    return -1;
}

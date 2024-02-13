const d = [[0,1], [1,0], [-1,0], [0,-1]]

function solution(maps) {
    if(maps.every(i=> [...i].every(i => i === "X"))) return [-1]
    
    const [W, H] = [maps.length, maps[0].length]
    const v = Array(W).fill(0).map(i=>Array(H).fill(0))
    
    const bfs =([x,y]) => {
        const queue = [[x,y]]
        let count = Number(maps[x][y])
        v[x][y] = 1
        
        while(queue.length >0){
            const [X,Y] = queue.shift()
            
            for(let [dx, dy] of d){
                const [x,y] = [X + dx, Y + dy]
                
                if(x < 0 || y < 0 || x > W-1 || y > H-1 || maps[x][y] === "X") continue;
                
                if(!v[x][y]){
                    v[x][y] = 1
                    count += Number(maps[x][y])
                    queue.push([x,y])
                }
            }
        }
        return count
    }
    
    const result = []
    
    for(let x = 0; x < W; x++){
        for(let y = 0; y < H; y++){
            if(maps[x][y] !== "X" && !v[x][y]) result.push(bfs([x,y]))
        }
    }
    
    return result.sort((a,b)=> a-b)
}
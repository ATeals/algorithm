const solution = (n, computers) => {
    let answer = 0;
    const graph = []
    computers.forEach((arr, x)=>{
        arr.forEach((n,y)=>{
            if(n===1)graph.push([x,y]);
        })
    })
      
    
    for(let i = 0; i < n; i++){
        if(computers[i][i] === 0) continue
        
        const queue = [i]
        while(queue.length){            
            const C = queue.shift();
            for(let [x,y] of graph){
                if(C === x && computers[x][y] === 1) {
                    queue.push(y);
                    computers[x][y] = 0
                }
            }
        }
        answer += 1;
    }
   

    return answer;
}
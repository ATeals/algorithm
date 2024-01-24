// function solution(n, edge) {
//     const visit = Array(n+1).fill(false)
//     const map = []
    
//     for(let [x,y] of edge){
//         edge.push([y,x]) 
//     }
    
//     const queue = [[1, 0]]
    
//     let max = 0
//     while (queue.length > 0){
//         const [v,n] = queue.shift()  
        
//         if(!visit[v]){
//             map.push([v,n])
//             visit[v] = true
            
//             if(n > max) max = n
                
//             for(let [x,y] of edge){
//                 if(v === x){
//                     queue.push([y,n+1])
//                 }else if(v === y){
//                     queue.push([x,n+1])
//                 }
//             }

//         }
//     }
        
//     return map.filter(([v,n])=> n === max).length
    
// }


function solution (n, edge) {
  const connects = new Array(n).fill().map(_ => []);
  for(const e of edge) {
    connects[e[0]-1].push(e[1]-1);
    connects[e[1]-1].push(e[0]-1);
  }
  
  const visited = [1];
  const queue = [0];
  while(queue.length) {
    const cur = queue.shift();
    
    for(const next of connects[cur]) {
      if(!visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }
  
  const max = Math.max(...visited);
  
  return visited.filter(el => el === max).length;
}
function solution(players, callings) {
    
    const obj = {};
  
    for (let i = 0; i < players.length; i++) {
        obj[players[i]] = i;
    }
    
    callings.map((i,index)=>{
        const idx = obj[i];
        const temp = players[idx-1];
        
        players[idx-1] = i;
        players[idx] = temp
        
        obj[i] = idx - 1;
        obj[temp] = idx;
       
    })

    return players
}
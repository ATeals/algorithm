const solution = (clothes)=> {
    const map = {}
    
    for( [x,y] of clothes){
        if(map[y]){
            map[y].push(x)
        }else{
            map[y] = [x]
        }
        
    }
    
    const num = Object.keys(map).map(i=> map[i].length)
    
    return num.reduce((a,c)=>a * (c+1) , 1) -1
}
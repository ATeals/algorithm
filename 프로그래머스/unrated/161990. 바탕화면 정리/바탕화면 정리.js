function solution(wallpaper) {
    const map = {x : [], y : []}
    wallpaper.map(i=>i.split("")).map((i,x)=>{
        i.map((_,y)=>{
            if(wallpaper[x][y] === "#"){
                map.x.push(x)
                map.y.push(y)
            } 
        })
    })
    
    return [Math.min(...map.x), 
            Math.min(...map.y), 
            Math.max(...map.x)+1, 
            Math.max(...map.y)+1]
}
    
    

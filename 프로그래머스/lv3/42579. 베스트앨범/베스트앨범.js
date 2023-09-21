const solution = (genres, plays) => {
    const map = {}
    genres.forEach((g, i)=>{
        map[g] = map[g]? map[g] + plays[i] : plays[i] 
    })
    
    genres = genres.map((genres,i)=> ({genres, play : plays[i], i}))
    
    const count = {}
    return genres.sort((a,b) =>{
        if(a.genres !== b.genres) return map[b.genres] - map[a.genres] 
        if(a.play !== b.play) return b.play - a.play
        return a.i - b.i
    }).filter(t =>  {
               if(count[t.genres] >= 2) return false;
               count[t.genres] = count[t.genres] ? ++count[t.genres] : 1;
               return true;
            })
           .map(t => t.i);    
        
}
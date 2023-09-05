const solution = (k, m, score) =>{
    
    score = score.sort((a,b)=>b-a).reduce((a,c, i)=>{
        if (i % m === 0) {
        a.push([c]);
    } else {
        a[a.length - 1].push(c);
    }
    return a;
    }, []).filter(i=> i.length === m)
    
   
    return score.reduce((a,c)=>a + Math.min(...c) * m , 0)
} 
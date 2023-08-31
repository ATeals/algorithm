const solution = (n) =>{
    let c = n+1
    while (true) {
        if([...c.toString(2)].filter(i=>i==="1").length === [...n.toString(2)].filter(i=>i==="1").length) return c
        c++
    }
} 
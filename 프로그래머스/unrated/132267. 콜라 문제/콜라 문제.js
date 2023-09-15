const solution = (a, b, n) => {
    let c = 0
    
    while(!(n < a)){
        c +=  Math.floor(n/a) * b
        n = Math.floor(n/a) * b + n%a
        console.log(c, n)
    }
    
    return c
}





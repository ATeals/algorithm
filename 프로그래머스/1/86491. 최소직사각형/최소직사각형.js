function solution(sizes) {
    let wallet = [0,0]
    sizes = sizes.map(([x,y])=> x>y? [x,y] : [y,x])
    
    for (let [x,y] of sizes){
        if(wallet[0] < x) wallet[0] = x
        if(wallet[1] < y) wallet[1] = y
    }
    
    return wallet[0] * wallet[1]
}
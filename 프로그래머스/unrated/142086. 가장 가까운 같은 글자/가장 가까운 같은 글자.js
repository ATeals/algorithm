function solution(s) {
    const map = {}
    
    return Array.from(s).map((c, i)=>{
        const item = map[c] ? i+1 - map[c] : -1
        map[c] = i+1
        return item
    })
}
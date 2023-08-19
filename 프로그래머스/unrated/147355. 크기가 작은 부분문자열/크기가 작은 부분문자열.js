function solution(t, p) {
    let count = 0
    for(let x = 0; x < t.length - p.length + 1 ; x++){
        const partial = t.slice(x,x + p.length)
        if(+partial <= +p) count++
    }
    return count;
}


function solution(arr) {
    let idx = 0
    let prevArr = arr
    while(true) {
        const changeCurArr = prevArr.map(i=> (i %2 === 0)? (i >= 50?  i/2 : i ) : (i < 50 ?  i*2 +1 : i ))
  
        const isAllSame = prevArr.every((a, i) => a === changeCurArr[i])
        if(isAllSame) break
        idx+=1
        prevArr = changeCurArr
    }
    
    return idx
}
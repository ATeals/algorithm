function solution(numlist, n) {
    return numlist.sort((a,b)=>{
      const gapa = n > a ? n-a : a-n;
        const gapb = n > b ? n-b : b-n;
        
        if(gapa === gapb) return b-a
        return gapa - gapb
    })
}
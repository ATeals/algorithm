const solution = (k, score)=> {
    const arr = []
     return score.map(i=>{
        arr.push(i)
        arr.sort((a,b) => b-a)
        return arr.length < k? arr[arr.length-1] : arr[k-1]
    })
}
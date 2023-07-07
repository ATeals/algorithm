function solution(arr, queries) {
    queries.map(([s,e])=>{
        arr = arr.map((item,i)=>((i >=s) && (i <=e)) ? item+=1 : item)
    })
    return arr
}
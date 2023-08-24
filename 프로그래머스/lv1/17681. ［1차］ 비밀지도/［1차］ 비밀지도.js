function solution(n, arr1, arr2) {
    const map = checkBlock(arr1,arr2, n)
    return map.map(i=>makeMap(decode(i, n)))
}

const decode = (code, n)=>code.toString(2).padStart(n, "0")

const checkBlock = (arr1, arr2, n)=>{
    return Array(n).fill(0).map((_,i)=>arr1[i] | arr2[i])
}

const makeMap = (code)=>code.replaceAll("0", " ").replaceAll("1", "#")
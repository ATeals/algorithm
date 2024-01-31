function solution(A, B) {
    A.sort((a,b)=> a-b)
    B.sort((a,b)=> a-b)
    
    let count = 0
    let index = 0
    for(let i = 0; i < A.length; i++){
        if(B[i] > A[index]){
            count++
            index++
        }
    }
    
    return count
}
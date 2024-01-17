function solution(n, lost, reserve) {  
    const arr = Array(n+1).fill(1)
    
    for(let i of reserve){
        arr[i]+=1
    }
    for(let i of lost){
        arr[i]-=1
    }
    

    for (let i = 0; i < n+1; i++) {
        if (arr[i-1] === 2 && arr[i] === 0) {
            arr[i-1] = 1;
            arr[i] = 1;
    
        } else if (arr[i] === 0 && arr[i+1] === 2) {
            arr[i] = 1;
            arr[i+1] = 1;
        }
    }
    

    
    return arr.filter(i=> i > 0).length -1
}


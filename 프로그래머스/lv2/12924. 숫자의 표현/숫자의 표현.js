const solution = (n) => {
    let answer = 0;
    
    for (let start = 1; start <= n; start++) {
        let sum = 0;
        let count = 0;
        
        while (sum < n) {
            sum += start + count;
            count++;
        }
        
        if (sum === n) {
            answer++;
        }
    }
    
    return answer;
}


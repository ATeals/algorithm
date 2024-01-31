function solution(land) {
    var answer = 0;
    
    const result = [0,0,0,0]
    
    for(let arr of land){   
        const dp = [...result]
        result[0] = arr[0] + Math.max(dp[1], dp[2], dp[3])
        result[1] = arr[1] + Math.max(dp[0], dp[2], dp[3])
        result[2] = arr[2] + Math.max(dp[1], dp[0], dp[3])
        result[3] = arr[3] + Math.max(dp[1], dp[2], dp[0])
    }



    return Math.max(...result);
}
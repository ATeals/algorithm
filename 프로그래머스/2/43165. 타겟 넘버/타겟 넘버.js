

function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (num, c)=>{
        if(c === numbers.length){
            if(num === target) answer += 1
            return;
        }
        

        dfs(num + numbers[c], c + 1);
        dfs(num - numbers[c], c + 1);
    }   
    
    dfs(0,0)
        
    return answer;
}
function solution(s){
    const stack = []
    
    if(s[0] === ")") return false
    
    for(let i=0; i < s.length; i++){
        if(s[i] === "(") stack.push("(")
        else {
            if(stack[stack.length-1] === ")") return false;
            else if(stack[stack.length-1] === "(")stack.pop();
        }
    }
        
    return stack.length === 0
}
function solution(s) {
    let result = "";
    let i = 0
    
     for(const c of s){
            if(c === " ") {
                i = 0
                result += " "
                continue;
            }
         
            if(i % 2 === 0){
                result += c.toUpperCase();
            }else{
                result += c.toLowerCase();
            }
         i++
        }

   
    return result
}
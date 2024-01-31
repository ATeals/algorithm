function solution(operations) {
    const q = [];
    
    for(let str of operations){
        const [m, n] = str.split(" ")
        
        if(m === "I"){
            q.push(Number(n))
            q.sort((a,b)=> a-b)
            
        }else if (m === "D"){
            if(n === "-1"){
                q.shift()
            }else{
                q.pop()
            }
        }
    }
    return q.length === 0 ? [0,0] : [q[q.length-1], q[0]]
}
function solution(park, routes) {
    park = park.map(i=> [...i.split("")])
    
    let dog = []
    park.forEach((i,index)=>{
        if(i.includes("S")){
            dog = [index, i.indexOf("S")]
        }
    })
    
    const map = { "N" : [-1, 0], "S" : [1, 0], "W" : [0, -1], "E" : [0, 1] }
 
    
    routes.map((route)=>{
        const [loc, n] = route.split(" ")
        let now = dog
        let flag = true
        
       
        for(let i = 0; i < Number(n); i++){
            
            now = [now[0] + map[loc][0], now[1] + map[loc][1]]
            
            if((now[0] > park.length - 1) || (now[0] < 0) ||(now[1] > park[0].length - 1) ||(now[1] < 0)){
                flag = false
                break
            }
               
            
            if(park[now[0]][now[1]] === 'X'){
                flag = false
                break
            } 
        }
        if(flag) dog = now
        
    })
    
    return dog
    
}
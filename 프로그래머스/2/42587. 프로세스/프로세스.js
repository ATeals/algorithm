function solution(priorities, location) {
    
    let count = 0
    
    while(true){
        const Item = priorities.shift()
        if(Item < Math.max(...priorities)){
            priorities.push(Item)
        }else{
            count++
            if(location ===0) return count
        }
        
        console.log(priorities, Item, location)
                   
        location = location === 0 ? priorities.length-1 : location-1
    }    
    
    return answer;
}
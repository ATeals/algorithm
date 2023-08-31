function solution(cards1, cards2, goal) {
    
    for(let x = 0 ; x < goal.length ; x++){
        
        if(!(goal[x] === cards1[0] || goal[x] === cards2[0])) return "No"
        
        if(goal[x] === cards1[0]) cards1 = cards1.slice(1)
        else cards2 = cards2.slice(1)
    }
    
    return "Yes"
}
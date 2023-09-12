const solution = (people, limit) =>{
    people = people.sort((a,b)=> b-a)
    
    let result = 0
    for (let i = 0, j = people.length-1 ; i <= j ; i++){
        if(people[i] + people[j] <= limit) j--
        result++
    }
    
    return result
}
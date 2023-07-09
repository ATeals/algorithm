const countDiv = (num)=>{
    let count = 0
    while(num !== 1){
        num = (num %2)? (num-1 )/2 : num /2 
        count++
    }
    return count
}

const solution= (num_list) => num_list.map(num=> countDiv(num)).reduce((acc,crr)=> acc+crr, 0)
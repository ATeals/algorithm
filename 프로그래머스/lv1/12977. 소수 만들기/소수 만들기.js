const solution = (nums) =>{
    let count = 0
    for(let x = 0; x < nums.length; x++){
        for(let y = x+1; y < nums.length; y++){
            for(let z = y+1; z < nums.length; z++){
                if(isPrime(nums[x] + nums[y] + nums[z])) count++
            }
        }
    }
    
    return count
}

const isPrime = (num)=> {
    for(let x = 2; x < Math.sqrt(num)+1; x++){
        if(num % x === 0) return false
    }
    
    return true
}
const solution =(nums) =>{
    const count= new Set(nums).size
    
    return (count > ~~(nums.length/2))? ~~(nums.length/2) : count
}
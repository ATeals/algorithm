const  solution = (array, commands) => commands.map(([i,j,k])=>{
    const arr = array.slice(i-1, j).sort((a,b)=> a-b)
    
    return arr[k-1]
})
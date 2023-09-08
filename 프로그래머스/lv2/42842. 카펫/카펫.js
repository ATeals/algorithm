const solution = (a,b)=>{
    const x = (a+4 + Math.sqrt((a+4) * (a+4) - 16* (a+b))) / 4
    const y = (a+4 - Math.sqrt((a+4) * (a+4) - 16* (a+b))) / 4
   return [x,y]
}
    
    

    


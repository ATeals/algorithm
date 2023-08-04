const solution = (today, terms, privacies) =>{
    const 오늘 = new Date(today)
    
    const 유효기간 = terms.reduce((a,c)=>{
        const [key, value] = c.split(" ")
        return {...a, [key] : Number(value)}
    },{})
    
    return privacies.reduce((acc,crr, index)=>{
        let [날짜,약관] = crr.split(" ")
        날짜 = new Date(날짜)
        
        날짜.setMonth(날짜.getMonth() + 유효기간[약관]) 
        
        return 날짜 <= 오늘 ? [...acc, index+1] : acc
        
    }, [])
    
} 

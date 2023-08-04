const solution = (today, terms, privacies) =>{
    const 오늘 = new Date(today)
    
    const 유효기간 = terms.reduce((a,c)=>{
        const [key, value] = c.split(" ")
        return {...a, [key] : Number(value)}
    },{})
    
    return privacies.reduce((acc,crr, index)=>{
        let [날짜,약관] = crr.split(" ")
        날짜 = new Date(날짜)
        

//         if((Math.abs(오늘.getDate() - 날짜.getDate()) === 0) && getMonth(날짜, 오늘) == 유효기간[약관]){
//             return [...acc, index+1]
//         }
        
//         return (getMonth(날짜, 오늘) > 유효기간[약관]) ? [...acc, index+1] : acc
        
        날짜.setMonth(날짜.getMonth() + 유효기간[약관]) 
        
        return 날짜 <= 오늘 ? [...acc, index+1] : acc
        
}, [])
    
} 

const getMonth = (start, end) => {

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  const totalMonths = yearDiff * 12 + monthDiff;

  return totalMonths;
}
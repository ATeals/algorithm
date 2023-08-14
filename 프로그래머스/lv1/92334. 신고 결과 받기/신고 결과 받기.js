function solution(id_list, report, k) {
    
    const idMap = id_list.reduce((a,c)=>({...a , [c] : {arr : [], report : 0, mail : 0 }}), {})
    
    let mute = []
      
    report.map(i=>{
        const [id, reportP] = i.split(" ");
        if(!idMap[id].arr.includes(reportP) ){
             idMap[id].arr =[...idMap[id].arr , reportP]
            idMap[reportP].report++ 
        }
    })

    mute = Object.keys(idMap).filter(i=> idMap[i].report >= k)
    
    
    Object.keys(idMap).map(id=>{
        mute.map(i=> {
            idMap[id].mail = idMap[id].arr.includes(i) ? ++idMap[id].mail : idMap[id].mail
        })
    })
    
    return Object.keys(idMap).map(i=>idMap[i].mail);
}




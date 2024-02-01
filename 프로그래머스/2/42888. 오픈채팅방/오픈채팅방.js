function solution(record) {
    const arr = []
    const nameMap = {}
    
    for(const s of record){
        const [type, id, name] = s.split(" ")
        
        if(type === "Enter"){
            nameMap[id] = name;
            arr.push({id, type})
        }
        else if(type === "Leave"){
            arr.push({id, type})
        }
        else if(type === "Change"){
            nameMap[id] = name
        }
    }
    
    return arr.map(i=> `${nameMap[i.id]}님이 ${i.type === "Enter" ? "들어왔습니다." : "나갔습니다."}`)
}


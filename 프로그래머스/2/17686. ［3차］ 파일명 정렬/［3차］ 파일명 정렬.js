function solution(files) {
    files = files.map(file=>{
        const ob = ["", "", ""]
        let flag = false
        for (let c of file){
            if(!isNaN(Number(c)) && c !== " " && !ob[2]) ob[1] += c
            else if(ob[0] && ob[1]) ob[2] +=c
            else ob[0] += c
        }
        
        return ob
    }).sort((a, b)=>{
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          } else if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          } else return a[1] - b[1];
    })
    
    
    
    
    
    
    return files.map(i=> i[0]+i[1]+i[2])
}
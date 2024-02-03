function solution(msg) {
    const map = new Map("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c,i)=> [c,i+1]))
    const arr = []
    
    let str = ""
    let start = 0;    
    
    while(start < msg.length) {
        let end = start;
        
        while(end + 1 <= msg.length && map.has(msg.substring(start, end + 1))) {
            end++;
        }

        arr.push(map.get(msg.substring(start, end)));

        if(end < msg.length) {
            map.set(msg.substring(start, end+1), map.size+1);
        }

        start = end;
    }   
    return arr
}
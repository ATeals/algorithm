function solution(cacheSize, cities) {
    let time = 0
    
    if(cacheSize === 0) return cities.length * 5
    
    const cache = new Map()
    for(let city of cities){
        city = city.toUpperCase()
        
        if(cache.get(city)){
            const num = cache.get(city)
            cache.set(city, 0)
            time+=1
        }
        else{
            if(cache.size >= cacheSize){
                const max = Math.max(...cache.values())
                cache.forEach((value, key)=>{
                    if(value == max) cache.delete(key)
                })
            }
            cache.set(city,0)
            time += 5
        }
        
        cache.forEach((value, key)=>{
            cache.set(key, value+1)
        })        
    }
    
    return time
}
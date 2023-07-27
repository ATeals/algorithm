const ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l",'m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function solution(s, skip, index) {
    const skipABC = ABC.filter(i=> !skip.includes(i))
    
   return Array.from(s).map((i)=>skipABC[(skipABC.indexOf(i) + index )% skipABC.length]).join("")
}
                            
                            
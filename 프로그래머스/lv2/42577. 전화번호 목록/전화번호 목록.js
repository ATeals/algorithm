const solution = (phone_book) => {
    const map = {}
    phone_book.forEach(i=>{map[i] = true})
    
    for(i of phone_book){
        for (let k =0 ; k < i.length; k++){
            const temp = i.slice(0,k+1)
            if(map[temp] && i !== temp) return false
        }
    }
    
    return true
}
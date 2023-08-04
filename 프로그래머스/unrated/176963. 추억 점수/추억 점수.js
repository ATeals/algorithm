const solution = (name, yearning, photo) => photo.map(i => {
    let result = 0
    name.map((j, index)=>{
        if(i.includes(j)){
            result += yearning[index]
        }
    })
    return result
})
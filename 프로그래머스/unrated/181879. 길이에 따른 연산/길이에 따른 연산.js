const solution = (arr) => arr.length >10 ? 
    arr.reduce((acc,crr)=> (acc+crr) , 0) : 
    arr.reduce((acc,crr)=> (acc * crr) , 1)
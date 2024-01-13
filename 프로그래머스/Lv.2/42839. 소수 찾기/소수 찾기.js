 const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      const permutations = getPermutations(rest, selectNumber - 1); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results;
}

const check = (n)=>{
    for(let i =2; i < n; i++){
        if(n % i === 0) return false
    }
    
    return true
}

function solution(numbers) {
    const result = []
    
    let arr =[]
    const L = numbers.length
    numbers = numbers.split("")
    
    for(let i = 1; i <= L; i++){
        arr.push(...getPermutations(numbers, i))
    }
    arr = arr.map(i=> Number(i.join("")))
    
    for(let item of arr){
        if(item === 0 || item === 1)continue
        if(!result.includes(item) && check(item)) result.push(item)
    }
    
    
    return result.length
}


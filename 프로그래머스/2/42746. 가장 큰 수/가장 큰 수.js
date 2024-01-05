const solution = (numbers)=> numbers.filter(i=>i !== 0).length === 0 ? "0" : numbers.map(String).sort((a,b)=>(b+a) - (a+b)).join("")



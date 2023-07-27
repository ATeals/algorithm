const solution = (numbers, direction) => direction === "left"?
numbers.map((_,i)=> i < numbers.length-1 ? numbers[i+1] : numbers[0] ):
numbers.map((_,i)=> i === 0 ? numbers[numbers.length-1] : numbers[i-1] )


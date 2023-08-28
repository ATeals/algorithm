const solution = (n) => Array.from({length : n}, (_,i)=>i+1).reduce((a,c)=> (n % c == 0) && (c % 2 == 1)? ++a : a , 0)


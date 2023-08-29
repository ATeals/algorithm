const solution = (n, m) => Math.round(f(n) / f(n-m) / f(m))

const f = (n) => Array.from({length : n}, (_,i)=>i+1).reduce((a,c)=> a * c,1)
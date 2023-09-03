const solution = (number, limit, power) => Array.from({length : number}, (_,i)=>i+1).reduce((a,c)=>{
    const div = divisor(c)
    return div > limit ? a + power : a + div 
}, 0)

const divisor = (num) => {
  let count = 0;
  const sqrt = Math.sqrt(num);

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      count++;
     
      if (i !== num / i) {
        count++;
      }
    }
  }

  return count;
};
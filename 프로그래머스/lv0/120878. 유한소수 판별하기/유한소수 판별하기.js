const getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

function sel(n) {
  let result = [];
  let divisor = 2;
  
  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor)
      n = n / divisor;
    }
    
     else divisor ++;
    
  }
  
  return [...new Set(result)];
}

function solution(a, b) {
    
    const gcd = getGCD(a,b)
    const num = b / gcd
    
    const selNum = sel(num)
    
    return selNum.filter(i=> !(i === 2 || i === 5) ).length === 0 ? 1 : 2
}
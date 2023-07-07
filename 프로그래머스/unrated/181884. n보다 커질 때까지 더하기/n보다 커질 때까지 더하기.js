function solution(numbers, n) {
    return numbers.reduce((acc, crr)=>(acc > n) ? acc : (acc + crr), 0);
}
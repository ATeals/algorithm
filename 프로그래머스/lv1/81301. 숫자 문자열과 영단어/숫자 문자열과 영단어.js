const solution = (s) => {
    ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].map((str, index)=>{ s = s.replaceAll(str, index)})
    
    return Number(s)
}
const solution = (n, words) => {
    for(let i = 1; i < words.length; i++){
        if(words.slice(0,i).includes(words[i]) || (words[i][0] !== words[i-1][words[i-1].length-1])) return [i%n+1, ~~(i/n+1)]
    }
        
    return [0, 0]
}
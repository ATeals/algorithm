const solution = (keymap, targets)=> targets.map(strs=> [...strs].reduce((a,c)=>a+checkKey(keymap, c), 0)).map(i=> i===Infinity ? -1 : i)


const checkKey = (keymap, key) =>{
    const arr = []
    keymap.map(strs=>{
        [...strs].map((str, i)=> str===key? arr.push(i+1) : -1)
    })
    return Math.min(...arr)
}
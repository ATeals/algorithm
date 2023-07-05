function solution(num_list) {
    const odd = num_list.filter((i,index)=> index % 2 === 0).reduce((acc, crr)=> acc + crr,0)
    const even = num_list.filter((i,index)=> index % 2 !== 0).reduce((acc, crr)=> acc + crr,0)
    return even > odd ? even : odd
}
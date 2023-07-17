function solution(participant, completion) {
    const completion_sort =  completion.sort()
    return participant.sort().find((i,index) => i !== completion_sort[index])
}
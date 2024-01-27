from collections import Counter


def solution(k, tangerine):
    
    tan = Counter(tangerine).most_common()
    sum = 0
    answer = 0
    
    for t in tan:
        sum += t[1]
        answer += 1
        if sum >= k:
            return answer
    
    return answer
         
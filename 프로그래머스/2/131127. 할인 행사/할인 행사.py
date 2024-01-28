def solution(want, number, discount):
    answer = 0
    i = 0
    dic = {}
    for k in range(len(want)):
        dic[want[k]] = number[k] 

    while i <= len(discount) - 10: 
        shop = discount[i:i+10]
        con = True

        for j in want: 
            if shop.count(j) == dic[j]:continue
            else:
                con = False
                break
        
        if con: answer += 1
            
        i += 1

    return answer
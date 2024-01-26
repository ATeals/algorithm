def solution(s):
    result = [0, 0]
    
    while s != "1" :
        k = s.replace("0", "")
        result[1] += len(s) - len(k)
        s = str(bin(len(k))[2:])
        result[0] += 1
    

    return result

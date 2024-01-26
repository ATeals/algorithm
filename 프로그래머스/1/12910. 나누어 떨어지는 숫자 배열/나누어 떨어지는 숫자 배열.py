def solution(arr, divisor):
    l = []
    for x in arr:
        if(x % divisor == 0): l.append(x)
        
    return sorted(l) if len(l) > 0 else [-1]
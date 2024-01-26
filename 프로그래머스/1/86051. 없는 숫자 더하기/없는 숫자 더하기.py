def solution(numbers):
    s = 0
    
    for x in range(1, 10):
        if(not(x in numbers)): s+= x
    
    return s
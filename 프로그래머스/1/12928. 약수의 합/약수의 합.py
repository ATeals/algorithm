def solution(n):
    add = 0
    for x in range(1, n+1):
        if(n % x == 0): add += x
    
    return add
def solution(x):
    n = sum([int(i) for i in str(x)])
    
    return True if (x % n == 0 ) else False
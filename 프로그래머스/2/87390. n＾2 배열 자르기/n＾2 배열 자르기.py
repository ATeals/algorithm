def solution(n, left, right):
    arr = []
    
    for i in range(left, right+1):
        arr.append(max(((i % n) + 1, (i // n) + 1)))
    
    return arr

# 1 2 3
# 4 5 6
# 7 8 9

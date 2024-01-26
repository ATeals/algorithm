
def countN(num):
    c = 0
    for i in range(1, num+1):
        if(num % i == 0): c+=1
    
    return c

def solution(left, right):
    s = 0
    for i in range(left, right+1):
        if(countN(i) % 2 == 0) : s+= i
        else : s-= i
        
    return s
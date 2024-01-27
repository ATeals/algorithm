import math

def LCM(a,b):
    return a * b // math.gcd(a,b);

def solution(arr):
    
    t = arr[0]
    
    for n in range(1,len(arr)):
        t = LCM(t, arr[n])
        
    
    
    return t
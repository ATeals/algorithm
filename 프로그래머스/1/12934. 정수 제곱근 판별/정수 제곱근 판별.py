import math

def solution(n):
    l = math.sqrt(n)
    if(l == int(l)) : return (l+1)**2
    return -1
import string

tmp = string.digits+string.ascii_lowercase
def convert(num, base) :
    q, r = divmod(num, base)
    if q == 0 :
        return tmp[r] 
    else :
        return convert(q, base) + tmp[r]

    
def isPrime(k):
    if(k == 1): return False
    
    for i in range(2,int(k ** (1/2)+1)):
        if(k % i == 0): return False
    
    return True
    
def solution(n, k):
    num = [x for x in convert(n,k).split("0") if x != "" ]
    
    result = 0
    for x in num:
        if(isPrime(int(x))): result +=1
    
        
    
    return result


def solution(price, money, count):
    total = 0
    for x in range(1,count+1):
        total += x * price
    
    
    return total - money if total > money else 0
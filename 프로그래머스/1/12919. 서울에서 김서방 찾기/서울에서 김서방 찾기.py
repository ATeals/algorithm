def solution(seoul):
    n = 0 
    for x in seoul:
        if(x == "Kim"): return f"김서방은 {n}에 있다"
        n+=1

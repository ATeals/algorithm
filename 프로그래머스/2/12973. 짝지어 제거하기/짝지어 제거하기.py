def solution(s):
    
    stack = []
    
    for c in s:
        if(not stack):
            stack.append(c)
        else:
            if c == stack[len(stack)-1]:
                stack.pop()
            else:
                stack.append(c)
        
    
    return 0 if len(stack) > 0 else 1
    
    
     
                
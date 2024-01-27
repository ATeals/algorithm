def isGood (s):
    stack = []
    
    for c in s:
        if(not stack): stack.append(c)
        else:
            if((stack[-1] == "{" and c == "}") or (stack[-1] == "[" and c == "]")  or (stack[-1] == "(" and c == ")") ): stack.pop()
            else: stack.append(c)
        
    return not len(stack) > 0
            
            
            

def solution(s):
    
    result = 0
    for i in range(len(s)):
        if isGood(s[i:] + s[0:i]) : result +=1
    
    return result     




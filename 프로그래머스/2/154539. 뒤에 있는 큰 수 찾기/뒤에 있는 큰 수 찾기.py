# def solution(numbers):
#     arr = []
    
#     for i, num in enumerate(numbers):
#         back = 0
#         for j in range(i, len(numbers)):
#             if(num < numbers[j]):
#                 back = numbers[j]
#                 break
                
#         arr.append(back or -1)
        
        
#     return arr


def solution(numbers):
    answer = [-1] * len(numbers)
    
    for i in range(len(numbers)-1, -1, -1):
        for j in range(i-1, -1, -1):
            if numbers[j] >= numbers[i]: 
                break
            answer[j] = numbers[i]
    return answer
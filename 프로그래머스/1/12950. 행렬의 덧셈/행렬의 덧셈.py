def solution(arr1, arr2):
    result = []
    for l in range(len(arr1)):
        a = []
        for x, y in zip(arr1[l], arr2[l]):
            a.append(x+y)
        result.append(a)
            
    return result
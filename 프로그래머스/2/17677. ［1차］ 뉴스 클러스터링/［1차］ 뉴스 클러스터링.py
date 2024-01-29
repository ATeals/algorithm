import string
from collections import Counter


s = string.ascii_letters

def solution(str1, str2):
    str1 = str1.lower()
    str2 = str2.lower()
    
    arr1 = [str1[i] + str1[i+1] for i in range(len(str1)-1) if str1[i] in s and str1[i+1] in s] 
    arr2 = [str2[i] + str2[i+1] for i in range(len(str2)-1) if str2[i] in s and str2[i+1] in s]
    
    c1 = Counter(arr1)
    c2 = Counter(arr2)
    
    add = len(list((c1 | c2).elements()))
    mod = len(list((c1 & c2).elements()))
            
    return int((mod / add) * 65536) if mod != 0 or add != 0 else 65536


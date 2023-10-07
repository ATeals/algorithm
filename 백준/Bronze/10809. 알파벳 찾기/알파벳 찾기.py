n = input()

str = 'abcdefghijklmnopqrstuvwxyz'

for x in str:
    if(x in n): print(n.index(x), end=" ")
    else: print(-1, end=" ")
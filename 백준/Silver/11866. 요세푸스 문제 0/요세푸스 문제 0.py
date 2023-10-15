import sys
input = sys.stdin.readline
N, K = map(int, input().split())
yose = [i for i in range(1, N+1)]
idx = K - 1
slst = []
print('<', end='')
while yose:
    if idx < len(yose):
        slst.append(yose[idx])    # 제거 예약
        idx += K
    
    else:
        idx -= len(yose)
        for i in slst:
            yose.remove(i)
            print(i, end='')
            if yose:
                print(', ', end='')
        slst.clear()
print('>')
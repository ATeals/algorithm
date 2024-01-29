from heapq import heappush, heappop

def solution(scoville, K):
    h = []
    
    for i in scoville:
        heappush(h,i )
    
    count = 0
    
    while h[0] < K :
        if(len(h) < 2): break
        
        a = heappop(h)
        b = heappop(h)
        heappush(h, a + b * 2)
        count+=1
    
    return count if h[0] >= K else -1
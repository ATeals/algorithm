def solution(n):
    l = sorted([int(x) for x in str(n)])
    return int("".join(reversed(list(map(str, l)))))
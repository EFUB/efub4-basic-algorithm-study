import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
n_list = list(range(1,n+1))
dq = deque()
dq.append(n_list.pop())
print(dq)

while len(dq) != n:
    k = n_list.pop()

    dq.appendleft(k)
    for i in range(k):
        dq.appendleft(dq.pop())

print(' '.join(map(str, list(dq))))
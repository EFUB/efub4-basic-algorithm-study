from collections import deque

n=int(input())
dq=deque()
dq.appendleft(n)

for i in range(n-1, 0, -1):
    dq.appendleft(i)
    
    for j in range(i):
        k=dq.pop()
        dq.appendleft(k)

print(*dq) 

#*dq는 deque 객체 dq에 저장된 모든 요소를 공백으로 구분하여 출력한다.
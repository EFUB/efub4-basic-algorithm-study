from collections import deque

n=int(input())
dqe=deque()
dqe.appendleft(n)

for i in range(n-1, 0, -1):
    dqe.appendleft(i)
    
    for j in range(i):
        k=dqe.pop()
        dqe.appendleft(k)

print(*dqe) 

#*dqe는 deque 객체 dqe에 저장된 모든 요소를 공백으로 구분하여 출력한다.
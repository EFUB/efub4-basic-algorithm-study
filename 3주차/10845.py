import sys

n=int(sys.stdin.readline())
q=[]

for _ in range(n):
    order=sys.stdin.readline().split()

    if order[0]=="push":
        q.append(order[1])
    elif order[0]=="pop":
        if q==[]:
            print(-1)
        else:
            print(q.pop(0))
    elif order[0]=="size":
        print(len(q))
    elif order[0]=="empty":
        if q==[]:
            print(1)
        else:
            print(0)
    elif order[0]=="front":
        if q==[]:
            print(-1)
        else:
            print(q[0])
    elif order[0]=="back":
        if q==[]:
            print(-1)
        else:
            print(q[-1])
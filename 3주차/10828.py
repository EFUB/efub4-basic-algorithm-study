import sys
n=int(sys.stdin.readline())

stack=[]
for i in range(n):
    word = sys.stdin.readline().split()
    order=word[0]

    if order == "push":
        stack.append(word[1])
    elif order == "pop":
        if stack == []:
            print(-1)
        else:
            print(stack.pop())
    elif order == "size":
        print(len(stack))
    elif order == "empty":
        if stack == []:
            print(1)
        else:
            print(0)
    elif order =="top":
        if stack == []:
            print(-1)
        else:
            print(stack[-1])
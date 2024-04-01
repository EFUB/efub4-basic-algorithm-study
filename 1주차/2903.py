n=int(input())
k=3
if(n>1):
    for _ in range(n-1):
        k=(2*k-1)
print(k*k)
n,m=map(int,input().split())
num=list(map(int,input().split()))

nrt=0

for i in range(len(num)-2):
    for j in range(i+1,len(num)-1):
        for k in range(j+1, len(num)):
            x=num[i]+num[j]+num[k]
            if x>m:
                continue
            if x==m:
                nrt=m
                break
            if m-x<m-nrt:
                nrt=x
print(nrt)

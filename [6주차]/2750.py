n=int(input())
m=[]

for i in range(n):
    m.append(int(input()))
    
# insert sort
for i in range(1, len(m)):
    key=m[i]
    j=i-1
    while(j>=0) and (m[j]>key):
        m[j+1]=m[j]
        j-=1
    m[j+1]=key
        
for n in m:
    print (n)
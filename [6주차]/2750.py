n=int(input())
m=[]

for i in range(n):
    m.append(int(input()))
    
# insert sort
for i in range(2, len(m)):
    key=m[i]
    j=i-1
    while(j>0) & (m[j]>key):
        m[j+1]=m[j]
        j-=1
        
for n in m:
    print (n)
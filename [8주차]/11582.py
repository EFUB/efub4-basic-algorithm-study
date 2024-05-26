n=int(input().strip())
n_list=list(map(int,input().strip().split()))
k=int(input().strip())
new_list=[]
for i in range(0,n,n//k):
    new_list+=sorted(n_list[i:i+n//k])
print(" ".join(str(i) for i in new_list))

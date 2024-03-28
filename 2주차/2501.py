#약수 구하기
n,k=list(map(int,input().split()))
nums=[]
for i in range(1,n//2) :
    if n%i == 0 :
        nums.append(i)
        nums.append(n//i)
nums2=list(set(nums))
sorted_nums=sorted(nums2)
if len(nums2)>=k:
    print(sorted_nums[k-1])

else:
    print(0)

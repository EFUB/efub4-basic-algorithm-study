n=int(input())

dp=[0]*5
dp[0]=0
dp[1]=2
dp[2]=1
dp[3]=3
dp[4]=2

if n==1 or n==3 :
    print(-1)
elif n==2:
    print(1)
elif n==4:
    print(2)
else:
    print(dp[n%5]+n//5)




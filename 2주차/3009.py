a1,b1=list(map(int,input().split()))
a2,b2=list(map(int,input().split()))
a3,b3=list(map(int,input().split()))


if a1==a2 : 
    answer1=a3
elif a1==a3 :
    answer1=a2
else :
    answer1=a1

if b1==b2 : 
    answer2=b3
elif b1==b3 :
    answer2=b2
else :
    answer2=b1

print(answer1,answer2)
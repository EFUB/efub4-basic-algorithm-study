t=int(input())
for i in range (t):
    floor=int(input())
    number=int(input())
    floor0=[x for x in range(1, number+1)]
    for k in range(floor):
        for j in range (1,number):
            floor0[j] += floor0[j-1]
    print(floor0[-1])
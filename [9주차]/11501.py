testCase=int(input())
for i in range(testCase):
    n=int(input())
    price=list(map(int,input().split()))
    
    money=0
    maxPrice=0
    
    for i in range(len(price)-1, -1,-1):
        if price[i]>maxPrice:
            maxPrice=price[i]
        else:
            money += maxPrice-price[i]
    print(money)
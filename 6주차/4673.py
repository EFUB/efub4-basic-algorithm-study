q=[]
def cal_dn(n) : 
    dn=sum(int(digit) for digit in str(n))+n
    return dn

for _ in range (1,10001):
    q.append(_)

for i in range(1,10001):
    my_dn=cal_dn(i)
    if my_dn>10000:
        continue
    else :
        q[(my_dn)-1]=0

for each in q:
    if each !=0:
        print(each)

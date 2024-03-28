tr=[]
while(True) :
    tr=list(map(int,input().split()))
    tr.sort()
    if tr[0]==0:
        break
    if tr[0]+tr[1]<=tr[2] :
        print("Invalid")
    elif tr[0]==tr[1]==tr[2] :
        print("Equilateral")
    elif tr[0]!=tr[1] and tr[1]!=tr[2] :
        print("Scalene")
    else :
        print("Isosceles")

#제한조건 내 배열 초기화
apt_member=[[0]*15 for i in range(15)]

#미리 계산 후 저장
for floor in range(15):
    for door in range(1,15):
        if floor==0:
            apt_member[floor][door]=door
        else:
            for b in range(1,door+1):
                apt_member[floor][door]+=apt_member[floor-1][b]


T=int(input())

for i in range(T):
    k=int(input())
    n=int(input())
    print(apt_member[k][n])



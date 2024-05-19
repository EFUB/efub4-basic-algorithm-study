n,m=map(int,input().split())
board=[]
cnt=[]
for _ in range(n):
    board.append(input())

for i in range(n-7):
    for j in range(m-7):
        w_index=0
        b_index=0
        for a in range(i,i+8): #시작지점
            for b in range(j,j+8): 
                if (a+b)%2==0:#짝수인 경우
                    if board[a][b]!='W':#W가 아니면, 즉 B이면
                        w_index+=1#W로 칠하는 갯수
                    else:#W일 때
                        b_index+=1#B로 칠하는 갯수
                else:#홀수인 경우
                    if board[a][b]!='W':#W가 아니면, 즉 B이면
                        b_index+=1#B로 칠하는 갯수
                    else:
                        w_index+=1#W로 칠하는 갯수
                        
        cnt.append(w_index) #W로 시작할 때 경우의 수
        cnt.append(b_index) #B로 시작할 때 경우의 수
print(min(cnt))
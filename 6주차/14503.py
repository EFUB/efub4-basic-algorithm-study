from collections import deque

n,m=map(int,input().split())
r,c,d=map(int,input().split())
#0: 북쪽, 1: 동쪽, 2: 남쪽, 3: 서쪽
dx=[-1,0,1,0]
dy=[0,1,0,-1]

space=[]

for i in range(n):
    space.append(list(map(int, input().split())))
    #0: 청소되지않은 빈칸 1: 그 칸에 벽이 있음
    #-1 : 청소했음
power=True
cnt=0

def clean(x,y,d):
    global cnt
    if space[x][y] == 0: #청소안된칸
        space[x][y]=-1
        cnt +=1
    
    for _ in range(4):
        di = (d-1)%4 #반시계방향 회전
        nx=x+dx[di]
        ny=y+dy[di]

        if space[nx][ny] == 0:
            clean(nx,ny,di)
            return
        
        d=di
    #후진    
    nx=x-dx[d]
    ny=y-dy[d]
    if space[nx][ny] ==1:
        return
    clean(nx,ny,d)


clean(r,c,d)
print(cnt)


    


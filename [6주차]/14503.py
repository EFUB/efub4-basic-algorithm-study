
import sys
input =sys.stdin.readline
from collections import deque

#가로 세로 크기 입력 받기
n,m=map(int, input().split())
graph=[]

#로봇청소기 이동 표시 여부 지도 생성 ex) n=3, m=5 면 
#[[0, 0, 0, 0, 0],
# [0, 0, 0, 0, 0],
#[0, 0, 0, 0, 0]]

visited = [[0]*m for _ in range(n)]

#로봇청소기가 있는 칸의 좌표와 바라보는 방향 입력받기
x,y,direction = map(int, input().split())

#현재 좌표 이동 거리
visited[x][y]=1

#지도 입력받기
vaccum_map=[]
for i in range(n):
    vaccum_map.append(list(map(int,input().split())))

#북,동,남,서의 좌표 위치 정의    
dx=[-1,0,1,0]
dy=[0,1,0,-1]

#로봇청소기 왼쪽으로 회전
def turn_left():
    global direction
    direction -=1
    if direction ==-1:
        direction=3

#처음 로봇청소기 위치 청소
cnt =1

#회전 횟수
turn_time=0

#시뮬레이션 시작
while True:
    #왼쪽으로 회전
    turn_left()
    #이동하려는 로봇청소기의 x,y 좌표
    nx=x+dx[direction]
    ny=y+dy[direction]
    #로봇 청소기가 이동하려는 칸이 청소되지 않았으며 빈칸인 경우
    if visited[nx][ny]==0 and vaccum_map[nx][ny]==0:
        #이동하려는 칸을 청소
        visited[nx][ny]=1
        #청소한 칸 추가
        cnt+=1
        #로봇 청소기 위치 이동
        x,y=nx,ny
        #회전 횟수 초기화
        turn_time=0
        continue
        #그 외의 경우 회전한 횟수 1 증가
    else:
        turn_time+=1
        
    #네 방향 모두 돌았을 때 청소할 구역이 없는 경우
    if turn_time==4:
        #후진하는 방향의 x,y 좌표
        nx=x-dx[direction]
        ny=y-dy[direction]
        #뒤쪽 방향으로 이동이 가능하다면
        if vaccum_map[nx][ny]==0:
            x,y=nx,ny
        #그렇지 않다면    
        else:
            break
        turn_time=0
#정답 출력     
print(cnt)


import sys
input =sys.stdin.readline
from collections import deque

#가로 세로 크기 입력 받기
n,m=map(int, input().split())
graph=[]

#로봇청소기 이동 표시 여부 지도 생성 ex) n=3, m=5 면 
#[[0, 0, 0, 0, 0],
# [0, 0, 0, 0, 0],
#[0, 0, 0, 0, 0]]

visited = [[0]*m for _ in range(n)]

#로봇청소기가 있는 칸의 좌표와 바라보는 방향 입력받기
x,y,direction = map(int, input().split())

#현재 좌표 이동 거리
visited[x][y]=1

#지도 입력받기
vaccum_map=[]
for i in range(n):
    vaccum_map.append(list(map(int,input().split())))

#북,동,남,서의 좌표 위치 정의    
dx=[-1,0,1,0]
dy=[0,1,0,-1]

#로봇청소기 왼쪽으로 회전
def turn_left():
    global direction
    direction -=1
    if direction ==-1:
        direction=3

#처음 로봇청소기 위치 청소
cnt =1

#회전 횟수
turn_time=0

while True:
    turn_left()
    nx=x+dx[direction]
    ny=y+dy[direction]
    if visited[nx][ny]==0 and vaccum_map[nx][ny]==0:
        visited[nx][ny]=1
        cnt+=1
        x,y=nx,ny
        turn_time=0
        continue
    else:
        turn_time+=1
        
    if turn_time==4:
        nx=x-dx[direction]
        ny=y-dy[direction]
        if vaccum_map[nx][ny]==0:
            x,y=nx,ny
        else:
            break
        turn_time=0
print(cnt)

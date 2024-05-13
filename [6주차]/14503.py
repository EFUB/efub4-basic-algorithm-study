
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

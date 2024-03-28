colorPapers = int(input())

# 값이 0으로 채워진 100x100 2차원 배열 생성
paper = [[0 for _ in range(100)] for _ in range(100)]

for i in range(colorPapers) :
    a,b=list(map(int,input().split()))
    for j in range(a,a+10):
        for k in range(b,b+10):
            paper[j][k] = 1

#1 개수 세기
count = 0
for row in paper:
    for num in row:
        if num == 1 :
            count +=1

print(count)


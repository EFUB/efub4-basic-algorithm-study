import sys

N, M = map(int, sys.stdin.readline().split()) 
bottom = []
for _ in range(N):
    bottom.append(list(sys.stdin.readline()))


def dfs(row, col):
    if bottom[row][col] == "-":
        bottom[row][col] = 1 
        for i in [1, -1]:  
            Y = col +i
            if (0 < Y < M) and bottom[row][Y] == "-":  
                dfs(row, Y)
   
    if bottom[row][col] == "|":
        bottom[row][col] = 1
        for j in [1, -1]:  
            X = row + j
            if (0 < X < N) and bottom[X][col] == "|":  
                dfs(X, col)


count = 0
for i in range(N):  
    for j in range(M):  
        if bottom[i][j] == '-' or bottom[i][j] == "|":  
            dfs(i, j)  
            count += 1

print(count)
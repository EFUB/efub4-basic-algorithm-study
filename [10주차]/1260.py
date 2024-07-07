N,M,V = map(int, input().split())

matrix = [[0] *(N+1) for _ in range(N+1)]
for i in range (M):
    a,b=map(int, input().split())
    matrix[a][b] =matrix[b][a] =1
    
visitedList=[0]*(N+1)
newVisitedList=visitedList.copy()

def dfs(V):
    visitedList[V]=1 #방문
    print(V, end=' ')
    for i in range(1,N+1):
        if matrix[V][i]==1 and visitedList[i]==0:
            dfs(i)
            
def bfs(V):
    queue = [V]
    newVisitedList[V]=1 #방문
    while queue:
        V=queue.pop(0)
        print(V, end=' ')
        for i in range(1, N+1):
            if(newVisitedList[i] ==0 and matrix[V][i]==1):
                queue.append(i)
                newVisitedList[i]=1
                
dfs(V)
print()
bfs(V)
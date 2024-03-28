a=[list(map(int,input().split())) for _ in range(9)]

max_num=0
max_i=9
max_j=9
for i in range(9):
   for j in range(9):
       if a[i][j] > max_num :

           max_num = a[i][j]
           max_i=i+1
           max_j=j+1


print(max_num)
print(max_i,max_j)
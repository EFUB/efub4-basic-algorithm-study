import sys
N = int(sys.stdin.readline())
Home_list=list(map(int,sys.stdin.readline().split()))
Home_list.sort()

print(Home_list[(N-1)//2])
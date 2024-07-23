N = int(input())
A = list(map(int, input().split()))
M = int(input())
arr = list(map(int, input().split()))
A.sort()			


for num in arr:
    first, last = 0, N - 1		
    isExist = False		

    # 이분탐색 시작
    while first <= last:		
        mid = (first + last) // 2	
        if num == A[mid]:	
            isExist = True	
            print(1)		
            break		
        elif num > A[mid]:	
            first = mid + 1
        else:			
            last = mid - 1	

    if not isExist:		
        print(0)		
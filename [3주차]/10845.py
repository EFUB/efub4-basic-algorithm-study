import sys
n=int(sys.stdin.readline())
queue = []

for i in range(n):
  func = sys.stdin.readline().split()
  if(func[0]=='push'):
    queue.append(func[1])
  
  elif(func[0]=='pop'):
    if len(queue)==0:
      print(-1)
    else:
      print(queue.pop(0))
  
  elif(func[0]=='size'):
    print(len(queue))
  
  elif(func[0]=='empty'):
    if len(queue)==0:
      print(1)
    else:
      print(0)
  
  elif(func[0]=='front'):
    if len(queue)==0:
      print(-1)
    else:
      print(queue[0])
  
  elif(func[0]=='back'):
    if len(queue)==0:
      print (-1)
    else:
      print(queue[-1])
  
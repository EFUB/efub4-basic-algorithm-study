#set 집합 자료형 이용
num = set(range(1,10001))
gen_num = set()

for i in range(1,10001):
    for j in str(i): # ex. 740=> 7,4,0 반복
        i+= int(j)
    gen_num.add(i)

#gen_num 변수에는 생성자로 생겨난 수들이 모이게 됨
self_num= sorted(num-gen_num)
for i in self_num:
    print(i)
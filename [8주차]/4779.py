# 8주차 복습하기
from sys import stdin
input = stdin.readline

def cantor(n):
    if n == 1:
        return "-"

    unit = cantor(n // 3)
    res = unit + " " * (n // 3) + unit

    return res

while True:
    try:
        N = int(input())
        print(cantor(3**N))
    except:
        break
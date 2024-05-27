import sys

MIN_RANGE = 2
DIVISION_SIZE = 4

def main():
    n = int(sys.stdin.readline().strip())
    seats = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
    seat = select_seat(seats, n, 0, 0)
    print(seat)

def select_seat(seats, size, x, y):
    if size < MIN_RANGE:
        return seats[x][y]

    half = size // 2
    tmp = []

    for i in range(DIVISION_SIZE):
        nx = x + (i % 2) * half  # 0, 1, 0, 1
        ny = y + (i // 2) * half  # 0, 0, 1, 1

        tmp.append(select_seat(seats, half, nx, ny))

    tmp.sort()
    return tmp[1]

if __name__ == "__main__":
    main()
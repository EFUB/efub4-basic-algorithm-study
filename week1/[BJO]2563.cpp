#include <iostream>
using namespace std;

void solve(int num) {
    /* 바탕 사각형을 0으로 초기화*/
    int rec[100][100];
    for (int i = 0; i < 100; i++) {
        for (int j = 0; j < 100; j++) {
            rec[i][j] = 0;
        }
    }

    /* 작은 사각형 개수만큼 큰 사각형에 붙이기 */
    for (int i = 0; i < num; i++) {
        /* 작은 사각형 위치 입력 */
        int x, y;
        cin >> x >> y;
        /* 작은 사각형이 붙어 있는 곳의 위치를 1로 변경*/
        for (int j = x; j < x + 10; j++) {
            for (int k = y; k < y + 10; k++) {
                rec[j][k] = 1;
            }
        }
    }

    /* 작은 사각형이 붙어있는 곳의 면적 구하기 */
    int size = 0;
    for (int i = 0; i < 100; i++) {
        for (int j = 0; j < 100; j++) {
            if (rec[i][j] == 1) size++;
        }
    }

    cout << size;

}

int main(void) {
    int num = 0;

    /* 사각형의 개수 입력 */
    cin >> num;

    solve(num);
    return 0;
}
#include <iostream>
using namespace std;

void solve(int x[3], int y[3]) {
    int x4 = 0, y4 = 0;

    // 직사각형의 네 점의 좌표의 x와 y 값은 모두 2번씩 같아야 한다.
    // 예를 들어 x좌표로 (1,2,1) 이렇게 입력되었다면 남은 한 점의 x좌표는 2이다. 
    // 1. x좌표 찾기
    if (x[0] == x[1]) x4 = x[2];
    else if (x[0] == x[2]) x4 = x[1];
    else x4 = x[0];

    // 2. y좌표 찾기
    if (y[0] == y[1]) y4 = y[2];
    else if (y[0] == y[2]) y4 = y[1];
    else y4 = y[0];

    cout << x4 << " " << y4;
}

int main(void) {
    // 입력받기
    int x[3];
    int y[3];
    for (int i = 0; i < 3; i++) {
        cin >> x[i] >> y[i];
    }
    solve(x, y);
}
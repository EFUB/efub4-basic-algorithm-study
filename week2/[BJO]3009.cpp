#include <iostream>
using namespace std;

void solve(int x[3], int y[3]) {
    int x4 = 0, y4 = 0;

    // ���簢���� �� ���� ��ǥ�� x�� y ���� ��� 2���� ���ƾ� �Ѵ�.
    // ���� ��� x��ǥ�� (1,2,1) �̷��� �ԷµǾ��ٸ� ���� �� ���� x��ǥ�� 2�̴�. 
    // 1. x��ǥ ã��
    if (x[0] == x[1]) x4 = x[2];
    else if (x[0] == x[2]) x4 = x[1];
    else x4 = x[0];

    // 2. y��ǥ ã��
    if (y[0] == y[1]) y4 = y[2];
    else if (y[0] == y[2]) y4 = y[1];
    else y4 = y[0];

    cout << x4 << " " << y4;
}

int main(void) {
    // �Է¹ޱ�
    int x[3];
    int y[3];
    for (int i = 0; i < 3; i++) {
        cin >> x[i] >> y[i];
    }
    solve(x, y);
}
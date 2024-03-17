#include <iostream>
using namespace std;

void solve(int num) {
    /* ���� �簢���� 0���� �ʱ�ȭ*/
    int rec[100][100];
    for (int i = 0; i < 100; i++) {
        for (int j = 0; j < 100; j++) {
            rec[i][j] = 0;
        }
    }

    /* ���� �簢�� ������ŭ ū �簢���� ���̱� */
    for (int i = 0; i < num; i++) {
        /* ���� �簢�� ��ġ �Է� */
        int x, y;
        cin >> x >> y;
        /* ���� �簢���� �پ� �ִ� ���� ��ġ�� 1�� ����*/
        for (int j = x; j < x + 10; j++) {
            for (int k = y; k < y + 10; k++) {
                rec[j][k] = 1;
            }
        }
    }

    /* ���� �簢���� �پ��ִ� ���� ���� ���ϱ� */
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

    /* �簢���� ���� �Է� */
    cin >> num;

    solve(num);
    return 0;
}
#include <iostream>
using namespace std;

void solve(int arr[][9]) {
    /* 2���� �迭�� ù ��° ���Ҹ� ���۰����� ���� */
    int col = 0, row = 0, max = arr[0][0];

    /* 2���� �迭�� �ִ��� ����*/
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (max <= arr[i][j]) {
                max = arr[i][j];
                col = i + 1;
                row = j + 1;
            }
        }
    }
    cout << max << "\n";
    cout << col << " " << row;
}

int main(void) {

    /* �Է°��� 2���� �迭�� ���� */
    int arr[9][9];
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            cin >> arr[i][j];
        }
    }
  
    solve(arr);
    return 0;
}

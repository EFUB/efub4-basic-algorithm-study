#include <iostream>
using namespace std;

void solve(int arr[][9]) {
    /* 2차원 배열의 첫 번째 원소를 시작값으로 설정 */
    int col = 0, row = 0, max = arr[0][0];

    /* 2차원 배열의 최댓값을 구함*/
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

    /* 입력값을 2차원 배열에 저장 */
    int arr[9][9];
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            cin >> arr[i][j];
        }
    }
  
    solve(arr);
    return 0;
}

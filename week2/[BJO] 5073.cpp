#include <iostream>
#include<vector>
using namespace std;

string solve(int len[3]) {
    // 변의 길이를 오름차순 정렬
    for (int i = 0; i < 2; i++) {
        if (len[i] > len[i + 1]) {
            int swap = len[i];
            len[i] = len[i + 1];
            len[i + 1] = swap;
        }
    }

    // 삼각형이 아닌 경우, Invalid 반환
    if (len[2] >= len[0] + len[1]) return "Invalid";

    // 세 변의 길이가 모두 같은 경우, Equilateral 반환
    else if (len[0] == len[1] && len[1] == len[2] && len[0] == len[2]) return "Equilateral";

    // 세 변의 길이가 모두 다른 경우, Scalene 반환
    else if (len[0] != len[1] && len[1] != len[2] && len[0] != len[2]) return "Scalene";

    // 두 변의 길이가 같은 경우, Isosceles 반환
    else return "Isosceles";
}

int main(void) {
    vector<string> v;

    // 입력받기
    int len[3] = { -1, -1, -1 };
    while (1) {
        cin >> len[0] >> len[1] >> len[2];

        // 모두 0이 입력된 경우, 입력을 중단함.
        if (len[0] == 0 && len[1] == 0 && len[2] == 0) break;

        // solve를 통해 반환된 값을 벡터에 저장.
        v.push_back(solve(len));
    }

    for (int i = 0; i < v.size(); i++) {
        cout << v.at(i) << "\n";
    }
}
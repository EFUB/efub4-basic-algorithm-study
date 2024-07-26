#include <iostream>
#include<vector>
using namespace std;

string solve(int len[3]) {
    // ���� ���̸� �������� ����
    for (int i = 0; i < 2; i++) {
        if (len[i] > len[i + 1]) {
            int swap = len[i];
            len[i] = len[i + 1];
            len[i + 1] = swap;
        }
    }

    // �ﰢ���� �ƴ� ���, Invalid ��ȯ
    if (len[2] >= len[0] + len[1]) return "Invalid";

    // �� ���� ���̰� ��� ���� ���, Equilateral ��ȯ
    else if (len[0] == len[1] && len[1] == len[2] && len[0] == len[2]) return "Equilateral";

    // �� ���� ���̰� ��� �ٸ� ���, Scalene ��ȯ
    else if (len[0] != len[1] && len[1] != len[2] && len[0] != len[2]) return "Scalene";

    // �� ���� ���̰� ���� ���, Isosceles ��ȯ
    else return "Isosceles";
}

int main(void) {
    vector<string> v;

    // �Է¹ޱ�
    int len[3] = { -1, -1, -1 };
    while (1) {
        cin >> len[0] >> len[1] >> len[2];

        // ��� 0�� �Էµ� ���, �Է��� �ߴ���.
        if (len[0] == 0 && len[1] == 0 && len[2] == 0) break;

        // solve�� ���� ��ȯ�� ���� ���Ϳ� ����.
        v.push_back(solve(len));
    }

    for (int i = 0; i < v.size(); i++) {
        cout << v.at(i) << "\n";
    }
}
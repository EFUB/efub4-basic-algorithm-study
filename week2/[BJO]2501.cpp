#include <iostream>
using namespace std;

void solve(long N, long K) {
    long order = 0, divisor = 0;

    // 1���� N���� ������Ű�� K��° ��� ã��
    for (long i = 1; i <= N; i++) {
        // i�� N�� ������
        if (N % i == 0) {
            // divisor�� i�� ����
            divisor = i;
            // �̶� ����� divisor�� order��° ����̰�, K��° ����� ã�� ���̶�� �ݺ��� Ż��
            if (++order == K) break;
        }
    }

    // ���� divisor�� ����� ����� K��° ������, divisor�� ���
    if (order == K) cout << divisor;
    // ���� divisor�� ����� ����� K��° ����� �ƴ϶��, 0�� ���
    else cout << 0;

}

int main(void) {
    // N�� K�Է�
    long N = 0, K = 0;
    cin >> N >> K;

    solve(N, K);
}
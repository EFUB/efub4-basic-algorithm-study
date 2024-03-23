#include <iostream>
using namespace std;

void solve(long N, long K) {
    long order = 0, divisor = 0;

    // 1부터 N까지 증가시키며 K번째 약수 찾기
    for (long i = 1; i <= N; i++) {
        // i가 N의 약수라면
        if (N % i == 0) {
            // divisor에 i를 저장
            divisor = i;
            // 이때 저장된 divisor는 order번째 약수이고, K번째 약수를 찾은 것이라면 반복문 탈출
            if (++order == K) break;
        }
    }

    // 만약 divisor에 저장된 약수가 K번째 약수라면, divisor을 출력
    if (order == K) cout << divisor;
    // 만약 divisor에 저장된 약수가 K번째 약수가 아니라면, 0을 출력
    else cout << 0;

}

int main(void) {
    // N과 K입력
    long N = 0, K = 0;
    cin >> N >> K;

    solve(N, K);
}
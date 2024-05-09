#include <iostream>

using namespace std;

int solution(int n){
    int ans = 0;
    
    // dp 초기 설정
    int dp[100001] = {0, -1, 1, -1, 2, 1};
    
    // n이 5보다 큰 경우, 직접 계산
    if(n > 5){
        for(int i = 6; i<=n; i++){
            
            // 현재 n보다 더 작은 값에 대한 결과값을 이용해 현재 내야 할 동전 개수 계산.
            /* 예를 들어 n = 9 라면 n=7 까지의 동전 개수는 계산이 완료된 상태이므로,
                n=7 의 동전(5원 1개, 2원 1개 -> 2개) 에
                남은 n=2(2원 1개)를 를 추가적으로 더해주면 됨. 
            */
            dp[i] = dp[i-2] + dp[i-(i-2)];
            
            // 만약 5원짜리 동전만을 이용해 계산하는 것이 적합한 경우
            if(i%5 ==0){
                int cal= i / 5;
                if(cal < dp[i]) dp[i] = cal;
            }
            
            // 만약 2원짜리 동전만을 이용해 계산하는 것이 적합한 경우
            if(i%2 ==0){
                int cal = i / 2;
                if(cal < dp[i]) dp[i] = cal;
            }
        }
    }
    
    ans = dp[n];
    return ans;
}

int main()
{
    int n;
    cin >> n;
    int ans = solution(n);
    cout << ans;

    return 0;
}

#include <iostream>
using namespace std;

int solution(int k, int n){
    
    // dp 배열 초기화
    // 이때 편의를 위해 0호부터 시작.(실제로는 1호부터 존재)
    int dp[n+1];
    for(int i=0; i<n+1; i++){
        dp[i] = i;
    }
    
    int sol;
    for(int j = 0; j<k; j++){
        for(int i=1; i<n+1 ; i++){
         dp[i] = dp[i]+ dp[i-1];
         sol = dp[i];
        }
        
    }
    
    return sol;
}

int main()
{
    int T;
    cin >> T;
    int sol[T];
    
    // 입력
    for(int i=0; i<T; i++){
        int k, n;
        cin >> k >> n;
        sol[i] = solution(k, n);
    }
    
    // 출력
    for(int i=0; i< T; i++){
        cout << sol[i] << "\n";
    }

    return 0;
}

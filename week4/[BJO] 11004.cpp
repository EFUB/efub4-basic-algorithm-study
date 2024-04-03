#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    vector<long> longVec;
    
    // 입력받기
    long N,K;
    cin >> N >> K;
    
    // N 개의 숫자 입력받기
    for(long i=0; i<N; i++){
        long num;
        
        // cin 좀 더 빠르게 처리
        ios_base::sync_with_stdio(false); cin.tie(NULL);
        cin >> num;
        
        // 벡터에 숫자 삽입
        longVec.push_back(num);
    }
    
    // 오름차순 정렬 : 퀵정렬 이용
    sort(longVec.begin(), longVec.end());
    
    // cout 좀 더 빠르게 처리
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    
    // K 번째 수 출력
    cout << longVec[K-1];

    return 0;
}

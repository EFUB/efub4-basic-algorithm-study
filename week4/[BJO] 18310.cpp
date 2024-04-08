#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    // 집의 위치를 저장할 벡터
    vector<int> locVec;
    
    // 집의 위치 입력
    int N;
    cin >> N;
    for(int i=0; i<N; i++){
        int loc;
        
        ios_base::sync_with_stdio(false); cin.tie(NULL);
        cin >> loc;
        locVec.push_back(loc);
    }
    
    // 입력받은 집의 위치를 오름차순 정렬
    sort(locVec.begin(), locVec.end());
    
    // 안테나의 위치는 집 위치의 중간값 : 짝수일 경우 1 감소시키기
    int antenaLoc = N % 2 == 0 ? N / 2 - 1 : N / 2;
    
    // 안테나의 위치 출력
    cout << locVec[antenaLoc];

    return 0;
}

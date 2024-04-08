#include <iostream>
#include<algorithm>
#include<vector>

using namespace std;

int main()
{
    // 입력받을 벡터 선언
    vector<int> numVec;
    
    // 숫자 입력
    for(int i= 0; i<3; i++){
        int number;
        cin >> number;
        numVec.push_back(number);
    }
    
    // 오름차순 정렬
    sort(numVec.begin(), numVec.end());
    
    // 가운데 수 출력(=3개의 숫자 중 2번째로 큰 수)
    cout << numVec[1];
    
    return 0;
}

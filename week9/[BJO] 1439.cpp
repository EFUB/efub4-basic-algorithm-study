#include <iostream>
#include <vector>
using namespace std;

vector<char> S;
int solution(){
    int zero = 0, one = 0;
    char visited_num;
    
    for(int i=0; i<S.size(); i++){
        
        // 시작하는 값
        if(i==0){
            visited_num = S[i];
            if(visited_num=='0') zero++;
            else if(visited_num=='1') one++;
        }
        
        // 지난 값과다른 숫자가 등장했다면, 구간이 바뀐 것.
        if(visited_num != S[i]){
            visited_num = S[i];
            if(S[i]=='0') zero++;
            else if(S[i]=='1') one++;
        }
    }
    
    // 더 적은 구간의 수 반환
    if(one>=zero) return zero;
    else return one;
    
}
int main()
{
    // 입력받기
    char str='0';
    
    // 엔터 입력받을 때까지 문자열 입력받기.
    while(1){
        cin.get(str);
        if (str == '\n') break;
        S.push_back(str);
    }
    
    // 결과 출력
    cout << solution();
    return 0;
}

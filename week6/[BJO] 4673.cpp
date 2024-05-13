#include <iostream>

using namespace std;

void solution(){
    
    // 셀프 넘버 배열
    int self_num[10001];
    
    // 배열 초기화
    for(int i=1; i<=10000; i++){
        self_num[i] = i;
    }
    
    for(int i=1; i<=10000; i++){
        
        // 1~10000 까지의 수를 통해 d(n) 생성
        int d = i;
        int result = d;
        while(d > 0){
            result += d % 10;
            d /= 10;
        }
        
        // 만들어진 수는 셀프 넘버 배열에서 제외시킴 : -1로 표시함.
        // 이때 만들어진 수가 10000 이하인 경우에 한함.
        if(result <= 10000) self_num[result] = -1;
    }
    
    // 셀프 넘버 출력
    for(int i = 1; i<= 10000; i++ ){
        if(self_num[i] != -1) cout << self_num[i] << "\n";
    }
    
    
}

int main()
{
    solution();
    
    return 0;
}

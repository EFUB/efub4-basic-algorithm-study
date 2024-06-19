#include <iostream>
using namespace std;

void solution(int money, int pay[][4], int i){
    //쿼터(Quarter, $0.25),다임(Dime, $0.10), 니켈(Nickel, $0.05), 페니(Penny, $0.01)
    int q=0, d=0, n=0, p=0;
    
    // 쿼터 계산
    q = money/25;
    pay[i][0]=q;
    money%=25;
    
    // 다임 계산
    d = money/10;
    pay[i][1]=d;
    money%=10;
    
    // 니켈 계산
    n = money/5;
    pay[i][2]=n;
    money%=5;
    
    // 페니 계산
    p = money/1;
    pay[i][3]=p;

    return;
}
int main()
{
    // 입력
    int T;
    cin>>T;
    int pay[T][4];
    for(int i=0; i<T; i++){
        int money;
        cin >> money;
        solution(money, pay, i);
    }
 
    // 출력
    for(int i=0; i<T; i++){
        cout << pay[i][0]<<" "<<pay[i][1]<<" "<<pay[i][2]<< " "<<pay[i][3]<<"\n";
    }
    return 0;
}

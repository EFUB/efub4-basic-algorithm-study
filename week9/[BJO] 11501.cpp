#include <iostream>
using namespace std;

long long solution(){
    // 이익의 초기값은 0
    long long profit =0;
    
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    //입력
    int N;
    cin >>N;
    long long stock[N];
    for(int i=0;i<N;i++){
        ios_base::sync_with_stdio(false); cin.tie(NULL);
        cin>>stock[i];
    }
    
    long long max_stock = stock[N-1];
    for(int i=N-1;i>=0;i--){
        if(stock[i]>=max_stock) max_stock = stock[i];
        else{
            profit+= (max_stock-stock[i]);
        }
    }
    return profit;
}

int main()
{
   int T;
   ios_base::sync_with_stdio(false); cin.tie(NULL);
   // 입력
   cin >> T;
   long long aws[T];
   for(int i=0;i<T;i++){
       aws[i]=solution();
   }
   
   // 출력
   for(int i=0;i<T;i++){
       cout << aws[i] << "\n";
   }
    return 0;
}

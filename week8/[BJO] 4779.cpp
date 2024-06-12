#include <iostream>
#include <cmath>
using namespace std;

void solution(int n){
    int size = pow(3, n - 1);
    if(n ==0) {
        cout << "-";
        return;
    }
    
    solution(n-1);
    
    for(int i=0; i< size; i++){
        cout << " ";
    }
    solution(n-1);
}


int main()
{
    int N;
    while(cin >> N){
        
        solution(N);
        cout << "\n";
    }
    
    return 0;
}

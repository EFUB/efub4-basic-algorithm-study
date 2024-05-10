#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n;
    // n 입력
    cin >> n;
    
    // n 개의 수 입력
    int arr[n];
    for(int i=0; i<n; i++){
        cin >> arr[i];
    }
    
    // 오름차순 정렬
    sort(arr, arr+n);
    
    // 출력
    for(int i=0; i<n; i++){
        cout << arr[i] << "\n";
    }
    

    return 0;
}

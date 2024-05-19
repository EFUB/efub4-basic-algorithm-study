#include <iostream>
#include <algorithm>

using namespace std;
void solution(int arr[], int M, int N){
    // 만들 수 있는 M과 가장 가까운 수 , 초기값 0
    int max = 0;
    
    // 배열 정렬
    sort(arr, arr+N);
    
    for(int i=0; i<N-2; i++){
        int num1 = arr[i];
        for(int j = i+1; j<N-1; j++){
            int num2 = arr[j];
            for(int k = j+1; k<N; k++){
                int num3 = arr[k];
                int sum = num1 + num2 + num3;
                int gap = M - max;
                int new_gap = M - sum;
                if(new_gap >= 0 && new_gap < gap){
                    max = sum;
                }
            }
        }
    }
    cout << max;
}

int main()
{
    int N,M;
    
    // 입력받기
    cin >> N >> M;
    int arr[N];
    for(int i = 0; i<N ; i++){
        cin >> arr[i];
    }
    solution(arr, M, N);
    return 0;
}

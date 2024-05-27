#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// k명이 N개를 정렬함
//  N/2 N/4 N/16 .. -> 한명이 N/k 개의 수를 정렬함

vector<int> getSolution(vector<int> arr, int k, int N)
{
    for (int i = 0; i < N; i = i + N / k)
    {
        sort(arr.begin() + i, arr.begin() + i + N / k);
    }

    return arr;
}
int main()
{
    int N, k;

    cin >> N;

    vector<int> arr(N, 0);

    for (int i = 0; i < N; i++)
    {
        cin >> arr[i];
    }

    cin >> k;

    arr = getSolution(arr, k, N);

    for (int i = 0; i < N; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}

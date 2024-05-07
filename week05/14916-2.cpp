#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

// DP 풀이
// n-2 또는 n-5일때 동전개수를 구해서 더 작은것 + 1으로 설정.

int getCount(vector<int> arr, int n)
{
    arr[1] = -1;
    arr[2] = 1;
    arr[3] = -1;
    arr[4] = 2;
    arr[5] = 1;
    arr[6] = 3;
    arr[7] = 2;
    arr[8] = 4;

    for (int i = 9; i <= n; i++)
    {
        arr[i] = min(arr[i - 2], arr[i - 5]) + 1;
    }

    return arr[n];
}

int main()
{
    int n;
    cin >> n;
    vector<int> arr(n + 1, 0);
    cout << getCount(arr, n);
}

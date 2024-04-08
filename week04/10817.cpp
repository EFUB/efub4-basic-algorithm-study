#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    vector<int> arr(3, 0);

    cin >> arr[0] >> arr[1] >> arr[2];

    sort(arr.begin(), arr.end());

    cout << arr[1];
}
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// sort 사용
//  int main()
//  {
//      int n;

//     cin >> n;
//     vector<int> arr(n);
//     for (int i = 0; i < n; i++)
//     {
//         cin >> arr[i];
//     }

//     sort(arr.begin(), arr.end());

//     for (int i = 0; i < n; i++)
//     {
//         cout << arr[i] << endl;
//     }
//     return 0;
// }

// 직접구현
vector<int> sortArr(vector<int> arr)
{
    for (int j = 0; j < arr.size(); j++)
    {
        for (int i = 1; i < arr.size() - j; i++)
        {
            if (arr[i - 1] > arr[i])
            {
                int temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
}

int main()
{
    int n;

    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    arr = sortArr(arr);

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << endl;
    }

    return 0;
}
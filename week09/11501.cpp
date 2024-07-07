#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

long long getProfit(vector<int> arr)
{
    long long result = 0;
    int max = 0;

    for (int i = arr.size() - 1; i >= 0; i--)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
        else
        {
            result += max - arr[i];
        }
    }

    return result;
}

int main()
{
    int T;

    cin >> T;
    for (int i = 0; i < T; i++)
    {

        int N;
        cin >> N;
        vector<int> arr(N, 0);
        for (int j = 0; j < N; j++)
        {
            cin >> arr[j];
        }

        cout << getProfit(arr) << endl;
    }

    return 0;
}
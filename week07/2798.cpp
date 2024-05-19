#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int getSolution(int M, vector<int> arr)
{
    int sum = 0;
    int max = 0;

    for (int i = 0; i < arr.size() - 2; i++)
    {
        for (int j = i + 1; j < arr.size() - 1; j++)
        {
            for (int k = j + 1; k < arr.size(); k++)
            {
                sum = arr[i] + arr[j] + arr[k];

                if (max < sum && sum <= M)
                {
                    max = sum;
                }
            }
        }
    }
    return max;
}

int main()
{
    int N, M;
    cin >> N >> M;

    vector<int> arr(N, 0);

    for (int i = 0; i < N; i++)
    {
        cin >> arr[i];
    }

    cout << getSolution(M, arr);

    return 0;
}
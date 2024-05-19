#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<string> W = {
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
};

vector<string> B = {
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
};

int getCount(vector<string> target, vector<string> arr, int a, int b)
{
    int count = 0;
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            if (target[i][j] != arr[a + i][b + j])
            {
                count++;
            }
        }
    }

    return count;
}

int getSolution(vector<string> arr, int N, int M)
{

    int min = 64;
    for (int i = 0; i + 8 <= N; i++)
    {
        for (int j = 0; j + 8 <= M; j++)
        {
            // W와 비교
            int result = std::min(getCount(W, arr, i, j), getCount(B, arr, i, j));
            if (min > result)
            {
                min = result;
            }
        }
    }

    return min;
}

int main()
{
    int N, M;
    cin >> N >> M;

    vector<string> arr(N, "");
    for (int i = 0; i < N; i++)
    {
        cin >> arr[i];
    }

    cout << getSolution(arr, N, M);
}
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int getSolution(vector<vector<int>> arr, int N)
{

    if (N == 1)
    {
        return arr[0][0];
    }
    else
    {
        // 배열 4개로 나누기
        vector<vector<int>> arr1(N / 2, vector<int>(N / 2, 100));
        vector<vector<int>> arr2(N / 2, vector<int>(N / 2, 100));
        vector<vector<int>> arr3(N / 2, vector<int>(N / 2, 100));
        vector<vector<int>> arr4(N / 2, vector<int>(N / 2, 100));

        for (int i = 0; i < N; i++)
        {
            for (int j = 0; j < N; j++)
            {
                if (j < N / 2 && i < N / 2)
                {
                    arr1[i][j] = arr[i][j];
                }
                else if (j >= N / 2 && i < N / 2)
                {
                    arr2[i][j - N / 2] = arr[i][j];
                }
                else if (j < N / 2 && i >= N / 2)
                {
                    arr3[i - N / 2][j] = arr[i][j];
                }
                else if (j >= N / 2 && i >= N / 2)
                {
                    arr4[i - N / 2][j - N / 2] = arr[i][j];
                }
            }
        }

        vector<int> result;
        result.push_back(getSolution(arr1, N / 2));
        result.push_back(getSolution(arr2, N / 2));
        result.push_back(getSolution(arr3, N / 2));
        result.push_back(getSolution(arr4, N / 2));

        sort(result.begin(), result.end());

        return result[1];
    }
}

int main()
{
    // 2^m X 2^m 영역을 네개로 나누기를 반복, 영역 안에 4개가 남으면 두번째로 작은것을 반환
    int N;
    cin >> N;

    vector<vector<int>> arr(N, vector<int>(N, 0));

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            cin >> arr[i][j];
        }
    }

    cout << getSolution(arr, N);
    return 0;
}
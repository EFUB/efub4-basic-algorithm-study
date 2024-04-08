#include <iostream>
#include <vector>

using namespace std;

void getSolution(vector<vector<int>> arr)
{
    int max = 0;
    int max_i = 0, max_j = 0;

    for (int i = 0; i < 9; i++)
    {
        for (int j = 0; j < 9; j++)
            if (max < arr[i][j])
            {
                max = arr[i][j];
                max_i = i;
                max_j = j;
            }
    }

    cout << max << "\n";
    cout << max_i + 1 << " " << max_j + 1;
}

int main()
{
    vector<vector<int>> arr(9, vector<int>(9, 0));
    for (int i = 0; i < 9; i++)
    {
        for (int j = 0; j < 9; j++)
            cin >> arr[i][j];
    }

    getSolution(arr);
}
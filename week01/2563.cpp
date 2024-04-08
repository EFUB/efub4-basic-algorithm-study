#include <iostream>
#include <vector>

using namespace std;

void getSolution(int n, vector<vector<int>> position)
{
    // 도화지를 100x100 배열로 정의
    vector<vector<int>> paper(100, vector<int>(100, 0));

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            for (int k = 0; k < 10; k++)
            {
                paper[position[i][0] + j][position[i][1] + k] = 1;
            }
        }
    }

    // 넓이 계산
    int sum = 0;
    for (int i = 0; i < 100; i++)
    {
        for (int j = 0; j < 100; j++)
        {
            sum += paper[i][j];
        }
    }

    cout << sum;
}

int main()
{
    int n = 0;
    vector<vector<int>> position;

    cin >> n;
    position.assign(n, vector<int>(2, 0));
    for (int i = 0; i < n; i++)
    {
        cin >> position[i][0] >> position[i][1];
    }

    getSolution(n, position);
}
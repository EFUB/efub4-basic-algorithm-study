#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> vec(50, vector<int>(50, 0));

void dfs(int i, int j)
{
    vec[i][j] = 0;

    for (int a = -1; a <= 1; a += 2)
    {
        if (i + a >= 0 && i + a < 50)
            if (vec[i + a][j] == 1)
            {
                dfs(i + a, j);
            }

        if (vec[i][j + a] == 1)
        {
            dfs(i, j + a);
        }
    }
}

int getSolution(int M, int N)
{
    int answer = 0;
    for (int i = 0; i < M; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (vec[i][j] == 1)
            {
                dfs(i, j);
                answer++;
            }
        }
    }

    return answer;
}

int main()
{
    int T;
    cin >> T;

    for (int i = 0; i < T; i++)
    {
        int M, N, K;
        cin >> M >> N >> K;

        for (int j = 0; j < K; j++)
        {
            int x, y;
            cin >> x >> y;
            vec[x][y] = 1;
        }

        cout << getSolution(M, N) << endl;
    }
}
#include <iostream>
#include <vector>

using namespace std;

vector<bool> visit(100, 0);
vector<vector<int>> edges(101, vector<int>(101, 0));

void dfs(int N, int x)
{
    ::visit[x] = true;
    for (int i = 1; i <= N; i++)
    {
        if (edges[x][i] == 1 && ::visit[i] == false)
        {
            dfs(N, i);
        }
    }
}

int getSolution(int N)
{
    int cnt = 0;

    dfs(N, 1);

    for (int i = 1; i <= N; i++)
    {
        if (::visit[i] == true)
        {
            cnt++;
        }
    }

    return cnt - 1;
}

int main()
{
    int N, E;
    cin >> N >> E;

    for (int i = 0; i < E; i++)
    {
        int a, b;
        cin >> a >> b;

        edges[a][b] = 1;
        edges[b][a] = 1;
    }

    cout << getSolution(N);

    return 0;
}
#include <string>
#include <vector>

using namespace std;

vector<bool> visit(200, false);

void dfs(int n, vector<vector<int>> computers, int x)
{
    visit[x] = true;
    for (int i = 0; i < n; i++)
    {
        if (computers[x][i] == 1)
        {
            if (visit[i] == false)
            {
                dfs(n, computers, i);
            }
        }
    }
}

int solution(int n, vector<vector<int>> computers)
{
    int answer = 0;
    // dfs 수행 -> visit==false인 노드에서 dfs수행 -> 반복

    for (int i = 0; i < n; i++)
    {
        if (visit[i] == false)
        {
            dfs(n, computers, i);
            answer++;
        }
    }
    return answer;
}
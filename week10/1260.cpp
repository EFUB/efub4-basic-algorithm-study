#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

vector<vector<int>> edges(1001); // 간선을 저장할 벡터. 노드는 1000개
vector<int> result_dfs;
vector<int> result_bfs;
vector<bool> visit(1001, false);

void dfs(int x)
{
    visit[x] = true;
    result_dfs.push_back(x);
    for (int i = 0; i < edges[x].size(); i++)
    {
        if (visit[edges[x][i]] != true)
            dfs(edges[x][i]);
    }
}

void bfs(int x)
{
    // 큐 사용
    queue<int> q;

    q.push(x);
    visit[x] = true;

    while (!q.empty())
    {
        int cur = q.front();
        result_bfs.push_back(cur);
        q.pop();

        for (int i = 0; i < edges[cur].size(); i++)
        {
            // 방문 여부 확인
            if (visit[edges[cur][i]] != true)
            {
                q.push(edges[cur][i]);
                visit[edges[cur][i]] = true;
            }
        }
    }
}

int main()
{

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int N, M, V, a, b;
    cin >> N >> M >> V;

    for (int i = 0; i < M; i++)
    {
        cin >> a >> b;
        edges[a].push_back(b);
        edges[b].push_back(a);
    }

    // 낮은 번호부터 탐색하도록 정렬
    for (int i = 1; i < N + 1; i++)
    {
        sort(edges[i].begin(), edges[i].end());
    }

    dfs(V);

    // visit 초기화
    for (int i = 0; i < 1001; i++)
    {
        visit[i] = false;
    }

    bfs(V);

    // 출력
    for (int i = 0; i < result_dfs.size(); i++)
    {
        cout << result_dfs[i] << " ";
    }

    cout << endl;

    // 출력
    for (int i = 0; i < result_bfs.size(); i++)
    {
        cout << result_bfs[i] << " ";
    }

    return 0;
}
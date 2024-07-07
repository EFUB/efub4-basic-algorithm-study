#include <iostream>
#include <vector>
#include <string>
using namespace std;

int h = 0, v = 0;

int getSolution(int N, int M, vector<string> vec)
{

    // 가로타일 개수
    for (int i = 0; i < N; i++)
    {
        if (vec[i][0] == '-')
        {
            h++;
        }

        for (int j = 1; j < M; j++)
        {
            if (vec[i][j] == '-')
            {
                // 이전 타일과 같으면 카운트 증가 X
                if (vec[i][j - 1] != '-')
                {
                    h++;
                }
            }
        }
    }

    // 세로 타일 개수

    for (int i = 0; i < M; i++)
    {
        if (vec[0][i] == '|')
        {
            v++;
        }

        for (int j = 1; j < N; j++)
        {
            if (vec[j][i] == '|')
            {
                // 이전 타일과 같으면 카운트 증가 X
                if (vec[j - 1][i] != '|')
                {
                    v++;
                }
            }
        }
    }

    return h + v;
}

int main()
{
    int N, M;
    cin >> N >> M;

    vector<string> vec(N);
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            char c;
            cin >> c;
            vec[i].push_back(c);
        }
    }
    cout << getSolution(N, M, vec);

    return 0;
}
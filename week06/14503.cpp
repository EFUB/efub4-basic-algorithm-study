#include <iostream>
#include <vector>

using namespace std;

int getSolution(int r, int c, int d, vector<vector<int>> arr)
{
    // 벽은 1, 청소를 안한 빈칸은 0, 청소를 한 빈칸은 2로 변경
    int count = 0;

    // 청소한뒤 주변 4칸이 모두 1이거나 2이면 뒤로 1칸 후진, 1이라 후진 불가하면 종료/후진 가능하면 반복
    // 청소한뒤 주변 4칸 중 0이 있으면 반시계90도회전&전진 / 0이 아니면 회전&전진 반복

    // 주변 4칸은 arr[r-1][c] arr[r][c-1] arr[r][c+1] arr[r+1][c]로 표현됨
    // 반시계 90도 회전은 d = (d +3) % 4
    // 후진과 전진은 d를 고려함. d=0,1,2,3 일때 전진 -> r-1, c+1, r+1, c-1 / 후진-> r+1, c-1, r-1, c+1

    while (1)
    {
        if (arr[r][c] == 0)
        {
            arr[r][c] = 2;
            count++;
        }

        if (arr[r - 1][c] && arr[r][c - 1] && arr[r][c + 1] && arr[r + 1][c] != 0)
        {
            if (d == 0)
            {
                if (arr[r + 1][c] == 1)
                    return count;
                r = r + 1;
            }
            else if (d == 1)
            {
                if (arr[r][c - 1] == 1)
                    return count;
                c = c - 1;
            }
            else if (d == 2)
            {
                if (arr[r - 1][c] == 1)
                    return count;
                r = r - 1;
            }
            else if (d == 3)
            {
                if (arr[r][c + 1] == 1)
                    return count;
                c = c + 1;
            }
        }
        else
        {
            d = (d + 3) % 4;
            if (d == 0)
            {
                if (arr[r - 1][c] == 0)
                    r = r - 1;
            }
            else if (d == 1)
            {
                if (arr[r][c + 1] == 0)
                    c = c + 1;
            }
            else if (d == 2)
            {
                if (arr[r + 1][c] == 0)
                    r = r + 1;
            }
            else if (d == 3)
            {
                if (arr[r][c - 1] == 0)
                    c = c - 1;
            }
        }
    }
}
int main()
{
    int N, M, r, c, d;
    cin >> N >> M;
    cin >> r >> c >> d;

    vector<vector<int>> arr(N, vector<int>(M, -1));
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            cin >> arr[i][j];
        }
    }

    cout << getSolution(r, c, d, arr);
    return 0;
}

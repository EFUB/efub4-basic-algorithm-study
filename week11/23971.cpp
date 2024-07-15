#include <iostream>

using namespace std;

int getSolution(int N, int M, int W, int H)
{
    int answer = 0;
    for (int i = 0; i < W; i = i + M + 1)
    {
        for (int j = 0; j < H; j = j + N + 1)
        {
            answer++;
        }
    }

    return answer;
}

int main()
{
    int H, W, N, M;
    cin >> H >> W >> N >> M;

    cout << getSolution(N, M, W, H);
}
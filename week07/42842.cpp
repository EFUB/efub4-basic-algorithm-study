#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(int brown, int yellow)
{
    vector<int> answer;
    // 카펫이 M*N이면 노란색은 M-1 * N-1

    for (int i = 0; i < yellow; i++)
    {
        if (yellow % i == 0)
        {
            int n = i + 1;
            int m = yellow % i + 1;
            if (n * m - yellow == brown)
            {
                answer.push_back(max(n, m));
                answer.push_back(min(n, m));
            }
        }
    }

    return answer;
}
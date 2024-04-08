#include <iostream>
#include <vector>
#include <utility>

using namespace std;
pair<int, int> getSolution(vector<pair<int, int>> point)
{
    int x1 = point[0].first, x2 = 0, y1 = point[0].second, y2 = 0;
    bool isX1Two = false, isY1Two = false;

    for (int i = 1; i < 3; i++)
    {
        if (x1 == point[i].first)
        {
            isX1Two = true;
            // x1 값이 두개 이므로 출력하고자 하는 값은 x2
        }
        else
        {
            x2 = point[i].first;
        }

        if (y1 == point[i].second)
        {
            isY1Two = true;
        }
        else
        {
            y2 = point[i].second;
        }
    }

    return make_pair(isX1Two ? x2 : x1, isY1Two ? y2 : y1);
}

int main()
{
    int a, b;
    vector<pair<int, int>> point(3, make_pair(0, 0));
    pair<int, int> res;

    for (int i = 0; i < 3; i++)
    {
        cin >> a >> b;
        point[i] = make_pair(a, b);
    }

    res = getSolution(point);
    cout << res.first << " " << res.second;
}
#include <iostream>
#include <vector>

using namespace std;

int getFloorCount(int k, int n)
{
    int count = 0;

    if (k == 0)
    {
        return n;
    }

    for (int i = 1; i <= n; i++)
    {
        count += getFloorCount(k - 1, i);
    }

    return count;
}

int main()
{

    int T, k, n;
    cin >> T;

    vector<vector<int>> arr;

    for (int i = 0; i < T; i++)
    {
        cin >> k;
        cin >> n;
        cout << getFloorCount(k, n) << endl;
    }
}
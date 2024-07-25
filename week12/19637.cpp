#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

string getSolution(int power, vector<pair<string, int>> &tags)
{
    int low = 0;
    int high = tags.size() - 1;

    while (low <= high)
    {
        int mid = (low + high) / 2;

        if (power <= tags[mid].second)
            if (mid >= 1 && power > tags[mid - 1].second)
            {
                return tags[mid].first;
            }
            else if (mid == 0)
            {
                return tags[mid].first;
            }

        if (power < tags[mid].second)
        {
            high = mid - 1;
        }
        else if (power > tags[mid].second)
        {
            low = mid + 1;
        }
    }

    return "null";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int N, M;
    cin >> N >> M;

    vector<pair<string, int>> tags;

    int recent = -1;

    for (int i = 0; i < N; i++)
    {
        pair<string, int> p;
        cin >> p.first >> p.second;
        if (recent != p.second)
        {
            tags.push_back(p);
            recent = p.second;
        }
    }

    for (int i = 0; i < M; i++)
    {
        int power;
        cin >> power;
        cout << getSolution(power, tags) << "\n";
    }
}
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int binarySearch(vector<int> &pool, int target)
{
    // 포인터를 사용하지 않고 배열 복사를 하면 시간초과
    int low = 0;
    int high = pool.size() - 1;

    while (low <= high)
    {
        int mid = (low + high) / 2;

        if (pool[mid] == target)
        {
            return 1;
        }
        else if (pool[mid] < target)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    return 0;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int N, M;

    cin >> N;
    vector<int> pool(N, 0);

    for (int i = 0; i < N; i++)
    {
        cin >> pool[i];
    }

    sort(pool.begin(), pool.end());

    cin >> M;

    for (int i = 0; i < M; i++)
    {
        int target;
        cin >> target;

        // endl로 출력하면 시간초과
        cout << binarySearch(pool, target) << "\n";
    }
}

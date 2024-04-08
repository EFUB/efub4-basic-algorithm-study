#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int getSolution(int n, vector<int> arr)
{
    // 집이 홀수개면 가운데 위치
    // 집이 짝수개면 가운데 값 두개중 평균과 가까운곳을 리턴

    if (arr.size() % 2 == 1)
    {
        return arr[n / 2];
    }
    else
    {
        double avg = 0;
        for (int i = 0; i < n; i++)
        {
            avg += arr[i];
        }

        avg = (double)avg / n;

        if (arr[n / 2 - 1] - avg <= arr[n / 2] - avg)
        {
            return arr[n / 2 - 1];
        }
        else
        {
            return arr[n / 2];
        }
    }
}
int main()
{
    int n;
    cin >> n;
    vector<int> arr(n, 0);
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    sort(arr.begin(), arr.end());

    cout << getSolution(n, arr);
}
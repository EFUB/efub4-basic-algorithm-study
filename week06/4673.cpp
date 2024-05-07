#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int getNextConstructor(int n)
{
    int initial = n;
    int answer = 0;
    while (n != 0)
    {
        answer = answer + n % 10;
        n = n / 10;
    }
    return answer + initial;
}

int main()
{
    // 1부터 수열을 시작해서 셀프넘버가 아닌 값 표시 10000넘으면 10000번 * 10000번
    // 시작점 보다 큰 값 중 셀프넘버로 표시 안된 값 부터 시작
    // 수열을 시작하는 숫자는 표시 X
    // 1 2 4 8 16
    // 3 6 ...
    //
    vector<int> arr(10001, -1);
    int start_point = 1;
    arr[0] = 1;

    while (start_point != 10001)
    {
        // 수열 계산
        int constructor = start_point;

        while (constructor <= 10000)
        {
            constructor = getNextConstructor(constructor);
            if (constructor <= 10000 && arr[constructor] != -1)
            {
                break;
            }

            if (constructor <= 10000)
            {
                arr[constructor] = 1;
            }
        }

        // start_point 업데이트
        start_point = find(arr.begin() + start_point + 1, arr.end(), -1) - arr.begin();
    }

    for (int i = 1; i < 10001; i++)
    {
        if (arr[i] == -1)
        {
            cout << i << endl;
        }
    }

    return 0;
}
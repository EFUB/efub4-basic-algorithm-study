#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

string getSolution(vector<int> arr)
{
    sort(arr.begin(), arr.end());

    if (arr[2] >= arr[0] + arr[1])
        return "Invalid";

    if (arr[0] == arr[1] && arr[1] == arr[2])
        return "Equilateral";

    if (arr[0] == arr[1] || arr[1] == arr[2])
        return "Isosceles";

    return "Scalene";
}

int main()
{
    double a, b, c;
    vector<int> arr(3, 0);

    while (1)
    {
        cin >> arr[0] >> arr[1] >> arr[2];
        if (arr[0] == 0 && arr[1] == 0 && arr[2] == 0)
        {
            return 0;
        }
        cout << getSolution(arr) << "\n";
    }
}

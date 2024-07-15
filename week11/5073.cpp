#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

string getSolution(vector<int> vec)
{
    if (vec[2] >= vec[0] + vec[1])
    {
        return "Invalid";
    }
    else
    {
        if (vec[0] == vec[1] || vec[0] == vec[2] || vec[1] == vec[2])
        {
            if (vec[0] == vec[1] && vec[1] == vec[2])
            {
                return "Equilateral";
            }
            else
            {
                return "Isosceles";
            }
        }
        else
        {
            return "Scalene";
        }
    }
}

int main()
{
    int a, b, c;

    while (1)
    {
        cin >> a >> b >> c;
        if (a == 0 && b == 0 && c == 0)
        {
            return 0;
        }
        else
        {
            vector<int> vec({a, b, c});

            sort(vec.begin(), vec.end());
            cout << getSolution(vec) << endl;
        }
    }
}
#include <iostream>

using namespace std;

int getSolution(int n, int k)
{
    int cnt = 0;
    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            cnt++;
            if (cnt == k)
            {
                return i;
            }
        }
    }
    return 0;
}

int main()
{
    int n, k;
    cin >> n >> k;

    cout << getSolution(n, k);
}
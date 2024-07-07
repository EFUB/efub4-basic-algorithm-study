#include <iostream>
using namespace std;

void getSolution(int C)
{
    int rest = C;
    int q = 0, d = 0, n = 0, p = 0;

    q = rest / 25;
    rest = rest % 25;

    d = rest / 10;
    rest = rest % 10;

    n = rest / 5;
    rest = rest % 5;

    p = rest;

    cout << q << " " << d << " " << n << " " << p << endl;
}

int main()
{
    int C, T;
    cin >> T;

    for (int i = 0; i < T; i++)
    {
        cin >> C;
        getSolution(C);
    }

    return 0;
}
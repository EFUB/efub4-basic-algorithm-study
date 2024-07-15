#include <iostream>

using namespace std;

int getSolution(int x)
{
    x--;
    for (int i = 1; 1; i++)
    {
        x -= 6 * (i - 1);
        if (x <= 0)
            return i;
    }
}
int main()
{
    int N;
    cin >> N;

    cout << getSolution(N);

    return 0;
}
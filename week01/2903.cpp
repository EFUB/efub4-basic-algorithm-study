#include <iostream>
#include <cmath>

using namespace std;

void getSolution(int n)
{
    int dots = 0;

    for (int i = 0; i < n; i++)
    {
        // 세로줄 하나에 점개수 2 -> 3 -> 5 -> 9 -> 17 : + 2의 거듭제곱
        // 세로줄의 개수는 2 -> 3 -> 5 : + 2의 거듭제곱
        dots = (1 + std::pow(2, n)) * (1 + std::pow(2, n));
    }

    cout << dots;
}
int main()
{
    int n = 0;

    cin >> n;

    getSolution(n);
}
#include <iostream>
#include <cmath>

using namespace std;

// 이전 결과 두개를 합침. 사이에 3^(n-1)의 공백을 둠
void cantor(int n)
{
    if (n == 0)
    {
        cout << '-';
        return;
    }

    cantor(n - 1);
    for (int i = 0; i < pow(3, n - 1); i++)
    {
        cout << " ";
    }

    cantor(n - 1);
}

int main()
{
    int n;
    while (cin >> n)
    {

        cantor(n);
        cout << endl;
    }
}
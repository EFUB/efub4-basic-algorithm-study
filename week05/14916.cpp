#include <iostream>

using namespace std;

int getSolution(int n)
{
    // 5원짜리 동전을 최대한 많이 쓰고 남은 돈이 짝수면 2로 나눔
    // 5를 최대한 많이 썼을때 남은 돈이 홀수면 5 동전 개수를 하나 줄이고 다시 계산. 남은돈이 짝수가 되어 2원짜리 동전으로 나눠줄수 있을때 까지 계산. 없으면 -1 반환
    if (n == 1 || n == 3)
        return -1;

    if (n % 5 == 0)
    {
        return n / 5;
    }
    else if (n % 5 == 1)
    {
        return (n / 5) - 1 + 3;
    }
    else if (n % 5 == 2)
    {
        return (n / 5) + 1;
    }
    else if (n % 5 == 3)
    {
        return (n / 5) - 1 + 4;
    }
    else if (n % 5 == 4)
    {
        return (n / 5) + 2;
    }

    return -1;
}

int main()
{
    int n;
    cin >> n;
    cout << getSolution(n);

    return 0;
}

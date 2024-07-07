#include <iostream>
using namespace std;

int getSolution(string S)
{
    int count = 0;
    for (int i = 1; i < S.length(); i++)
    {
        if (S[i - 1] != S[i])
        {
            count++;
        }
    }

    if (count % 2 == 0)
    {
        return count / 2;
    }
    else
    {
        return count / 2 + 1;
    }
}

// 숫자가 달라지는 지점
int main()
{
    string S;
    cin >> S;

    cout << getSolution(S);

    return 0;
}
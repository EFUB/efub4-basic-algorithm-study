#include <iostream>
#include <deque>
using namespace std;

void getSolution(int n, deque<int> dq)
{
    for (int i = n; i > 0; i--)
    {
        dq.push_front(i);

        for (int j = 0; j < i; j++)
        {
            int back = dq.back();
            dq.pop_back();
            dq.push_front(back);
        }
    }

    while (n--)
    {
        cout << dq.front() << " ";
        dq.pop_front();
    }
}

int main()
{
    int n;
    cin >> n;
    deque<int> dq;

    getSolution(n, dq);
}
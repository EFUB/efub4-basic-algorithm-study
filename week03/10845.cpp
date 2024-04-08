#include <iostream>
#include <queue>
using namespace std;

queue<int> q;

void getSolution(string cmd, int num = 0)
{
    if (cmd == "push")
    {
        q.push(num);
    }
    else if (cmd == "pop")
    {
        if (q.size())
        {
            cout << q.front() << "\n";
            q.pop();
        }
        else
        {
            cout << -1 << "\n";
        }
    }
    else if (cmd == "size")
    {
        cout << q.size() << "\n";
    }
    else if (cmd == "empty")
    {
        cout << q.empty() << "\n";
    }
    else if (cmd == "front")
    {
        if (q.size())
        {
            cout << q.front() << "\n";
        }
        else
        {
            cout << -1 << "\n";
        }
    }
    else if (cmd == "back")
    {
        if (q.size())
        {
            cout << q.back() << "\n";
        }
        else
        {
            cout << -1 << "\n";
        }
    }
}
int main()
{
    int n;
    cin >> n;

    while (n--)
    {
        string cmd;
        int num;

        cin >> cmd;
        if (cmd == "push")
        {
            cin >> num;
        }

        getSolution(cmd, num);
    }
}
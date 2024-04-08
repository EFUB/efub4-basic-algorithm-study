#include <iostream>
#include <stack>

using namespace std;

stack<int> st;

void getSolution(string cmd, int num = 0)
{
    if (cmd == "push")
    {
        st.push(num);
    }
    else if (cmd == "pop")
    {
        if (st.size())
        {
            cout << st.top() << "\n";
            st.pop();
        }
        else
        {
            cout << -1 << "\n";
        }
    }
    else if (cmd == "size")
    {
        cout << st.size() << "\n";
    }
    else if (cmd == "empty")
    {
        cout << st.empty() << "\n";
    }
    else if (cmd == "top")
    {
        if (st.size())
        {
            cout << st.top() << "\n";
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
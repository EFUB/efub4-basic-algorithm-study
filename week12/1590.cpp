#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> buses;

void putBusToArr(int S, int I, int C)
{
    for (int i = 0; i < C; i++)
    {
        buses.push_back(S + I * i);
    }
}

int getSolution(int T)
{
    for (int i = 0; i < buses.size(); i++)
    {
        if (T <= buses[i])
        {
            return buses[i] - T;
        }
    }
    return -1;
}

int main()
{
    int N, T;
    cin >> N >> T;

    int S, I, C;

    for (int i = 0; i < N; i++)
    {
        cin >> S >> I >> C;
        putBusToArr(S, I, C);
    }

    sort(buses.begin(), buses.end());
    // 배열의 최대 크기는 50*100

    cout << getSolution(T);
}
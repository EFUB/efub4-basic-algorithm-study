#include <iostream>
using namespace std;

void solve(int num) {
    int aws = 2;
    while (num--) {
        aws = aws * 2 - 1;
    }
    cout << aws * aws;
}

int main(void) {
    int num = 0;

    /* х╫╪Ж ют╥б */
    cin >> num;

    solve(num);
    return 0;
}
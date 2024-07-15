#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

char getSolution(string s)
{
    vector<int> alphabet(26, 0);
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] >= 'A' && s[i] <= 'Z')
        {
            // 대문자라면
            alphabet[s[i] - 'A'] = alphabet[s[i] - 'A'] + 1;
        }
        else
        {
            alphabet[s[i] - 'a'] = alphabet[s[i] - 'a'] + 1;
        }
    }

    int max = 0;
    for (int i = 0; i < 26; i++)
    {
        if (alphabet[max] < alphabet[i])
        {
            max = i;
        }
    }

    sort(alphabet.begin(), alphabet.end());
    if (alphabet[25] == alphabet[24])
    {
        return '?';
    }
    else
    {
        return 'A' + max;
    }
}

int main()
{
    string s;
    cin >> s;

    cout << getSolution(s);
}
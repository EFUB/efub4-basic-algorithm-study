#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
    int n, m;
    
    cin >> n >> m;
    int table[n][m];
    int white_chess[n][m];
    int black_chess[n][m];
    
    // 입력
    for(int i= 0; i<n; i++){
        for(int j=0;j<m;j++){
            char color;
            cin >> color;
            if(color == 'W') table[i][j] = 1;
            else table[i][j] = -1;
        }
    }
    
    // 체스판 초기화
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if((i+j) %2 ==1){
                white_chess[i][j] = 1;
                black_chess[i][j] = -1;
            }
            else{
                white_chess[i][j] = -1;
                black_chess[i][j] = 1;
            }
        }
    }
    
    int min = 100;
    
    for(int i=0; i+7<n; i++){
        for(int j=0; j+7<m; j++){
            
            int white_min = 0, black_min = 0;
            
            for(int col = i; col < i+8; col++){
                for(int row = j; row < j+8; row++){
                    if(table[col][row] != white_chess[col][row]) white_min++;
                    if(table[col][row] != black_chess[col][row]) black_min++;
                }
            }
            
            int gap;
            
            if(white_min < black_min) gap = white_min;
            else gap = black_min;
            
            if(gap < min) min = gap;
        }
    }
    
    cout << min;

    return 0;
}

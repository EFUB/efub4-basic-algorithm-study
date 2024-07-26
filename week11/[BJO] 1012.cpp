#include <iostream>
#include <algorithm>
using namespace std;

bool dfs(int m, int n, int y, int x, int field[][50], int bug_field[][50]){
    // 이미 방문한 곳이라면 false를 반환. 탐색 종료
    if(bug_field[y][x]==1) return false;
    
    // 아직 방문한 적이 없는 곳이라면 방문 표시
    bug_field[y][x]=1;
    
    // 주변의 배추 영역 확인 dfs
    int dx[4] = {0,0,1,-1};
    int dy[4] = {1,-1,0,0};
    for(int i=0;i<4;i++){
        int next_x = x+dx[i];
        int next_y = y+dy[i];
        if(next_x <0|| next_x >=m || next_y<0 || next_y>=n) continue;
        if(field[next_y][next_x] ==1 && bug_field[next_y][next_x]!=1){
            dfs(m,n,next_y,next_x,field,bug_field);
        }
    }
    return true;
}

int solution(int m, int n, int k, int field[][50]){
    // 애벌레의 초기값은 배추의 개수인 0로 설정.
    int bug_count = 0;
    int bug_field[50][50]={0,};
    
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            
            // 해당 위치에 배추가 심겨 있고, 아직 방문한 적 없다면
            if(field[i][j]==1 && bug_field[i][j] !=1){
                
                // 해당 배추 주변의 배추 영역 탐색 -> dfs , 필요한 벌레 수 증가.
                if(dfs( m, n, i,j, field, bug_field) == true) bug_count++;
            }
        }
    }
    return bug_count;
}

int main()
{
    // 입력받기
    int T, M, N, K;
    cin >> T;
    for(int i=0; i<T; i++){
        cin >> M >> N >> K;
        
        // 배추밭은 모두 0으로 초기화
        int field[50][50] = {0,};
        
        for(int j=0;j<K;j++){
            int x,y;
            cin >> x >> y;
            
            // 배추가 심겨 있는 위치만 1로 표시
            field[y][x] = 1;
        }
        
        //필요한 애벌레 최소 수 출력
        cout<< solution(M, N, K, field) << "\n";
    }
 
    return 0;
}

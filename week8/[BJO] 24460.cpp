#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int solution(int seatNum, int startI, int startJ,int(*seat) [1025]){

    // 1명이 남았다면 그 한 명을 반환
    if(seatNum*seatNum == 1){
        return seat[startI][startJ];
    }
    
    else{
        
        // 4 구역으로 나눔.
        seatNum = seatNum/2;
        
        // 각 재귀 호출(4구역으로 나눔)었을 때 뽑힌 좌석 번호를 저장할 벡터.
        // 매 재귀 호출 마다 초기화됨.
        /* 예를 들어 setNum이 4인 경우, 아래의 4개의 재귀를 통해 setNum이 2인 범위에 대한 당첨자 번호가 winner에 저장됨.
           (setNum=2 인 4개 구역에서 뽑힌 당첨자 번호가 저장됨.)
           해당 번호들을 벡터에 저장하여 그 번호들끼리의 당첨자를 선정함. : 2번째로 작은 번호.
           이렇게 뽑힌 번호는 setNum=8 인 경우의 winner에 저장되어 setnum=8인 경우에 대한 당첨자를 뽑는 것에
           다시 이용될 것임.
           (setNum=4 인 4개 구역에서 뽑힌 당첨자 번호들을 이용하여 setNum=8인 경우에 대한 당첨자 선정.)
           이런 방식으로 재귀 호출이 이루어질 것임.
        */
        vector<int> winner;
        
        // 1번 구역에서의 좌석 번호
        winner.push_back(solution(seatNum, startI, startJ, seat));
        
        // 2번 구역에서의 좌석 번호
        winner.push_back(solution(seatNum, startI + seatNum, startJ, seat));
        
        // 3번 구역에서의 좌석 번호
        winner.push_back(solution(seatNum, startI, startJ+seatNum, seat));
        
        // 4번 구역에서의 좌석 번호
        winner.push_back(solution(seatNum, startI + seatNum, startJ + seatNum, seat));
        
        // 뽑힌 번호들 중 2번째로 작은 번호를 반환함.
        sort(winner.begin(), winner.end());
        return winner[1];
    }
}

int main()
{
    int N;
    
    // N 입력
    cin >> N;

    // 좌석 번호 입력
    int seat[1025][1025];
    
    for(int i=0; i<N;i++){
        for(int j=0; j<N; j++){
            cin >> seat[i][j];
        }
    }
    cout << solution(N, 0,0, seat);
}

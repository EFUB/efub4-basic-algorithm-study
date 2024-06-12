#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

vector<int> winning;

void solution(int seatNum, int startI, int startJ,int(*seat) [1025]){

    // 4명이 남았다면 당첨자 추첨
    if(seatNum*seatNum == 4){
        
        // 해당 구역에서의 당첨차 추첨
        int lot[4] = {0, 0, 0, 0};
        for(int i = startI, k=0; i<startI+2; i++){
            for(int j = startJ; j<startJ+2; j++){
               lot[k] = seat[i][j];
               k++;
            }
        }
        sort(lot, lot+4);
    
        int winner = lot[1];
        winning.push_back(winner);
        return;
    }
    
    else{
        // 4 구역으로 나눔.
        seatNum = seatNum/2;
        solution(seatNum, startI, startJ, seat);
        solution(seatNum, startI + seatNum, startJ, seat);
        solution(seatNum, startI, startJ+seatNum, seat);
        solution(seatNum, startI + seatNum, startJ + seatNum, seat);
    }
}

int main()
{
    int N;
    
    // N 입력
    cin >> N;

    // 좌석 번호 입력
    int seat[1025][1025];

    if(N ==0){
        return 0;
    }
    else if(N ==1){
        int aws;
        cin >> aws;
        cout << aws;
        return 0;
    }
    else{
    for(int i=0; i<N;i++){
        for(int j=0; j<N; j++){
            cin >> seat[i][j];
        }
    }
    
    solution(N, 0,0, seat);
    
    sort(winning.begin(), winning.end());
    if(winning.size() == 1) cout << winning[0];
    else{ cout << winning[1];}
    return 0;
    }
}

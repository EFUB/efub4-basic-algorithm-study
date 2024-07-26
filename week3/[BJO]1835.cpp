#include <iostream>
#include <deque>
using namespace std;


int main() {
	deque<int> deq;      // 덱
	int N;             // 명령의 수

	cin >> N;
	
	for(int i=N; i>=1; i--){
	    // 카드를 덱의 맨 앞에 넣는다.
	    deq.push_front(i);
	    
	    // i 번 맨 뒤의 카드를 맨 앞으로 옮긴다.
	    for(int j=i; j>0; j--){
	        deq.push_front(deq.back());
	        deq.pop_back();
	    }
	}
    
  // 카드 순서 출력
	for(int i=0;i<N; i++){
	    cout << deq[i] <<" ";
	}
	
	return 0;
}

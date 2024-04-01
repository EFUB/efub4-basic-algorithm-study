#include <iostream>
#include <queue>
using namespace std;


int main() {
	queue<int> q;      // 스택
	int N;             // 명령의 수
	string command;    // 명령어
	int num;           // push 연산 시, 스택에 넣을 정수
	int result = 0;    // 각 명령어의 결과값

	cin >> N;

	for (int i = 0; i < N; i++) {
		cin >> command;

		// 1. push
		if (command == "push") {
			cin >> num;
			q.push(num);
		}

		// 2. pop
		//    큐가 비어있으면 -1을 출력, 그 외에는 top 값을 출력 후 pop
		else if (command == "pop") {
			if (q.size() == 0) result = -1;
			else {
				result = q.front();
				q.pop();
			}
			cout << result << endl;
		}

		// 3. size
		else if (command == "size") {
			cout << q.size() << endl;
		}

		// 4. empty
		//    size함수를 통해, size가 0이면 큐 빈 것이므로 1, 아니면 0 출력     
		else if (command == "empty") {
			if (q.size() == 0) result = 1;
			else result = 0;
			cout << result << endl;
		}

		// 5. front
		// 큐가 비어있으면 -1을 출력, 그 외에는 front 값을 출력
		else if (command == "front") {
			if (q.size() == 0) result = -1;
			else result = q.front();
			cout << result << endl;
		}
		
		// 6. back
		// 큐가 비어있으면 -1을 출력, 그 외에는 back 값을 출력
		else if(command == "back"){
		    if(q.size() == 0) result = -1;
		    else result = q.back();
		    cout << result << endl;
		}
	}
	return 0;
}

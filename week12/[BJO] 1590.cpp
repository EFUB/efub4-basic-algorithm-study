#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int N, T;
int S, I, C;
int ret = -1;
int tmp = 987654321;

bool is_possible(int mid) {
	if (S + I * (mid - 1) >= T) return true;
	return false;
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

	cin >> N >> T;

	for (int i = 0; i < N; i++) {
		cin >> S >> I >> C;

		int left = 1, right = C; //시작지점부터 최대지점까지

		while (left <= right) {
			int mid = (left + right) / 2;
			if (is_possible(mid)) {
				ret = (S + I * (mid - 1)) - T;
				ret = min(tmp, (S + I * (mid - 1)) - T);
				tmp = ret;
				right = mid - 1;
			}
			else left = mid + 1;
		}
	}

	cout << ret;
}

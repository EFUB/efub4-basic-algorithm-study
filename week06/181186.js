// 2024.05.12 풀이
// 아방가르드 타일링
// https://school.programmers.co.kr/learn/courses/30/lessons/181186

let n = 3;

function solution(n) {
	// 나머지 연산을 할 상수 선언
	const mod = 1000000007;
	// 1, 2, 5 이후 2, 2, 4 반복
	/* 점화식
	dp[i] =
		dp[i - 1] +
		dp[i - 2] * 2 +
		dp[i - 3] * 5 +
		dp[i - 4] * 2 +
		dp[i - 5] * 2 +
		dp[i - 6] * 4 + ... */
	// 패턴별 누적합을 저장할 배열, dp[0] = 1
	const dp = [1, 1, 3, 10, 23, 62];
	/* 점화식 소거
	dp[i] - dp[i-3] 계산 후 좌항에 dp[i]만 남기면
	dp[i] =
		dp[i - 1] +
		dp[i - 2] * 2 +
		dp[i - 3] * 6 +
		dp[i - 4]
		- dp[i - 6] */
	for (let i = 6; i <= n; i++) {
		dp[i] =
			(dp[i - 1] +
				2 * dp[i - 2] +
				6 * dp[i - 3] +
				dp[i - 4] -
				dp[i - 6] +
				mod) %
			mod;
		// mod로 더하고 나누는 이유는 음수가 되는 것을 방지하기 위함
	}
	return dp[n];
}

console.log(solution(n));
// 10

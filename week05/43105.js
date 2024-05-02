// 2024.05.02 풀이
// 정수 삼각형
// https://school.programmers.co.kr/learn/courses/30/lessons/43105

let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
// 30 = 7 + 3 + 8 + 7 + 5

function solution(triangle) {
	// 왼쪽 또는 오른쪽 대각선으로만 이동 가능
	// 거쳐간 숫자의 최댓값을 리턴

	// 1. 동적 프로그래밍
	// 트리의 가장 아래 단부터 시작
	for (let i = triangle.length - 1; i >= 0; i--) {
		// -1을 한 이유는 왼쪽 값과 그 오른쪽인 i+1 값을 비교하기 때문
		for (let j = 0; j < triangle[i].length - 1; j++) {
			// 왼쪽과 오른쪽 값을 비교하여 더 큰 값을 그 윗단에 더함
			triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
		}
	}
	// return triangle[0][0];

	// 2. reduce 사용
	return Math.max(
		...triangle.reduce(
			// prev는 윗단, curr는 아랫단을 의미
			// 1번과 달리 윗단에서부터 아랫단으로 내려가며 최댓값 계산
			(prev, curr) =>
				curr.map(
					(v, idx) =>
						// 비교하는 값은 윗단 prev[idx]와 그 왼쪽 값, 값이 없다면 0으로 비교
						// v = 아랫단 curr[idx], 윗단의 두 값 중 더 큰 값을 아랫단 v에 더함
						v + Math.max(prev[idx] || 0, prev[idx - 1] || 0)
				),
			[]
		)
	);
}

console.log(solution(triangle));

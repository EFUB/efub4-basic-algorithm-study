// 2024.07.04 풀이
// 네트워크
// https://school.programmers.co.kr/learn/courses/30/lessons/43162

let n = 3;
let computers = [
	[1, 1, 0],
	[1, 1, 0],
	[0, 0, 1],
];

function solution(n, computers) {
	let cnt = 0;
	let visited = new Array(n).fill(false);
	// DFS 탐색 함수
	function dfs(i) {
		// 방문한 적 있는 노드면 개수 세지 않음
		if (visited[i]) return 0;
		else {
			// 방문한 적 없는 노드면 방문한 것으로 표시
			visited[i] = true;
			for (let j = 0; j < n; j++) {
				// 같은 컴퓨터의 다른 노드에 대해 탐색 계속
				if (computers[i][j]) dfs(j);
			}
			// 개수 셈
			return 1;
		}
	}
	// 전체 컴퓨터에 대해 탐색 후 개수 합산
	for (let i = 0; i < n; i++) cnt += dfs(i);
	return cnt;
}

console.log(solution(n, computers));

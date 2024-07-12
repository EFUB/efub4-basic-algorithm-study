// 2024.07.12 풀이
// 유기농 배추
// https://www.acmicpc.net/problem/1012

const fs = require("fs");
const path = "./input.txt";

const readline = require("readline");
const rl = readline.createInterface({
	// input: process.stdin,
	input: fs.createReadStream(path),
	output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	solution(input);
	process.exit();
});

function dfs(graph, n, m, x, y) {
	// 범위를 벗어나는 경우 종료
	if (x < 0 || x > n - 1 || y < 0 || y > m - 1) return false;
	// 아직 처리되지 않은 배추가 있는 자리라면
	if (graph[x][y] === 1) {
		// 해당 노드 방문 처리 (지렁이 배치)
		graph[x][y] = -1;
		// 상하좌우의 위치에 대해 각각 모두 재귀 호출
		// 주변 인접한 곳에 배추가 있다면 그 또한 방문 처리
		dfs(graph, n, m, x - 1, y);
		dfs(graph, n, m, x, y - 1);
		dfs(graph, n, m, x + 1, y);
		dfs(graph, n, m, x, y + 1);
		// 새로운 군집이므로 true 반환하여 카운트 올리기
		return true;
	}
	// 이미 처리된 배추(-1)거나 배추가 없다면(0) false
	return false;
}

function solution(input) {
	let T = +input[0];
	let line = 1;
	while (T--) {
		// 가로 길이 m, 세로 길이 n, 배추 개수 k
		const [m, n, k] = input[line].split(" ").map(Number);
		// 배추 위치 정보를 나타낼 m*n 크기의 2차원 배열 생성
		let graph = Array.from(new Array(n), () => new Array(m));
		// 각 배추 위치를 나타내는 줄에 대해
		for (let i = 1; i <= k; i++) {
			const [y, x] = input[line + i].split(" ").map(Number);
			graph[x][y] = 1; // 배추가 있는 곳에 1 저장
		}
		let answer = 0; // 필요한 지렁이 마리 수
		// 그래프의 모든 각 요소에 대해
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				// 탐색 결과가 참이면 카운트 올리기
				// 처음으로 군집이 발견되었을 때만 true를 반환하고
				// 이후 호출에 대해서는 방문한 곳의 -1이 false를 반환하므로
				// 연결 컴포넌트의 개수만 셀 수 있음
				if (dfs(graph, n, m, i, j)) answer++;
			}
		}
		console.log(answer);
		line += k + 1; // 다음 테스트 케이스로 이동
	}
}

// 2024.07.04 풀이
// 바닥 장식
// https://www.acmicpc.net/problem/1388

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

function solution(input) {
	const [n, m] = input.shift().split(" ").map(Number);
	const graph = input.map((line) => line.split(""));
	// 탐색 여부 저장 배열
	const visited = Array.from({ length: n }, () => new Array(m).fill(false));
	// 이동 연산을 위한 배열
	const d = [-1, 1];
	// DFS 함수
	function dfs(y, x, item) {
		// 해당 위치 방문 표시
		visited[y][x] = true;
		// 만약 세로 방향이라면
		if (item === "|") {
			// 위, 아래로 각각 이동
			for (let i = 0; i < 2; i++) {
				// 새로 이동할 좌표 계산
				const ny = y + d[i];
				// 범위 밖이면 다음 이동으로
				if (ny < 0 || ny >= n) continue;
				// 방문한 적 없는 곳이고, 같은 세로 방향이면 탐색 계속 진행
				if (!visited[ny][x] && graph[ny][x] === "|") dfs(ny, x, item);
			}
		} else {
			// 가로 방향일 때도 동일
			for (let i = 0; i < 2; i++) {
				const nx = x + d[i];
				if (nx < 0 || nx >= m) continue;
				if (!visited[y][nx] && graph[y][nx] === "-") dfs(y, nx, item);
			}
		}
	}
	// 개수를 저장할 변수
	let cnt = 0;
	// 바닥의 각 가로, 세로에 대해 반복
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			// 방문한 적 없는 곳이면 개수를 세고
			// 방문한 적 있는 곳이면 같은 나무 판자로 취급
			if (!visited[i][j]) {
				cnt++;
				// 다음 판자에 대한 탐색 진행
				dfs(i, j, graph[i][j]);
			}
		}
	}
	console.log(cnt);
}

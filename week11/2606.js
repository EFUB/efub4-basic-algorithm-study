// 2024.07.10 풀이
// 바이러스
// https://www.acmicpc.net/problem/2606

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
	const n = +input.shift();
	const m = +input.shift();
	const network = Array.from(new Array(n + 1), () => []);
	// 각 컴퓨터에 대해 연결된 컴퓨터를 저장하는 2차원 배열
	input.map((line) => {
		const [c1, c2] = line.split(" ").map(Number);
		network[c1].push(c2);
		network[c2].push(c1);
	});
	// 바이러스에 걸리게 된 컴퓨터의 개수를 셀 변수
	let count = 0;
	const visited = new Array(n + 1).fill(false);
	// 1번 컴퓨터를 방문한 (=바이러스에 걸린) 것으로 표시
	visited[1] = 1;
	// DFS 함수 구현
	function dfs(node) {
		// 현재 노드에 연결된 모든 각 컴퓨터에 대해
		for (let i = 0; i < network[node].length; i++) {
			// 아직 방문하지 않은 컴퓨터라면
			if (!visited[network[node][i]]) {
				visited[network[node][i]] = true; // 방문한 것으로 표시
				count++; // 연결되어 있으므로 바이러스에 감염, 카운트
				dfs(network[node][i]); // 탐색 계속
			}
		}
	}
	dfs(1); // 1번 컴퓨터부터 탐색 시작
	console.log(count);
}

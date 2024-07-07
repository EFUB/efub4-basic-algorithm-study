// 2024.07.01 풀이
// DFS와 BFS
// https://www.acmicpc.net/problem/1260

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
	// 정점의 개수 n, 간선의 개수 m, 탐색 시작 정점 번호 v
	const [n, m, v] = input.shift().split(" ").map(Number);
	// 입력 그래프의 정점과 연결 간선 정보를 저장할 배열
	// 정점 번호가 1부터 시작하기 때문에 인덱스 1은 사용 안함
	const graph = Array.from(new Array(n + 1), () => new Array());
	// 각 노드가 어떤 노드와 연결되어 있는지 저장
	// 1번 인덱스의 배열 = 1번 노드와 연결된 모든 노드 번호
	input.map((line) => {
		let [from, to] = line.split(" ").map(Number);
		graph[from].push(to);
		graph[to].push(from);
	});
	// 정점 번호 오름차순 정렬
	graph.forEach((arr) => {
		arr.sort((a, b) => a - b);
	});
	// 각 노드의 방문 여부와 방문 순서를 저장할 배열 (각 경우에 대해 재사용)
	let visited = new Array(n + 1).fill(0);
	let answer = [];
	// DFS 함수
	function DFS(v) {
		if (visited[v]) return;
		// 첫 탐색 노드 방문으로 표시
		visited[v] = 1;
		// 방문한 노드 탐색 순서 배열에 저장
		answer.push(v);
		// 현재 노드와 연결된 모든 노드에 대해 각각 재귀 호출
		graph[v].forEach((el) => {
			// 방문한 적 없을 때만 탐색
			if (!visited[el]) DFS(el);
		});
	}
	DFS(v);
	console.log(answer.join(" "));
	// 재사용 배열 초기화
	visited.fill(0);
	answer = [];
	// BFS 함수
	function BFS(v) {
		// 큐에 첫 탐색 노드 삽입
		let queue = [v];
		// 큐에 요소가 남아있지 않을 때까지
		while (queue.length) {
			// 큐의 가장 첫번째 요소 pop
			let x = queue.shift();
			if (visited[x] === 1) continue;
			// 큐의 첫 요소를 방문한 것으로 표시
			visited[x] = 1;
			// 방문한 노드 탐색 순서 배열에 저장
			answer.push(x);
			// 현재 노드와 연결된 모든 노드에 대해 각각 재귀 호출
			graph[x].forEach((el) => {
				// 방문한 적 없을 때만 큐에 해당 노드 저장
				if (!visited[el]) queue.push(el);
			});
		}
	}
	BFS(v);
	console.log(answer.join(" "));
}

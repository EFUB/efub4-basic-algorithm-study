// 2024.07.19 풀이
// IF문 좀 대신 써줘
// https://www.acmicpc.net/problem/19637

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
	const [N, M] = input.shift().split(" ").map(Number);
	// 주어진 칭호와 전투력 조건을 저장할 배열
	const condition = [];
	for (let i = 0; i < N; i++) {
		let [level, score] = input[i].split(" ");
		condition.push([level, +score]);
	}
	// 이분 탐색 함수 정의
	function binarySearch(score, condition) {
		let left = 0;
		let right = N - 1;
		// 현재 score가 가장 큰 score보다 크다면 해당 칭호 반환
		if (score > condition[right][1]) {
			return condition[right][0];
		}
		while (left < right) {
			const mid = Math.floor((left + right) / 2);
			// 현재 score가 중간값보다 작다면 좌측 절반 선택
			if (condition[mid][1] >= score) right = mid;
			// 반대의 경우 우측 절반 선택
			else left = mid + 1;
		}
		// 탐색된 칭호 반환
		return condition[left][0];
	}
	const answer = [];
	// 주어진 전투력에 대해 칭호 출력
	for (let i = N; i < N + M; i++) {
		const score = +input[i];
		let level = binarySearch(score, condition);
		answer.push(level);
	}
	console.log(answer.join("\n"));
}

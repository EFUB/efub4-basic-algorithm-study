// 2024.07.19 풀이
// 캠프가는 영식
// https://www.acmicpc.net/problem/1590

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
	const [[N, T], ...arr] = input.map((el) => el.split(" ").map(Number));
	let result = Infinity;
	for (let i = 0; i < N; i++) {
		// s 시작시간 t 간격 c 대수
		const [s, t, c] = arr[i];
		// 가장 마지막에 도착하는 버스가 터미널 도착 시간보다 빠른 경우 패스
		if (T > s + t * (c - 1)) continue;
		for (let j = 0; j < c; j++) {
			// 탈 수 있는 가장 빠른 버스가 있다면
			if (s + t * j >= T) {
				// 기존 결과와 현재 값 중 최솟값으로 업데이트
				result = Math.min(result, s + t * j);
				break;
			}
		}
	}
	console.log(result === Infinity ? -1 : result - T);
}

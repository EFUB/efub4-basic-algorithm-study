// 2024.04.07 풀이
// 안테나
// https://www.acmicpc.net/problem/18310

const fs = require("fs"); // 백준 제출 시 삭제
const path = "./input.txt"; // 백준 제출 시 삭제

const readline = require("readline");
const rl = readline.createInterface({
	// input: process.stdin, // 백준 제출 시 활성화
	input: fs.createReadStream(path), // 백준 제출 시 삭제
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
	const n = +input[0];
	const arr = input[1]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);
	// 오름차순으로 정렬하고 가장 중앙 값을 선택 (단 길이가 짝수일 경우 더 작은 수 선택)
	console.log(arr[Math.floor(n / 2) + (n % 2 ? 0 : -1)]);
}

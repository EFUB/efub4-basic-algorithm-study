// 2024.03.13 풀이
// 중앙 이동 알고리즘
// https://www.acmicpc.net/problem/2903

/*
5 -> 1089
*/

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
	const num = input[0];
	// 초기 상태의 한 변의 점의 개수는 2
	let dot = 2;
	// 횟수가 증가할 때마다 한 변의 점의 개수는 (점의 개수 - 1)만큼 증가
	for (let i = 1; i <= num; i++) {
		dot += dot - 1;
	}
	// 점의 개수는 한 변에 있는 점의 개수의 제곱
	console.log(Math.pow(dot, 2));
}

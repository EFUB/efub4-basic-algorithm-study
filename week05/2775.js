// 2024.04.30 풀이
// 부녀회장이 될테야
// https://www.acmicpc.net/problem/2775

/*
6
10
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

// 예시
// n층  1호 2호 3호 4호 5호
// 4층  1  6
// 3층  1  5
// 2층  1  4  10  20  35
// 1층  1  3  6   10  15
// 0층  1  2  3   4   5

function solution(input) {
	const T = +input.shift();
	for (let i = 0; i < T; i++) {
		const k = +input.shift();
		const n = +input.shift();
		// 1을 더한 이유는 0호에 0이 저장되고, 인덱스가 1부터 시작되는 것처럼 사용하기 위해
		const array = Array.from(new Array(k + 1), () => new Array(n + 1).fill(0));
		// 0층부터 있고 각 층에는 1호부터 있으며, 0층의 i호에는 i명
		for (let i = 1; i <= n; i++) {
			array[0][i] = i;
		}
		// a층의 b호 = a-1층의 1~b호까지 사람의 수의 합
		for (let i = 1; i <= k; i++) {
			for (let j = 1; j <= n; j++) {
				array[i][j] = array[i - 1][j] + array[i][j - 1];
			}
		}
		// k층에 n호에는 몇 명이 살고 있는지 출력
		console.log(array[k][n]);
	}
}

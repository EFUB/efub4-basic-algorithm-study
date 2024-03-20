// 2024.03.20 풀이
// 네 번째 점
// https://www.acmicpc.net/problem/3009

/*
출력1) 7 7
출력2) 30 10
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
	console.log(
		input
			.map((line) => line.split(" "))
			// 2차원 배열의 행과 열 바꾸기 (x, y 좌표끼리 묶어 저장)
			.reduce(
				(result, row) =>
					row.map((_, i) => [...(result[i] || []), Number(row[i])]),
				[]
			)
			.map(
				(line) =>
					// 이미 있는 좌표면 없애고 짝이 안맞는 좌표만 님김
					line.reduce(
						(prev, curr) =>
							prev.includes(curr)
								? prev.filter((el) => el !== curr)
								: [...prev, curr],
						[]
					)[0] // 배열 까기
			)
			.join(" ")
	);
}

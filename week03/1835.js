// 2024.03.27 풀이
// 카드
// https://www.acmicpc.net/problem/1835

/*
2 1 4 3
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
	// 문제 상황 (힌트) 그대로 뒤집어서 실행
	// 맨위 to 맨아래 n번 반복, 맨위를 꺼내면 그 수는 n
	// <-> i를 맨위에 넣음, 맨아래 to 맨위 i번 반복

	// 카드의 개수는 곧 마지막으로 꺼내는 가장 큰 숫자 n
	let answer = [num];

	// 카드가 1개일때는 옮길 필요가 없으므로 num-1부터 시작, 1까지 반복
	for (let i = num - 1; i > 0; i--) {
		// 맨위에 1 작은 카드 올리기
		answer = [i, ...answer];
		// 맨아래 -> 맨위로 이동을 i번 반복
		for (let j = 0; j < i; j++) {
			// 맨아래 카드 1개를 삭제하고 temp에 저장
			// 원본 배열을 직접 수정하는 splice 사용하여 answer에서는 삭제
			let temp = answer.splice(-1, 1);
			// temp에 저장된 맨아래 카드를 맨위로 이동
			answer = [...temp, ...answer];
		}
	}
	console.log(answer.join(" "));
}

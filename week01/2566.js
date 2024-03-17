// 2024.03.11 풀이
// 최댓값
// https://www.acmicpc.net/problem/2566

/*
90
5 7
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
	// input의 모든 숫자를 2차원 배열로 저장
	const nums = input.map((el) => el.split(" ").map((n) => +n));
	// 최댓값과 행열 정보를 저장할 변수 선언
	let maxValue = 0;
	let location = [0, 0];
	// 2차원 배열을 행 -> 열 순회
	nums.forEach((unit, i) => {
		unit.forEach((el, j) => {
			// 현재 값이 이전 최댓값보다 크거나 같으면
			if (maxValue <= el) {
				// 최댓값 및 행열 정보 업데이트
				maxValue = el;
				location = [i + 1, j + 1];
			}
		});
	});
	console.log(maxValue + `\n` + location.join(" "));
}

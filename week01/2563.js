// 2024.03. 풀이
// 색종이
// https://www.acmicpc.net/problem/2563

/*
260
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
	// input의 숫자 2차원 배열로 저장
	const arr = input.map((el) => el.split(" "));
	// 넓이를 카운트할 변수 선언
	let area = 0;
	// 100x100 크기의 0으로 채운 배열 생성
	const emptyArr = Array.from(new Array(100), () => new Array(100).fill(0));
	// 색종이 수를 의미하는 첫번째줄 제외하고 인덱스 1부터 반복
	for (let i = 1; i < arr.length; i++) {
		// 색종이의 위치 x, y 좌표를 변수에 저장
		const xpos = parseInt(arr[i][0]);
		const ypos = parseInt(arr[i][1]);
		// 색종이의 크기가 10x10이므로 가로/세로 각각 1x1씩 탐색 반복
		for (let j = 0; j < 10; j++) {
			for (let k = 0; k < 10; k++) {
				// 해당 1x1 위치를 이미 카운트했으면 넘어감
				if (emptyArr[xpos + k][ypos + j] == 1) continue;
				// 아직 카운트하지 않은 위치의 경우 넓이를 1 올리고 해당 1x1 위치에 표시
				else {
					emptyArr[xpos + k][ypos + j] = 1;
					area++;
				}
			}
		}
	}
	console.log(area);
}

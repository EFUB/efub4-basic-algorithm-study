// 2024.05.13 풀이
// 체스판 다시 칠하기
// https://www.acmicpc.net/problem/1018

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
	const [row, col] = input.shift().split(" ").map(Number);
	const array = input.map((line) => line.split(""));
	// 정상적으로 칠해진 체스판 2가지 경우
	const line = ["WBWBWBWB", "BWBWBWBW"];
	// 색칠해야 하는 수를 저장할 배열
	const answer = [];
	// i = x축(row) - 8
	for (let i = 0; i <= row - 8; i++) {
		// j = y축(col) - 8
		for (let j = 0; j <= col - 8; j++) {
			// k = 시작하는 칸이 흰색 또는 검은색인 각 경우
			for (let k = 0; k < 2; k++) {
				// 정상적 패턴과 다를 경우 색칠해야할 칸을 셀 변수
				let count = 0;
				// 현재 x, y축 시작점에 대해 한칸씩 8x8만큼 순회
				for (let x = 0; x < 8; x++) {
					for (let y = 0; y < 8; y++) {
						// 정상적으로 칠해지지 않았다면 count 올리기
						// line 배열의 경우 2로 나눈 나머지를 인덱스로 사용하여
						// 흰색/검은색 시작에 대한 라인을 각각 비교하며
						// 문자열에 대한 인덱스로는 순회중인 y 변수 사용
						if (array[i + x][j + y] !== line[(x + k) % 2][y]) count++;
					}
				}
				// 8x8 순회가 끝나면 다시 칠할 칸 수를 저장
				answer.push(count);
			}
		}
	}
	// 모든 행, 열에 대한 순회 끝난 후 count 중 최솟값 출력
	console.log(Math.min(...answer));
}

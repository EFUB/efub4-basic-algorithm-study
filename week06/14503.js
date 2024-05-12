// 2024.05.09 풀이
// 로봇 청소기
// https://www.acmicpc.net/problem/14503

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
	// n개의 줄(높이), m개의 칸(너비)
	const [n, m] = input.shift().split(" ").map(Number);
	// 초기 좌표 y(북에서 r+1번째 줄), x(서에서 c+1번째 칸)
	// d = 0북 1동 2남 3서 방향
	let [y, x, d] = input.shift().split(" ").map(Number);
	// 방의 상태에 대한 정보를 저장할 배열
	let room = input.map((line) => line.split(" ").map(Number));
	// 0북 1동 2남 3서 로 1칸 이동
	const dy = [-1, 0, 1, 0];
	const dx = [0, 1, 0, -1];
	// 회전 수를 저장할 변수
	let temp = 0;
	while (1) {
		// 2. 주변 4칸이 모두 청소되었거나 벽이라서 원래 방향으로 돌아온 경우
		if (temp === 4) {
			// 후진 = 2번 회전한 방향으로 한칸 전진
			// 0 -> 2, 1 -> 3, 2 -> 0, 3 -> 1 이므로 2를 더하고 모듈로 4
			// 단 아래 경우와 달리 d를 변경하면 안됨
			const [backY, backX] = [y + dy[(d + 2) % 4], x + dx[(d + 2) % 4]];
			// 뒤쪽 칸이 벽이라 후진할 수 없는 경우 작동 멈춤
			if (room[backY][backX] === 1) break;
			// 한 칸 후진하고 1번 반복
			else {
				y = backY;
				x = backX;
				temp = 0;
			}
		}
		// 1. 현재 칸을 청소
		if (room[y][x] === 0) {
			// 청소 완료된 상태는 벽과 구분하기 위해 -1로 설정
			room[y][x] = -1;
		}
		// 3. 주변 4칸 중 청소되지 않은 빈 칸을 청소
		// 반시계 방향으로 왼쪽 회전 = 1을 빼기, 단 0일 때는 3
		d = d === 0 ? 3 : d - 1;
		const [leftY, leftX] = [y + dy[d], x + dx[d]];
		if (room[leftY][leftX] === 0) {
			y = leftY;
			x = leftX;
			temp = 0;
		} else {
			temp++;
		}
	}
	// -1인 요소의 개수를 세서 정답 출력
	console.log(
		room.reduce(
			(accum, line) => accum + line.filter((el) => el === -1).length,
			0
		)
	);
}

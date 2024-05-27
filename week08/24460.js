// 2024.05.24 풀이
// 특별상이라도 받고 싶어
// https://www.acmicpc.net/problem/24460

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
	const n = +input.shift();
	const arr = input.map((line) => line.split(" ").map(Number));
	// 주어진 좌표 (x, y)에서 시작하여 크기가 z인 부분 배열의 2번째로 작은 값을 반환
	function func(x, y, z) {
		// 크기가 1이면 해당 위치의 값 반환
		if (z === 1) return arr[x][y];
		// 4분할한 각 부분에서 2번째로 작은 값을 저장할 배열
		let tmp = new Array(4).fill(0);
		let k = 0; // tmp의 인덱스로 사용할 변수
		// 주어진 크기 z의 배열을 4개의 부분 배열로 나누어 재귀 호출
		// x, y 좌표를 각각 변수 i, j로 z 크기만큼 순회
		// z/2씩 증가시켜 2로 나누어 4분할
		for (let i = x; i < x + z; i += z / 2) {
			for (let j = y; j < y + z; j += z / 2) {
				tmp[k++] = func(i, j, z / 2);
			}
		}
		// 각 4분할에서 선택된 값을 정렬하고 그 중 2번째로 작은 값 반환
		tmp.sort((a, b) => a - b);
		return tmp[1];
	}
	console.log(func(0, 0, n));
}

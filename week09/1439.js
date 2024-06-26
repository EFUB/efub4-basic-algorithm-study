// 2024.06.26 풀이
// 뒤집기
// https://www.acmicpc.net/problem/1439

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
	const num = input[0].split("").map(Number);
	let tmp = -1;
	let arr = [0, 0]; // 0 묶음의 개수, 1 묶음의 개수
	num.map((el) => {
		//  직전과 현재 요소가 다르면 묶음이 새로 나누어지는 곳이므로
		// 요소를 인덱스로 사용하여 카운트 올리기
		if (tmp !== el) arr[el]++;
		// 현재 요소를 직전 요소를 나타내는 tmp에 저장
		tmp = el;
	});
	// 0과 1 묶음 개수 중 더 작은 수를 반환
	console.log(Math.min(...arr));
}

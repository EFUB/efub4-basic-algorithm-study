// 2024.06.26 풀이
// 주식
// https://www.acmicpc.net/problem/11501

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
	const n = input.shift();
	for (let i = 0; i < n; i++) {
		// 이익의 총합과 임시 최댓값을 저장할 변수
		let sum = 0,
			max = 0;
		// 역순으로 최댓값을 그리디하게 찾아야 함
		const arr = input[i * 2 + 1].split(" ").map(Number).reverse();
		arr.map((el) => {
			if (el > max) max = el; // 최댓값 업데이트
			else if (el < max) sum += max - el; // 팔고 이익 합산
		});
		console.log(sum);
	}
}

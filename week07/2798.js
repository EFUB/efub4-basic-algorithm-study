// 2024.05.14 풀이
// 블랙잭
// https://www.acmicpc.net/problem/2798

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
	const [[n, m], card] = input.map((line) => line.split(" ").map(Number));
	let answer = 0,
		tmp = 0;
	for (let i = 0; i < n - 2; i++) {
		for (let j = i + 1; j < n - 1; j++) {
			for (let k = j + 1; k < n; k++) {
				// 모든 3개의 카드 조합에 대한 합 계산
				tmp = card[i] + card[j] + card[k];
				// 합이 m보다 작거나 같고 이전에 저장한 값보다 크면 업데이트
				if (tmp <= m && tmp > answer) answer = tmp;
			}
		}
	}
	console.log(answer);
}

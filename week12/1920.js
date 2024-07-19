// 2024.07.19 풀이
// 수 찾기
// https://www.acmicpc.net/problem/1920

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
	const n_arr = input[1]
		.split(" ")
		.map((v) => +v)
		.sort((a, b) => a - b);
	const m_arr = input[3].split(" ").map((v) => +v);
	const result = [];
	// 1. 이분 탐색 풀이
	m_arr.forEach((m) => {
		let start = 0;
		let end = n_arr.length - 1;
		let isNumberInArray = false;
		while (start <= end) {
			let mid = parseInt((start + end) / 2);
			if (m < n_arr[mid]) end = mid - 1;
			else if (m > n_arr[mid]) start = mid + 1;
			else {
				// m이 n_arr[mid]와 같다면 배열 안에 수가 있으므로 종료
				isNumberInArray = true;
				break;
			}
		}
		if (isNumberInArray) result.push(1);
		else result.push(0);
	});
	console.log(result.join("\n"));

	// 2. Set을 이용한 풀이
	const set = new Set(n_arr);
	const result2 = m_arr.map((v) => (set.has(v) ? 1 : 0));
	// console.log(result2.join("\n"));
}

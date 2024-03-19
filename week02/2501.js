// 2024.03.19 풀이
// 약수 구하기
// https://www.acmicpc.net/problem/2501

/*
6 3 -> 3
25 4 -> 0
2735 1 -> 1
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
	const n = input[0].split(" ")[0];
	const k = input[0].split(" ")[1];
	// 약수를 저장할 배열 선언
	let list = [];
	// 1부터 시작하여 n이 될때까지 반복
	for (let i = 1; i <= n; i++) {
		// n을 i로 나눈 나머지가 0이면 약수, 배열에 추가
		if (n % i === 0) list.push(i);
		// 추가한 약수가 k번째라면 탐색 종료 (인덱스이므로 1을 빼서 비교)
		if (list.indexOf(i) === k - 1) break;
	}
	// 약수의 개수보다 k가 크면 0을 리턴
	console.log(list.length < k ? 0 : list[k - 1]);
}

// 2024.05.01 풀이
// 거스름돈
// https://www.acmicpc.net/problem/14916

/*
13 -> 5 (5원 1개, 2원 4개)
14 -> 4 (5원 2개, 2원 2개)
15 -> 3 (5원 3개, 2원 0개)
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
	let n = +input[0];
	// 1. 그리디 알고리즘 - 5원을 최대한 많이 사용
	// 단, 짝수일때 5를 쓰면 2로 거슬러 줄 수 없기 때문에
	// 홀수이거나, 5로 나누어질 때만 5 사용
	// 나눠지지 않는 경우에 대한 에러 처리
	// if (n === 1 || n === 3) return -1;
	// let answer = 0;
	// while (n > 0) {
	// 	if (n % 2 === 1 || n % 5 === 0) {
	// 		answer++;
	// 		n -= 5;
	// 	} else if (n % 2 === 0) {
	// 		answer++;
	// 		n -= 2;
	// 	}
	// }
	// console.log(answer);

	// 2. 동적 프로그래밍
	// n원까지의 모든 최소 조합 개수를 차례대로 저장
	// 0~n까지 n+1개의 수를 저장할 배열
	let array = new Array(n + 1).fill(0);
	// 0부터 5까지는 직접 최소 조합의 개수 입력
	[Infinity, Infinity, 1, Infinity, 2, 1].map((el, idx) => {
		array[idx] = el;
	});
	for (let i = 6; i < array.length; i++) {
		// (n - 2) 원 에서의 최소 조합의 개수
		// (n - 5) 원 에서의 최소 조합의 개수
		// 둘 중 작은 값 + 1이 n원의 최소 조합의 개수
		array[i] = Math.min(array[i - 2], array[i - 5]) + 1;
	}
	console.log(array[n] === Infinity ? -1 : array[n]);
}

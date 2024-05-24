// 2024.05.24 풀이
// 치킨 TOP N
// https://www.acmicpc.net/problem/11582

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
	const N = +input[0];
	const K = +input[2];
	let arr = input[1].split(" ").map(Number);
	let answer = new Array(N);

	function merge(left, right) {
		// K는 정렬을 분담하는 사람의 수, 즉 배열은 K개이며 크기는 N/K
		// right-left는 현재 정렬 중인 배열의 크기
		// 현재 정렬 중인 배열이 K명이 정렬하는 단계의 배열 크기보다 작거나 같아야 함
		// 커지는 순간 다음 단계로 넘어간 것임으로 정렬 종료
		if (right - left > N / K) return;
		let mid = Math.floor((left + right) / 2); // 분할할 인덱스
		let i = left; // 왼쪽 배열의 인덱스
		let j = mid + 1; // 오른쪽 배열의 인덱스
		let k = left; // 복사할 배열 answer의 인덱스
		// 두 인덱스 중 한쪽이라도 먼저 끝나면 나머지는 그대로 복사
		while (i <= mid && j <= right) {
			// 양쪽 배열 중 작은 값을 answer로 복사
			if (arr[i] <= arr[j]) answer[k++] = arr[i++];
			else answer[k++] = arr[j++];
		}
		// 나머지 요소를 그대로 복사하기 위해 사용할 인덱스
		// 왼쪽 배열의 i가 mid를 초과했다면 오른쪽 배열의 j 사용
		let tmp = i > mid ? j : i;
		// 남은 요소들을 tmp를 포인터로 하여 answer에 복사
		while (k <= right) answer[k++] = arr[tmp++];
		// 정렬 결과를 기존 배열 arr에 복사
		for (let i = left; i <= right; i++) arr[i] = answer[i];
	}

	function partition(left, right) {
		if (left < right) {
			let mid = Math.floor((left + right) / 2);
			partition(left, mid);
			partition(mid + 1, right);
			merge(left, right);
		}
	}

	partition(0, N - 1);
	console.log(answer.join(" "));
}

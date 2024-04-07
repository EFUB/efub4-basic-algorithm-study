// 2024.04.07 풀이
// K번째 수
// https://www.acmicpc.net/problem/11004

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
	const [n, k] = input[0].split(" ");
	const arr = input[1].split(" ").map(Number);
	// In place Quick Sort 사용 - 메모리 공간 절약, unstable
	// 참고) https://blog.kakaocdn.net/dn/bvk8dw/btqwVhxq7vQ/F6wCsUPw77h1fGBej78S8k/img.png
	console.log(quickSort(arr, 0, n - 1)[k - 1]);
}

// 퀵 정렬 함수 정의
function quickSort(arr, left, right) {
	// 왼쪽 포인터가 오른쪽 포인터와 같거나 교차되면 정렬 완료
	if (left >= right) {
		return;
	}
	// 배열의 중앙값을 피벗으로 선택
	const pivot = arr[Math.floor((left + right) / 2)];
	// 분할 정복 실행, 리턴 값인 왼쪽 포인터 = 하위 배열의 중심값이자 피벗
	const partition = divide(arr, left, right, pivot);
	// 하위 배열에 대해 재귀적으로 퀵 정렬 호출
	// = 피벗보다 작은 원소 배열, 큰 원소 배열 2개에 대해 정렬 반복
	quickSort(arr, left, partition - 1);
	quickSort(arr, partition, right);
	return arr;
}

// 분할 정복 함수 정의
function divide(arr, left, right, pivot) {
	// 오른쪽 포인터가 왼쪽 포인터보다 왼쪽에 있어 교차될 때까지 반복
	while (left <= right) {
		// 왼쪽 포인터가 피벗보다 작으면
		while (arr[left] < pivot) {
			// 왼쪽 포인터를 한칸 오른쪽으로 단순 이동
			left++;
		}
		// -> 이 시점에서 왼쪽 포인터는 피벗보다 크거나 같은 수
		// 피벗보다 큰 수기 때문에 피벗 오른쪽으로 보내야 함

		// 오른쪽 포인터가 피벗보다 크면
		while (arr[right] > pivot) {
			// 오른쪽 포인터를 한칸 왼쪽으로 단순 이동
			right--;
		}
		// -> 이 시점에서 오른쪽 포인터는 피벗보다 작거나 같은 수,
		// 피벗보다 작은 수기 때문에 피벗 왼쪽으로 보내야 함

		// 두 포인터가 교차된게 아니라면
		if (left <= right) {
			// 두 포인터의 요소를 교환 (작은 쪽으로, 큰 쪽으로 넘기기)
			let tmp = arr[left];
			arr[left] = arr[right];
			arr[right] = tmp;
			// 두 포인터 한칸씩 더 이동
			left++;
			right--;
		}
	}
	// 포인터가 교차되면 반복문에서 빠져나와 왼쪽 포인터 반환
	return left;
}

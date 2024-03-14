// 2024.03.14 풀이
// 뒤에 있는 큰 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/154539

/*
[2, 3, 3, 5] -> [3, 5, 5, -1]
[9, 1, 5, 3, 6, 2] -> [-1, 5, 6, 6, -1, -1]
*/

let numbers = [9, 1, 5, 3, 6, 2];

function solution(numbers) {
	// 뒷 큰수를 찾을 수 없는 경우 리턴할 -1로 채운 초기 배열 생성
	let answer = Array(numbers.length).fill(-1);

	// 1. 뒤에서부터 순회 + 뒷 큰수 후보를 스택에 저장하는 풀이
	// 비교할 뒷 큰수를 임시로 저장할 스택 생성
	let temp = [];
	// 뒤에서부터 순회 시작
	for (let i = numbers.length - 1; i >= 0; i--) {
		// 스택에 남아있는 숫자가 있고, 그 중 마지막 요소와 현재 순회 중인 숫자를 비교
		while (temp.length !== 0 && numbers[i] >= temp.at(-1))
			// 현재 순회 중인 숫자가 더 작아질 때까지 스택 마지막 요소 제거
			temp.pop();
		// 스택에 남은 요소가 있다면 정답 배열의 해당 인덱스에 해당 숫자 저장
		if (temp.length !== 0) answer[i] = temp.at(-1);
		// 현재 순회 중인 숫자를 다음 요소(직전 숫자)와 비교하기 위해 스택에 추가
		temp.push(numbers[i]);
	}
	// return answer;

	// 2. ⭐️ 인덱스를 차례대로 저장하고 뒷 큰수를 찾으면 스택에서 제거하는 숏코딩 풀이
	answer = Array(numbers.length).fill(-1);
	// 인덱스를 저장할 스택 생성
	let stack = [0];
	for (let i = 1; i < numbers.length; i++) {
		// // 과정 시각화를 위한 출력
		// console.log("<", i, "번째, 현재 순회 숫자 : ", numbers[i], ">");
		// console.log(
		// 	"numbers",
		// 	numbers.join(" "),
		// 	"/ stack",
		// 	stack.map((el) => `[${el}] ${numbers[el]}`).join(" ")
		// );

		// 스택에 남아있는 요소가 있고,
		// 스택의 마지막 인덱스의 숫자보다 현재 순회 중인 숫자가 더 크다면 반복
		// -> at(-1)로 마지막 인덱스 접근 = 가장 최근에 저장 = 현재 숫자와 가장 가까운 수
		while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
			// 스택의 가장 마지막 요소를 제거하고
			// 정답 배열의 해당 인덱스 위치에 현재 순회 중인 숫자 저장
			// -> 아직 스택에 남아있는 인덱스 (더 이전, 왼쪽) 와 현재 숫자 다시 비교 반복
			answer[stack.pop()] = numbers[i];

			// // 과정 시각화를 위한 출력
			// console.log(
			// 	"answer",
			// 	answer.join(" "),
			// 	"/ stack",
			// 	stack.map((el) => `[${el}]`).join(" ")
			// );
		}
		// 현재 순회 중인 숫자를 다음 숫자와 비교하기 위해 스택에 추가
		stack.push(i);
	}
	return answer;
}

console.log(solution(numbers));

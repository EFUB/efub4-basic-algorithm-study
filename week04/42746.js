// 2024.04.07 풀이
// 가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746

let numbers = [3, 30, 34, 5, 9]; // "9534330"

function solution(numbers) {
	let answer = numbers
		// 문자열로 변환
		.map(String)
		// 두 수를 ab ba 순으로 붙여보고 빼서 더 큰 수는 앞으로 두도록 정렬
		// 내림차순의 비교함수가 (a, b) => b - a 인 것과 같은 원리
		// 이때 뺄셈 연산에서 숫자로 자동 형변환이 일어나지만 1을 곱해 명시적으로 타입 변환해줌
		.sort((a, b) => (b + a) * 1 - (a + b) * 1)
		// 정렬된 배열을 붙여 하나의 문자열로 만들기
		.join("");
	// 모든 요소가 0인 경우 000..0 과 같은 문자열이 생성되는데,
	// 이러한 케이스에 대한 방지를 위해 가장 큰 수가 0인 문자열은 0을 리턴하도록 방어
	return answer[0] === "0" ? "0" : answer;
}

console.log(solution(numbers));

// 2024.05.16 풀이
// 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

let [brown, yellow] = [24, 24];

function solution(brown, yellow) {
	// 가로 >= 세로
	// 초기에는 yellow가 없다 생각하고 높이 2인 사각형 가정
	let height = 2;
	let width = brown / 2;
	while (1) {
		// 높이를 1 늘리면 그에 따라 너비는 1씩 감소됨
		height++;
		width--;
		// 현재 너비와 높이를 곱한 넓이가 brown + yellow와 같다면 정답이므로 반복문 종료
		if (width * height === brown + yellow) break;
	}
	return [width, height];
}

console.log(solution(brown, yellow));
// [8, 6]

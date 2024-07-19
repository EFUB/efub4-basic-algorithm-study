// 2024.07.19 풀이
// 입국심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238

const n = 6;
const times = [7, 10];

function solution(n, times) {
	times.sort((a, b) => a - b);
	let s = 0,
		e = 1e18;
	while (s <= e) {
		let m = Math.floor((s + e) / 2);
		let total = times.reduce((acc, v) => acc + Math.floor(m / v), 0);
		if (total >= n) e = m - 1;
		else s = m + 1;
	}
	return Math.max(...times.map((v) => Math.floor(s / v) * v, 0));
}

console.log(solution(n, times));

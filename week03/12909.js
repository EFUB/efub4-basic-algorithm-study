// 2024.03.30 풀이
// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
	const stack = [];
	s.split("").map((item) =>
		item === "(" ? stack.push(item) : stack[0] ? stack.pop() : stack.push(item)
	);
	return !stack.length;
}

const s = ")()(";

console.log(solution(s));

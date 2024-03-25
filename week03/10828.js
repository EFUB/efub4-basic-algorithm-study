// 2024.03.25 풀이
// 스택
// https://www.acmicpc.net/problem/10828

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
	let stack = [];
	const func = {
		// pop하여 가장 마지막 값을 꺼내고 출력, undefined면 -1
		pop: () => queue.pop() || -1,
		size: () => queue.length,
		// 큐에 1번째 값이 있으면 비어있지 않음 (정수는 1 이상)
		empty: () => (stack[0] ? 0 : 1),
		top: () => stack.at(-1) || -1,
		push: (cmd) => {
			stack.push(cmd.split(" ")[1]);
			return "";
		},
	};
	console.log(
		input
			.slice(1)
			.reduce(
				(prev, curr) =>
					// 리턴이 빈 문자열인 push를 제외하고 각 메서드 실행
					prev + (func[curr] ? `${func[curr]()}\n` : func.push(curr)),
				"" // 초기값 반드시 빈 문자열로 설정해야함
			)
			// 마지막 개행 자르기
			.slice(0, -1)
	);
}

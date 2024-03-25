// 2024.03.21 풀이
// 삼각형과 세 변
// https://www.acmicpc.net/problem/5073

/*
Equilateral
Scalene
Invalid
Isosceles
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
	console.log(
		input
			.map((line) =>
				// 삼각형의 각 변 숫자를 Number형으로 변환하고 오름차순으로 정렬하여 2차원 배열에 저장
				line
					.split(" ")
					.map(Number)
					.sort((a, b) => a - b)
			)
			// 마지막 줄 제거
			.slice(0, -1)
			.map((line) =>
				// 가장 큰 변이 나머지 두 변의 합보다 크거나 같으면 삼각형이 아님
				line[0] + line[1] <= line[2]
					? "Invalid"
					: // 같은 요소는 한번만 저장되는 집합의 성질을 이용하여 판별
					new Set(line).size === 1
					? "Equilateral"
					: new Set(line).size === 2
					? "Isosceles"
					: "Scalene"
			)
			.join("\n")
	);
}

// 2024.05.23 풀이
// 칸토어 집합
// https://www.acmicpc.net/problem/4779

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
	input.forEach((n) => {
		let result = "-";
		for (let i = 0; i < +n; i++)
			result = result + " ".repeat(result.length) + result;
		console.log(result);
	});
}

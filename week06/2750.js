// 2024.05.07 풀이
// 수 정렬하기
// https://www.acmicpc.net/problem/2750

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
	input.shift();
	input.sort((a, b) => a - b).map((el) => console.log(el));
}

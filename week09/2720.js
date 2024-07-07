// 2024.06.26 풀이
// 세탁소 사장 동혁
// https://www.acmicpc.net/problem/2720

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
	const n = input.shift();
	const coin = [25, 10, 5, 1];
	console.log(
		input
			.map((money) => {
				const answer = [];
				coin.map((c) => {
					let count = 0;
					while (money - c >= 0) {
						money -= c;
						count++;
					}
					answer.push(count);
				});
				return answer.join(" ");
			})
			.join("\n")
	);
}

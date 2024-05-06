// 2024.05.06 풀이
// LCS (추가 학습)
// https://www.acmicpc.net/problem/9251

// const fs = require("fs");
// const path = "./input.txt";

const readline = require("readline");
// const r = readline.createInterface({
// 	// input: process.stdin,
// 	input: fs.createReadStream(path),
// 	output: process.stdout,
// });

// let input = [];

// r.on("line", function (line) {
// 	input.push(line);
// }).on("close", function () {
// 	solution(input);
// 	process.exit();
// });

// function solution(input) {
// 	const X = input[0].split("");
// 	const Y = input[1].split("");
// 	LCS(X, Y, X.length, Y.length);
// }

function LCS(X, Y, m, n) {
	const dp = Array.from(new Array(m + 1), () => new Array(n + 1));
	for (let i = 0; i <= m; i++) {
		dp[i][0] = 0;
	}
	for (let j = 0; j <= n; j++) {
		dp[0][j] = 0;
	}
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (X[i - 1] === Y[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	console.log(dp[m][n]);
}

// ===

// 실행 시 해당 디렉토리에서 터미널에 node 파일명.js 입력

// 터미널 표준 입출력을 위한 인터페이스 생성
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// LCSLength 함수 정의
function LCSLength(X, Y, m, n) {
	let b = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
	let c = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
	// 배열 생성 시 모든 요소를 0으로 초기화했기 때문에 마진을 0으로 채우는 코드 생략 가능
	// for (let i = 1; i <= m; i++) {
	// 	c[i][0] = 0;
	// }
	// for (let j = 0; j <= n; j++) {
	// 	c[0][j] = 0;
	// }
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (X[i - 1] === Y[j - 1]) {
				c[i][j] = c[i - 1][j - 1] + 1;
				b[i][j] = "↖︎";
			} else if (c[i - 1][j] >= c[i][j - 1]) {
				c[i][j] = c[i - 1][j];
				b[i][j] = "↑";
			} else {
				c[i][j] = c[i][j - 1];
				b[i][j] = "←";
			}
		}
	}
	// 알고리즘 확인을 위한 c, b 배열 출력 코드
	console.log("< 배열 c >");
	process.stdout.write(c.map((el) => el.join(" ")).join("\n"));
	console.log("\n< 배열 b >");
	process.stdout.write(b.map((el) => el.join(" ")).join("\n"));
	return { c, b };
}

// printLCS 함수 정의
function printLCS(b, X, i, j) {
	if (i === 0 || j === 0) return;
	if (b[i][j] === "↖︎") {
		printLCS(b, X, i - 1, j - 1);
		process.stdout.write(X[i - 1]);
	} else if (b[i][j] === "↑") {
		printLCS(b, X, i - 1, j);
	} else {
		printLCS(b, X, i, j - 1);
	}
}

// main 함수 정의
function main() {
	// 필요한 변수 선언 및 초기화
	let X = [],
		Y = [];
	let m = 0,
		n = 0;

	// 사용자로부터 X와 Y 내용 입력 받기
	rl.question("배열 X를 공백( )으로 구분하여 입력>>", (x) => {
		x.split(" ").map((el) => X.push(el));
		m = X.length;
		console.log(X, "m:", m);

		rl.question("배열 Y를 공백( )으로 구분하여 입력>>", (y) => {
			y.split(" ").map((el) => Y.push(el));
			n = Y.length;
			console.log(Y, "n:", n);

			// LCS 알고리즘 적용
			const { c, b } = LCSLength(X, Y, m, n);

			//printLCS 함수 호출해서 결과 출력
			console.log("\n< LCS >");
			printLCS(b, X, m, n);

			// 종료
			console.log("\n");
			rl.close();
		});
	});
}
main();

// 터미널 입력 없이 직접 배열로 선언하여 확인하는 test 함수 정의
function test() {
	// 배열 및 길이 선언
	const X = ["A", "B", "C", "B", "D", "A", "B"],
		Y = ["B", "D", "C", "A", "B", "A"];
	const m = X.length,
		n = Y.length;

	// 1. 교재 의사코드
	const { c, b } = LCSLength(X, Y, m, n);
	console.log("\n< LCS >");
	printLCS(b, X, m, n);
	console.log("\n");
	rl.close();

	// 2. 추가 구현
	LCS(X, Y, m, n);
}
// test();

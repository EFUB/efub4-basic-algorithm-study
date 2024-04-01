// 백준 - 중앙 이동 알고리즘 (2903)
// https://www.acmicpc.net/problem/2903
// 2024.03.16

// 0번 - 정사각형 1개 - 점 (2^2)개
// 1번 - 정사각형 4개 - 점 ((2+1)^2)개
// 2번 - 정사각형 4^2개 - 점 ((3+2)^2)개
// 3번 - 정사각형 4^3개 - 점 ((5+4)^2)개
// 4번 - 정사각형 4^4개 - 점 ((9+8)^2)개
// n번 - 정사각형 4^n개 - 점 ((이전 단계 한 변의 점 수 + 이전 단계 한 변의 점 수 - 1)^2)개

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const n = fs
.readFileSync(filePath)
.toString()
.trim();

let dotNum = 2; // 초기 상태 (0번) 한 변에 있는 점 개수

for (var i = 0; i < parseInt(n); i++) {
    // 한 변의 점 개수 + (한 변의 점 개수 - 1) n번 반복
    dotNum = dotNum + dotNum - 1;
}

console.log(dotNum**2);
// 백준 - 거스름돈 (14916) ⭐ 잘 모르겠음 -> 나중에 다시 풀어보기
// https://www.acmicpc.net/problem/14916
// 2024.05.05

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

let n = parseInt(input);
let answer = 0;

if (n === 1 || n === 3) return -1;
while (n > 0) {
  if (n % 2 === 1 || n % 5 === 0) {
    // 숫자가 홀수거나 5로 나누어 떨어지면
    answer += 1;
    n -= 5;
  } else if (n % 2 === 0) {
    // 2로만 나누어 떨어지면
    answer += 1;
    n -= 2;
  }
}

console.log(answer);

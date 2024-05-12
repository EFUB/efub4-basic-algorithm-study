// 백준 - 수 정렬하기 (2750)
// https://www.acmicpc.net/problem/2750
// 2024.05.12

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = input.slice(1).sort((a, b) => a - b);
answer.forEach((elem) => {
  console.log(elem);
});

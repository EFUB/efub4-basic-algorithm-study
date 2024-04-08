// 백준 - 세 수 (10817)
// https://www.acmicpc.net/problem/10817
// 2024.04.01

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

input.sort((a, b) => b - a);

console.log(input[1]);

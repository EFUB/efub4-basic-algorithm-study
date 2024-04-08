// 백준 - K번째 수 (11004)
// https://www.acmicpc.net/problem/11004
// 2024.04.05

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number)); // [ [ 5, 2 ], [ 4, 1, 2, 3, 5 ] ] 이런 형식

const k = parseInt(input[0][1]); // k번째 수
const arr = [...input[1]]; // 수 n개 배열

arr.sort((a, b) => a - b); // 오름차순 정렬

console.log(arr[k-1]); // k번째 수 정렬

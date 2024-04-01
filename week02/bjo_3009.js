// 백준 - 네 번째 점 (3009)
// https://www.acmicpc.net/problem/3009
// 2024.03.22

// x좌표, y좌표끼리 따로 모아두기
// 배열 정렬해두면
// a, b, b 아니면 a, a, b 이런 형태이니까
// 가운데 값이랑 첫 번째 값 비교해서
// 같으면 첫 번째 값, 다르면 세 번째 값 출력

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let x_arr = []; // x좌표 배열
let y_arr = []; // y좌표 배열

input.forEach((el) => {
  x_arr.push(el[0]); // x좌표만 모아놓기
  y_arr.push(el[1]); // y좌표만 모아놓기
});

x_arr.sort((a, b) => b - a); // x좌표 정렬
y_arr.sort((a, b) => b - a); // y좌표 정렬

let x = x_arr[1] === x_arr[0] ? x_arr[2] : x_arr[0];
let y = y_arr[1] === y_arr[0] ? y_arr[2] : y_arr[0];

console.log(x, y);

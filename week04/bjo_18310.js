// 백준 - 안테나 (18310)
// https://www.acmicpc.net/problem/18310
// 2024.04.05

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const location = [...input[1]]; // 집 위치 배열
location.sort((a, b) => a - b); // 오름차순 정렬 (답은 최솟값을 출력해야하므로)

// 중간값 출력 (배열 요소 개수가 짝수인 경우 내림)
console.log(location[Math.floor((parseInt(input[0]) - 1) / 2)]);
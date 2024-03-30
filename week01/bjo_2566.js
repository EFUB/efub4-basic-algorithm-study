// 백준 - 최댓값 (2566)
// https://www.acmicpc.net/problem/2566
// 2024.03.16

// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

let max = parseInt(input[0][0]); // 초기값
let coordinate = [1, 1]; // 초기 좌표 값

for (var i = 0; i < input.length; i++) {
  for (var j = 0; j < input[0].length; j++) {
    if (parseInt(input[i][j]) > max) {
      // max보다 크면
      max = parseInt(input[i][j]); // 현재 값을 max로 변경
      coordinate = [i + 1, j + 1]; // 좌표 값 저장 (문제에서 1행, 1열부터 시작이므로 +1)
    }
  }
}

// 출력
console.log(max);
console.log(`${coordinate[0]} ${coordinate[1]}`);
